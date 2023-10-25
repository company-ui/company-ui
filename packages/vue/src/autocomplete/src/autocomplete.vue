<template>
  <div
    ref="reference"
    class="company-autocomplete"
    :class="[
      {
        'company-autocomplete--show-submit': showSubmitButton,
        'company-autocomplete--words': nativeInputValue.length > 0,
        'company-autocomplete--activated': suggestionVisible,
      },
    ]"
    v-click-outside="handleClickOutside"
    @keydown="handleKeyDown"
  >
    <div class="company-autocomplete__input">
      <input
        ref="input"
        type="text"
        v-bind="$attrs"
        :placeholder="placeholder"
        @input="handleInput"
        @click="handleInputClick"
        @change="handleInputChange"
        @focus="handleInputFocus"
        @blur="handleInputBlur"
      />
      <div v-if="clearable" class="company-autocomplete__clear">
        <i class="company-autocomplete__clear-icon" @click="handleInputClear" v-html="clearIcon" />
      </div>
    </div>
    <div v-if="showSubmitButton" class="company-autocomplete__submit">
      <button type="button" @click="handleSubmit">
        {{ submitButtonLabel }}
      </button>
    </div>
    <Teleport to="body" :disabled="!popupAppendToBody">
      <div
        ref="floating"
        class="suggestion-popper"
        :class="[
          {
            'suggestion-popper--activated': suggestionVisible,
          },
        ]"
        :style="floatingStyles"
      >
        <div class="suggestion-popper__body">
          <div
            class="suggestion"
            v-for="(item, index) in suggestions"
            :key="`${item.name}-${index}`"
            @click="handleSuggestionClick(item)"
            :class="[
              {
                'suggestion--keyboard-active': keyboardActiveIndex === index,
              },
            ]"
          >
            <div class="suggestion__avatar">
              <i
                class="suggestion__avatar-icon"
                v-if="suggestionType === 'history'"
                v-html="historyItemIcon"
              />
              <img :alt="item.id" :src="item.avatar" v-else-if="item.avatar" />
            </div>
            <div class="suggestion__label">
              {{ item.name }}
            </div>
            <div class="suggestion__extra"></div>
          </div>
        </div>
        <div
          class="suggestion-popper__footer"
          v-show="historyClearable && suggestionType === 'history'"
        >
          <a href="javascript:;" @click="handleHistoryClear">
            <i class="suggestion-popper__icon" v-html="historyClearIcon" />
            删除历史
          </a>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType, isVue2, isVue3, CSSProperties } from 'vue-demi';
  import { autocomplete } from '@company-ui/core';
  import { debounce, removeHtmlTags, isUndefined, isNil } from '@company-ui/shared';
  import { autoUpdate, computePosition, offset, size, flip } from '@floating-ui/vue';
  import clickOutside from '../../directives/click-outside';
  import Teleport from '../../teleport';

  const debounceQueryMethod = 'handleDebounceQuerySuggestion';

  export default defineComponent({
    name: 'Autocomplete',
    directives: {
      clickOutside,
    },
    ...(isVue2
      ? {
          components: {
            Teleport,
          },
          model: {
            prop: 'modelValue',
            event: 'modelChange',
          },
        }
      : null),
    props: {
      modelValue: {
        type: String,
        default: '',
      },
      api: {
        type: String as PropType<autocomplete.Type.ApiType>,
        default: autocomplete.initialOptions.api,
      },
      queryDelay: {
        type: Number,
        default: autocomplete.initialOptions.queryDelay,
      },
      placeholder: {
        type: String,
        default: autocomplete.initialOptions.placeholder,
      },
      clearable: {
        type: Boolean,
        default: autocomplete.initialOptions.clearable,
      },
      backFill: {
        type: Boolean,
        default: autocomplete.initialOptions.backFill,
      },
      popupAppendToBody: {
        type: Boolean,
        default: autocomplete.initialOptions.popupAppendToBody,
      },
      autoFocus: {
        type: Boolean,
        default: autocomplete.initialOptions.autoFocus,
      },
      showSubmitButton: {
        type: Boolean,
        default: autocomplete.initialOptions.showSubmitButton,
      },
      submitButtonLabel: {
        type: String,
        default: autocomplete.initialOptions.submitButtonLabel,
      },
      offsetTop: {
        type: Number,
        default: autocomplete.initialOptions.offsetTop,
      },
      autoFlip: {
        type: Boolean,
        default: autocomplete.initialOptions.autoFlip,
      },
      historyEnabled: {
        type: Boolean,
        default: autocomplete.initialOptions.history.enabled,
      },
      historyType: {
        type: String as PropType<autocomplete.Type.HistoryType>,
        default: autocomplete.initialOptions.history.type,
      },
      historyStorageKey: {
        type: String,
        default: autocomplete.initialOptions.history.key,
      },
      historyClearable: {
        type: Boolean,
        default: autocomplete.initialOptions.history.showClear,
      },
    },
    emits: [
      isVue2 ? 'modelChange' : 'update:modelValue',
      'change',
      'input',
      'fetch',
      'abortFetch',
      'select',
      'clear',
      'focus',
      'blur',
      'submit',
      'dropdownVisibleChange',
    ],
    data() {
      return {
        isVue3,
        abortController: undefined as AbortController | undefined,
        latestKeyword: '' as string,
        selectSuggestion: undefined as autocomplete.Type.CompanyDataType | undefined,
        suggestionVisible: false,
        suggestionType: 'fetch',
        suggestions: [] as autocomplete.Type.CompanyDataType[],
        keyboardActiveIndex: undefined as number | undefined,
        floatingWidth: undefined as string | undefined,
        floatingStyles: {
          left: '0',
          top: '0',
          width: 'auto',
        } as CSSProperties,
        clearIcon: autocomplete.initialOptions.clearIcon,
        historyClearIcon: autocomplete.initialOptions.history.clearIcon,
        historyItemIcon: autocomplete.initialOptions.history.itemIcon,
      };
    },
    computed: {
      nativeInputValue(): string {
        return isNil(this.modelValue) ? '' : String(this.modelValue);
      },
    },
    watch: {
      nativeInputValue() {
        this.setNativeInputValue();
      },
    },
    created() {
      this[debounceQueryMethod] = debounce(this.handleQuerySuggestion, this.queryDelay);
    },
    mounted() {
      if (this.autoFocus) {
        this.handleFocus();
      }
      this.setNativeInputValue();
      this.handleCalculatePosition();
    },
    methods: {
      handleFocus() {
        (this.$refs.input as HTMLInputElement).focus();
      },
      handleCalculatePosition() {
        const reference = this.$refs.reference as HTMLElement;
        const floating = this.$refs.floating as HTMLElement;
        autoUpdate(reference, floating, () => {
          computePosition(reference, floating, {
            middleware: [
              offset(this.offsetTop),
              size({
                apply: ({ rects }) => {
                  this.floatingStyles.width = `${rects.reference.width}px`;
                },
              }),
              ...(this.autoFlip
                ? [
                    flip({
                      fallbackPlacements: ['top'],
                    }),
                  ]
                : []),
            ],
          }).then(({ x, y }) => {
            this.floatingStyles.left = `${x}px`;
            this.floatingStyles.top = `${y}px`;
          });
        });
      },
      handleCancelQuerySuggestion() {
        if (this.abortController) {
          this.abortController.abort('repeated request');
          this.abortController = undefined;
        }
      },
      async handleQuerySuggestion(value: string) {
        this.handleCancelQuerySuggestion();
        if (this.nativeInputValue === this.latestKeyword) {
          this.showSuggestion();
          return;
        }
        this.abortController = new AbortController();
        autocomplete
          .handleQueryData(value.trim(), this.api as string, this.abortController)
          .then(({ data }) => {
            this.latestKeyword = value.trim();
            this.suggestions = data;
            this.showSuggestion();
            this.$emit('fetch', data);
          })
          .catch((e) => {
            if (e.name === 'AbortError') {
              this.$emit('abortFetch', e);
            }
          });
      },
      setNativeInputValue() {
        const input = this.$refs.input as HTMLInputElement;
        if (input.value === this.nativeInputValue) {
          return;
        }
        input.value = this.nativeInputValue;
      },
      handleInput(event: Event) {
        this.hideSuggestion();
        const { value } = event.target as HTMLInputElement;
        this.handleUpdateModelValue(value);
        this.$emit('input', value);
        this.keyboardActiveIndex = undefined;
        this.selectSuggestion = undefined;
        if (value.length === 0) {
          this.clearSuggestion();
          return;
        }
        this[debounceQueryMethod](value);
      },
      handleInputClick() {
        if (this.nativeInputValue) {
          this.handleQuerySuggestion(this.nativeInputValue);
        } else if (this.historyEnabled) {
          this.latestKeyword = '';
          this.handleShowHistory();
        }
      },
      handleInputChange(event: Event) {
        const { value } = event.target as HTMLInputElement;
        this.$emit('change', value);
      },
      handleInputFocus() {
        this.$emit('focus');
      },
      handleInputBlur() {
        this.handleCancelQuerySuggestion();
        this.$emit('blur');
      },
      handleShowHistory() {
        const options = {
          enabled: this.historyEnabled,
          key: this.historyStorageKey,
          type: this.historyType,
        };
        this.suggestions = autocomplete.getHistory(options as autocomplete.Type.HistoryOptions);
        this.showSuggestion('history');
      },
      clearSuggestion() {
        this.suggestions = [];
      },
      showSuggestion(type = 'fetch') {
        if (this.suggestions.length === 0) {
          this.clearSuggestion();
          this.hideSuggestion();
          return;
        }
        this.suggestionType = type;
        if (this.suggestionVisible) {
          return;
        }
        this.suggestionVisible = true;
        this.$emit('dropdownVisibleChange', true);
      },
      hideSuggestion() {
        if (!this.suggestionVisible) {
          return;
        }
        this.suggestionVisible = false;
        this.$emit('dropdownVisibleChange', false);
      },
      handleSubmit() {
        this.$emit('submit', {
          text: this.nativeInputValue,
        });
      },
      handleInputClear() {
        this.selectSuggestion = undefined;
        this.handleUpdateModelValue('');
        this.clearSuggestion();
        this.hideSuggestion();
        this.handleFocus();
        this.$emit('clear');
      },
      handleClickOutside() {
        this.hideSuggestion();
      },
      handleKeyDown(event: KeyboardEvent) {
        switch (event.key) {
          case 'Enter':
            if (!isUndefined(this.keyboardActiveIndex)) {
              this.handleSuggestionClick(this.suggestions[this.keyboardActiveIndex!]);
            }
            break;
          case 'ArrowUp':
            if (!this.keyboardActiveIndex) {
              this.keyboardActiveIndex = this.suggestions.length - 1;
            } else {
              this.keyboardActiveIndex--;
            }
            this.backFill && this.handleFillInput();
            break;
          case 'ArrowDown':
            if (
              isUndefined(this.keyboardActiveIndex) ||
              this.keyboardActiveIndex! >= this.suggestions.length - 1
            ) {
              this.keyboardActiveIndex = 0;
            } else {
              this.keyboardActiveIndex!++;
            }
            this.backFill && this.handleFillInput();
            break;
          case 'Escape':
            this.handleInputClear();
            break;
        }
      },
      handleFillInput() {
        this.selectSuggestion = this.suggestions[this.keyboardActiveIndex!];
        this.handleUpdateModelValue(removeHtmlTags(this.selectSuggestion!.name || ''));
      },
      handleHistoryClear() {
        const options = {
          key: this.historyStorageKey,
          type: this.historyType,
        };
        autocomplete.removeHistory(options as autocomplete.Type.HistoryOptions);
        this.clearSuggestion();
        this.hideSuggestion();
      },
      handleSuggestionClick(company: autocomplete.Type.CompanyDataType) {
        this.handleUpdateModelValue(removeHtmlTags(company.name));
        this.selectSuggestion = {
          id: company.id,
          name: company.name,
        };
        this.clearSuggestion();
        this.hideSuggestion();
        if (this.historyEnabled && this.selectSuggestion) {
          const options = {
            enabled: this.historyEnabled,
            key: this.historyStorageKey,
            type: this.historyType,
          };
          autocomplete.addHistory(
            this.selectSuggestion!,
            options as autocomplete.Type.HistoryOptions
          );
        }
        this.$emit('select', this.selectSuggestion);
      },
      handleUpdateModelValue(value: string) {
        if (isVue2) {
          this.$emit('modelChange', value);
        } else {
          this.$emit('update:modelValue', value);
        }
      },
    },
  });
</script>

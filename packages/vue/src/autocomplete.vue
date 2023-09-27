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
        @focus="handleInputFocus"
        @blur="handleInputBlur"
      />
      <div v-if="clearable" class="company-autocomplete__clear">
        <i
          class="company-autocomplete__clear-icon i-ic-baseline-cancel"
          @click="handleInputClear"
        />
      </div>
    </div>
    <div v-if="showSubmitButton" class="company-autocomplete__submit">
      <button type="button" @click="handleSubmit">
        {{ submitButtonLabel }}
      </button>
    </div>
  </div>
  <Teleport to="body" :disabled="!popupAppendToBody" v-if="isVue3">
    <div
      ref="floating"
      class="suggestion-popper"
      :class="[
        {
          'suggestion-popper--activated': suggestionVisible,
        },
      ]"
      :style="floatingFullStyles"
    >
      <div class="suggestion-popper__body">
        <div
          class="suggestion"
          v-for="(item, index) in suggestions"
          :key="item.name"
          @click="handleSuggestionClick(item)"
          :class="[
            {
              'suggestion--keyboard-active': keyboardActiveIndex === index,
            },
          ]"
        >
          <div class="suggestion__avatar">
            <i
              class="suggestion__avatar-icon i-ic-baseline-history-toggle-off"
              v-if="suggestionType === 'history'"
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
          <i class="suggestion-popper__icon i-ic-baseline-auto-delete"></i>
          删除历史
        </a>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts">
  import {
    defineComponent,
    PropType,
    ref,
    Ref,
    onMounted,
    watch,
    computed,
    isVue3,
  } from 'vue-demi';
  import { autocomplete } from '@company-ui/core';
  import { debounce, removeHtmlTags, isUndefined, isNil } from '@company-ui/shared';
  import { useFloating, autoUpdate, offset, size, flip } from '@floating-ui/vue';
  import clickOutside from './directives/click-outside';

  export default defineComponent({
    name: 'Autocomplete',
    directives: {
      clickOutside,
    },
    props: {
      modelValue: {
        type: String,
        default: '',
      },
      api: {
        type: String as PropType<autocomplete.Type.ApiType>,
        default: 'clearbit',
      },
      queryDelay: {
        type: Number,
        default: 500,
      },
      placeholder: {
        type: String,
        default: '请输入企业名称或统一社会信用代码',
      },
      clearable: {
        type: Boolean,
        default: true,
      },
      backFill: {
        type: Boolean,
        default: false,
      },
      popupAppendToBody: {
        type: Boolean,
        default: true,
      },
      autoFocus: {
        type: Boolean,
        default: true,
      },
      showSubmitButton: {
        type: Boolean,
        default: true,
      },
      submitButtonLabel: {
        type: String,
        default: 'Submit',
      },
      offsetTop: {
        type: Number,
        default: 5,
      },
      autoFlip: {
        type: Boolean,
        default: false,
      },
      historyEnabled: {
        type: Boolean,
        default: true,
      },
      historyType: {
        type: String as PropType<autocomplete.Type.HistoryType>,
        default: 'localStorage',
      },
      historyStorageKey: {
        type: String,
        default: 'company-history',
      },
      historyClearable: {
        type: Boolean,
        default: true,
      },
    },
    emits: [
      'update:modelValue',
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
    setup(props, context) {
      let abortController: AbortController | undefined;
      let latestKeyword: string = '';
      const nativeInputValue = computed(() =>
        isNil(props.modelValue) ? '' : String(props.modelValue)
      );
      const selectSuggestion = ref() as Ref<autocomplete.Type.CompanyDataType | undefined>;
      const suggestionVisible = ref(false);
      const suggestionType = ref('fetch');
      const suggestions = ref([]) as Ref<autocomplete.Type.CompanyDataType[]>;
      const keyboardActiveIndex = ref();
      const reference = ref() as Ref<HTMLDivElement>;
      const floating = ref() as Ref<HTMLDivElement>;
      const input = ref() as Ref<HTMLInputElement>;
      const floatingWidth = ref() as Ref<string>;
      const { floatingStyles } = useFloating(reference, floating, {
        whileElementsMounted: autoUpdate,
        middleware: [
          offset(props.offsetTop),
          size({
            apply: ({ rects }) => {
              floatingWidth.value = `${rects.reference.width}px`;
            },
          }),
          ...(props.autoFlip
            ? [
                flip({
                  fallbackPlacements: ['top'],
                }),
              ]
            : []),
        ],
      });

      onMounted(() => {
        if (props.autoFocus) {
          input.value?.focus();
        }
        setNativeInputValue();
      });

      watch(nativeInputValue, () => setNativeInputValue());

      const floatingFullStyles = computed(() => {
        return {
          ...floatingStyles.value,
          width: floatingWidth.value,
        };
      });

      const handleCancelQuerySuggestion = () => {
        if (abortController) {
          abortController.abort('repeated request');
          abortController = undefined;
        }
      };

      const handleQuerySuggestion = async (value: string) => {
        handleCancelQuerySuggestion();
        if (nativeInputValue.value === latestKeyword) {
          showSuggestion();
          return;
        }
        abortController = new AbortController();
        autocomplete
          .handleQueryData(value.trim(), props.api as string, abortController)
          .then(({ data }) => {
            latestKeyword = value.trim();
            suggestions.value = data;
            showSuggestion();
            context.emit('fetch', data);
          })
          .catch((e) => {
            if (e.name === 'AbortError') {
              context.emit('abortFetch', e);
            }
          });
      };

      const handleDebounceQuerySuggestion = debounce((value: string) => {
        handleQuerySuggestion(value);
      }, props.queryDelay);

      const setNativeInputValue = () => {
        if (input.value.value === nativeInputValue.value) {
          return;
        }
        input.value.value = nativeInputValue.value;
      };

      const handleInput = (event: Event) => {
        hideSuggestion();
        const { value } = event.target as HTMLInputElement;
        context.emit('update:modelValue', value);
        context.emit('input', value);
        keyboardActiveIndex.value = undefined;
        selectSuggestion.value = undefined;
        if (value.length === 0) {
          clearSuggestion();
          return;
        }
        handleDebounceQuerySuggestion(value);
      };

      const handleInputClick = () => {
        if (nativeInputValue.value) {
          handleQuerySuggestion(nativeInputValue.value);
        } else if (props.historyEnabled) {
          latestKeyword = '';
          handleShowHistory();
        }
      };

      const handleInputFocus = () => {
        context.emit('focus');
      };

      const handleInputBlur = () => {
        handleCancelQuerySuggestion();
        context.emit('blur');
      };

      const handleShowHistory = () => {
        suggestions.value = autocomplete.getHistory({
          enabled: props.historyEnabled,
          key: props.historyStorageKey,
          type: props.historyType,
        } as autocomplete.Type.HistoryOptions);
        showSuggestion('history');
      };

      const clearSuggestion = () => {
        suggestions.value = [];
      };

      const showSuggestion = (type = 'fetch') => {
        if (suggestions.value.length === 0) {
          clearSuggestion();
          hideSuggestion();
          return;
        }
        suggestionType.value = type;
        if (suggestionVisible.value) {
          return;
        }
        suggestionVisible.value = true;
        context.emit('dropdownVisibleChange', true);
      };

      const hideSuggestion = () => {
        if (!suggestionVisible.value) {
          return;
        }
        suggestionVisible.value = false;
        context.emit('dropdownVisibleChange', false);
      };

      const handleSubmit = () => {
        context.emit('submit', {
          text: nativeInputValue.value,
        });
      };

      const handleInputClear = () => {
        selectSuggestion.value = undefined;
        context.emit('update:modelValue', '');
        clearSuggestion();
        context.emit('clear');
      };

      const handleClickOutside = () => {
        hideSuggestion();
      };

      const handleKeyDown = (event: KeyboardEvent) => {
        switch (event.key) {
          case 'Enter':
            if (!isUndefined(keyboardActiveIndex.value)) {
              handleSuggestionClick(suggestions.value[keyboardActiveIndex.value]);
            }
            break;
          case 'ArrowUp':
            if (!keyboardActiveIndex.value) {
              keyboardActiveIndex.value = suggestions.value.length - 1;
            } else {
              keyboardActiveIndex.value--;
            }
            props.backFill && handleFillInput();
            break;
          case 'ArrowDown':
            if (
              isUndefined(keyboardActiveIndex.value) ||
              keyboardActiveIndex.value >= suggestions.value.length - 1
            ) {
              keyboardActiveIndex.value = 0;
            } else {
              keyboardActiveIndex.value++;
            }
            props.backFill && handleFillInput();
            break;
          case 'Escape':
            handleInputClear();
            break;
        }
      };

      const handleFillInput = () => {
        selectSuggestion.value = suggestions.value[keyboardActiveIndex.value];
        context.emit('update:modelValue', removeHtmlTags(selectSuggestion.value?.name || ''));
      };

      const handleHistoryClear = () => {
        autocomplete.removeHistory({
          key: props.historyStorageKey,
          type: props.historyType,
        } as autocomplete.Type.HistoryOptions);
        clearSuggestion();
        hideSuggestion();
      };

      const handleSuggestionClick = (company: autocomplete.Type.CompanyDataType) => {
        context.emit('update:modelValue', removeHtmlTags(company.name));
        selectSuggestion.value = {
          id: company.id,
          name: company.name,
        };
        clearSuggestion();
        hideSuggestion();
        if (props.historyEnabled && selectSuggestion) {
          autocomplete.addHistory(selectSuggestion.value!, {
            enabled: props.historyEnabled,
            key: props.historyStorageKey,
            type: props.historyType,
          } as autocomplete.Type.HistoryOptions);
        }
        context.emit('select', selectSuggestion.value);
      };
      return {
        nativeInputValue,
        reference,
        floating,
        input,
        floatingFullStyles,
        suggestions,
        suggestionType,
        suggestionVisible,
        handleClickOutside,
        handleKeyDown,
        handleInput,
        handleInputClick,
        handleInputFocus,
        handleInputBlur,
        handleSubmit,
        handleInputClear,
        handleHistoryClear,
        handleSuggestionClick,
        keyboardActiveIndex,
        isVue3,
      };
    },
  });
</script>

<template>
  <div
    ref="reference"
    class="company-autocomplete"
    :class="[
      {
        'company-autocomplete--show-submit': options.showSubmitButton,
        'company-autocomplete--words': inputValue.length > 0,
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
        v-model="inputValue"
        :placeholder="options.placeholder"
        @input="handleInput"
        @click="handleInputClick"
        @focus="handleInputFocus"
        @blur="handleInputBlur"
      />
      <div v-if="options.clearable" class="company-autocomplete__clear">
        <i
          class="company-autocomplete__clear-icon i-ic-baseline-cancel"
          @click="handleInputClear"
        />
      </div>
    </div>
    <div v-if="options.showSubmitButton" class="company-autocomplete__submit">
      <button type="button" @click="handleSubmit(inputValue)">
        {{ options.submitButtonLabel }}
      </button>
    </div>
  </div>
  <Teleport to="body">
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
          <div class="suggestion__avatar" v-if="item.avatar">
            <i
              class="suggestion__avatar-icon i-ic-baseline-history-toggle-off"
              v-if="suggestionType === 'history'"
            />
            <img :alt="item.id" :src="item.avatar" v-else />
          </div>
          <div class="suggestion__label">
            {{ item.name }}
          </div>
          <div class="suggestion__extra"></div>
        </div>
      </div>
      <div
        class="suggestion-popper__footer"
        v-show="options.history?.showClear && suggestionType === 'history'"
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
  import { defineComponent, PropType, ref, Ref, onMounted, watch, computed } from 'vue-demi';
  import {
    initialOptions,
    handleQueryData,
    getHistory,
    removeHistory,
    addHistory,
  } from '@company-ui/autocomplete-core';
  import { debounce, isFunction, removeHtmlTags, isUndefined } from '@company-ui/shared';
  import { useFloating, autoUpdate, offset, size, flip } from '@floating-ui/vue';
  import clickOutside from './directives/click-outside';
  import type { CompanyAutocompleteOptions, CompanyDataType } from '@company-ui/autocomplete-core';

  export default defineComponent({
    name: 'Autocomplete',
    directives: {
      clickOutside,
    },
    props: {
      options: {
        type: Object as PropType<CompanyAutocompleteOptions>,
        default: () => initialOptions,
      },
    },
    setup(props) {
      const inputValue = ref('');
      const selectSuggestion = ref() as Ref<CompanyDataType | undefined>;
      const suggestionVisible = ref(false);
      const suggestionType = ref('fetch');
      const suggestions = ref([]) as Ref<CompanyDataType[]>;
      const keyboardActiveIndex = ref();
      const reference = ref();
      const floating = ref();
      const input = ref();
      const floatingWidth = ref();
      const { floatingStyles } = useFloating(reference, floating, {
        whileElementsMounted: autoUpdate,
        middleware: [
          offset(props.options.offsetTop),
          size({
            apply: ({ rects }) => {
              floatingWidth.value = `${rects.reference.width}px`;
            },
          }),
          ...(props.options.autoFlip
            ? [
                flip({
                  fallbackPlacements: ['top'],
                }),
              ]
            : []),
        ],
      });

      onMounted(() => {
        if (props.options.autoFocus) {
          input.value?.focus();
        }
      });

      watch(inputValue, (newValue) => {
        keyboardActiveIndex.value = undefined;
        selectSuggestion.value = undefined;
        if (newValue.length === 0) {
          clearSuggestion();
          hideSuggestion();
        }
      });

      const floatingFullStyles = computed(() => {
        return {
          ...floatingStyles.value,
          width: floatingWidth.value,
        };
      });

      const handleQuerySuggestion = (value: string) => {
        handleQueryData(value, props.options).then((data) => {
          suggestions.value = data;
          showSuggestion();
          props.options.onFetch(data);
        });
      };

      const handleInput = debounce(() => {
        const value = inputValue.value || '';
        value && handleQuerySuggestion(value);
      }, props.options.queryDelay);

      const handleInputClick = () => {
        if (inputValue.value) {
          handleQuerySuggestion(inputValue.value);
        } else if (props.options.history.enabled) {
          handleShowHistory();
        }
      };

      const handleInputFocus = () => {
        isFunction(props.options.onFocus) && props.options.onFocus();
      };

      const handleInputBlur = () => {
        isFunction(props.options.onBlur) && props.options.onBlur();
      };

      const handleShowHistory = () => {
        suggestions.value = getHistory(props.options.history);
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
        suggestionVisible.value = true;
        props.options.onDropdownVisibleChange(true);
      };

      const hideSuggestion = () => {
        suggestionVisible.value = false;
        props.options.onDropdownVisibleChange(false);
      };

      const handleSubmit = (text: string) => {
        props.options.submitCallback({
          text,
        });
      };

      const handleInputClear = () => {
        selectSuggestion.value = undefined;
        inputValue.value = '';
        clearSuggestion();
        props.options.onClear();
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
            props.options.backFill && handleFillInput();
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
            props.options.backFill && handleFillInput();
            break;
          case 'Escape':
            handleInputClear();
            break;
        }
      };

      const handleFillInput = () => {
        selectSuggestion.value = suggestions.value[keyboardActiveIndex.value];
        inputValue.value = removeHtmlTags(selectSuggestion.value?.name || '');
      };

      const handleHistoryClear = () => {
        removeHistory(props.options.history);
        clearSuggestion();
        hideSuggestion();
      };

      const handleSuggestionClick = (company: CompanyDataType) => {
        inputValue.value = removeHtmlTags(company.name);
        selectSuggestion.value = company;
        clearSuggestion();
        hideSuggestion();
        if (props.options.history.enabled && selectSuggestion) {
          addHistory(selectSuggestion.value, props.options.history);
        }
        props.options.onSelect(selectSuggestion);
      };
      return {
        reference,
        floating,
        input,
        floatingFullStyles,
        suggestions,
        suggestionType,
        suggestionVisible,
        inputValue,
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
      };
    },
  });
</script>

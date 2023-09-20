<template>
  <div
    class="company-autocomplete"
    :class="[
      {
        'company-autocomplete--show-submit': options.showSubmitButton,
        'company-autocomplete--words': inputValue.length > 0,
      },
    ]"
  >
    <div class="company-autocomplete__input">
      <input
        type="text"
        v-model="inputValue"
        :placeholder="options.placeholder"
        @input="handleInput"
        @click="handleInputClick"
      />
      <div
        v-if="options.clearable"
        class="company-autocomplete__clear"
        v-html="options.clearIcon"
        @click="handleClear"
      />
    </div>
    <div v-if="options.showSubmitButton" class="company-autocomplete__submit">
      <button type="button" @click="handleSubmit(inputValue)">
        {{ options.submitButtonLabel }}
      </button>
    </div>
  </div>
</template>

<script>
  import { defineComponent, ref } from 'vue-demi';
  import { initialOptions, handleQueryData } from '@company-ui/autocomplete-core';
  import { debounce } from '@company-ui/shared';

  export default defineComponent({
    name: 'AutoComplete',
    props: {
      options: {
        type: Object,
        default: () => initialOptions,
      },
    },
    setup(props) {
      const inputValue = ref('');

      const handleQuerySuggestion = (value) => {
        handleQueryData(value, props.options).then((data) => {
          props.options.onFetch(data);
        });
      };

      const handleInput = () => {
        debounce(() => {
          const value = inputValue.value || '';
          value && handleQuerySuggestion(value);
        }, props.options.queryDelay);
      };

      const handleInputClick = () => {
        if (inputValue.value) {
          handleQuerySuggestion(inputValue.value);
        }
      };

      const handleSubmit = (text) => {
        props.options.submitCallback({
          text,
        });
      };

      const handleClear = () => {
        inputValue.value = '';
        props.options.onClear();
      };
      return {
        inputValue,
        handleInput,
        handleInputClick,
        handleSubmit,
        handleClear,
      };
    },
  });
</script>

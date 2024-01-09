<template>
  <div>
    <h1>Company UI Vue3 Playground</h1>
    <autocomplete
      v-model="value"
      api="qcc_global"
      @change="handleChange"
      @fetch="handleFetch"
      @abortFetch="handleAbortFetch"
      @select="handleSelect"
      @clear="handleClear"
      @focus="handleFocus"
      @blur="handleBlur"
      @submit="handleSubmit"
      @dropdownVisibleChange="handleDropdownVisibleChange"
    />
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue-demi';
  import { autocomplete } from '../../packages/vue/src/main';

  const value = ref('');
  const handleChange = (text) => {
    console.log('change', text);
  };
  const handleFetch = (data) => {
    console.log('fetch', data);
  };
  const handleAbortFetch = (data) => {
    console.log('abortFetch', data);
  };
  const handleSelect = (data) => {
    console.log('select', data);
  };
  const handleClear = () => {
    console.log('clear');
  };
  const handleFocus = () => {
    console.log('focus');
  };
  const handleBlur = () => {
    console.log('blur');
  };
  const handleSubmit = ({ text }) => {
    console.log('submit', text);
  };
  const handleDropdownVisibleChange = (data) => {
    console.log('dropdownVisibleChange', data);
  };
</script>

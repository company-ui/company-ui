<template>
  <div>
    <input type="text" v-model="inputValue" />
    <div>name: {{ name }}</div>
  </div>
</template>
<script setup>
  import { ref, computed } from 'vue-demi';
  import { removeHtmlTags } from '../../packages/shared/src/dom';
  const inputValue = ref('<em>华为</em>科技');
  const name = computed(() => {
    return removeHtmlTags(inputValue.value);
  });
</script>

<template>
  <div>
    <h1>Company UI Shared Playground</h1>
    <input type="text" v-model="inputValue" />
    <div>name: {{ name }}</div>
  </div>
</template>
<script setup>
  import { ref, computed } from 'vue-demi';
  import { removeHtmlTags } from '../../packages/shared/src/dom';
  import { splitArray } from '../../packages/shared/src/array';
  const inputValue = ref('<em>华为</em>科技');
  const name = computed(() => {
    return removeHtmlTags(inputValue.value);
  });
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  console.log(splitArray(array, 3));
</script>

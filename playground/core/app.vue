<template>
  <div>
    <h1>Company UI Core Playground</h1>
    <div>list: {{ list }}</div>
  </div>
</template>
<script lang="ts" setup>
  import { Ref, ref } from 'vue-demi';
  import { autocomplete } from '../../packages/core/src/main';
  const list = ref([]) as Ref<autocomplete.Type.CompanyDataType[]>;
  autocomplete.handleQueryData('ibm', autocomplete.initialOptions.api).then(({ data }) => {
    list.value = data;
  });
</script>

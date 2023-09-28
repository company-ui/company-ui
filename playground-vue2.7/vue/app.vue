<template>
  <div>
    <h1>Company UI Vue2.7 Playground</h1>
    <Autocomplete v-model="value" />
  </div>
</template>
<script>
  export default {
    name: 'App',
    data() {
      return {
        value: 'dddd',
      };
    },
  };
</script>

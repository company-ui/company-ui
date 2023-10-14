---
layout: doc
---

# AutoComplete

<script setup lang="ts">
import { getCurrentInstance, ref, onMounted } from 'vue';
import { CompanyAutocomplete } from '@company-ui/dom';
import '@company-ui/style';

const app = getCurrentInstance();

const apiType = ref('clearbit');

const value = ref('');
onMounted(() => {
  new CompanyAutocomplete({
    api: 'clearbit',
    target: '#clearbit_input',
    autoFocus: true
  });
  new CompanyAutocomplete({
    api: 'qcc_open',
    target: '#qcc_open_input',
    autoFocus: true
  });
})
</script>

## Vue

<autocomplete v-model="value" />

```js
import '@company-ui/style';
import CompanyUI from '@company-ui/vue';
app.use(CompanyUI);

<autocomplete v-model="value" />;
```

## React

<div id="clearbit_input"></div>

```jsx
import '@company-ui/style';
import { Autocomplete } from '@company-ui/react';

<AutoComplete
  popupAppendToBody={false}
  defaultValue={inputValue}
  value={inputValue}
  onChange={setInputValue}
></AutoComplete>;
```

## Dom

<div id="qcc_open_input"></div>

```js
import '@company-ui/style';
import { CompanyAutocomplete } from '@company-ui/dom';

const companyAutocomplete = new CompanyAutocomplete({
  api: 'qcc_open',
  target: '#example',
});
```

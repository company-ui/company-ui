---
layout: doc
---

<el-backtop></el-backtop>

# 示例

<script setup lang="ts">
import { getCurrentInstance, ref, onMounted } from 'vue';
import { Autocomplete } from '@company-ui/dom';
import '@company-ui/style';

const app = getCurrentInstance();

const apiType = ref('clearbit');

onMounted(() => {
  new Autocomplete({
    api: 'clearbit',
    target: '#clearbit_input',
    autoFocus: true
  });
  new Autocomplete({
    api: 'qcc_global',
    target: '#qcc_open_input',
    autoFocus: true
  });
})
</script>

## ClearBit API

<div id="clearbit_input">
</div>

```js
import { Autocomplete } from '@company-ui/dom';
import '@company-ui/style';

const Autocomplete = new Autocomplete({
  api: 'clearbit',
  target: '#example',
});
```

## QCC Open API

<div id="qcc_open_input">
</div>

```js
import { Autocomplete } from '@company-ui/dom';
import '@company-ui/style';

const Autocomplete = new Autocomplete({
  api: 'qcc_global',
  target: '#example',
});
```

---
layout: doc
---

<el-backtop></el-backtop>

# AutoComplete

<script setup lang="ts">
import { getCurrentInstance, ref, onMounted } from 'vue';
import '@company-ui/style';

const app = getCurrentInstance();

const apiType = ref('clearbit');

const value1 = ref('');
const value2 = ref('');
onMounted(() => {
})
</script>

## Basic Usage

<autocomplete
v-model="value1"
placeholder="Input company name"
/>

```vue
<autocomplete v-model="value" />
```

## Data Source Usage

<autocomplete
v-model="value2"
api="qcc_global"
history-storage-key="qcc-open-company-history"
:auto-focus="false"
submit-button-label="查一查"
placeholder="请输入企业名称或统一社会信用代码"
/>

```vue
<autocomplete
  v-model="value"
  api="qcc_global"
  history-storage-key="qcc-open-company-history"
  :auto-focus="false"
  submit-button-label="查一查"
  placeholder="请输入企业名称或统一社会信用代码"
/>
```

## API

### Attributes

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | binding value | `string` | - |
| api | query source | `string` | clearbit |
| query-delay | query delay | `number` | 500 |
| placeholder | input placeholder content | `string` | Input company name |
| clearable | show clear button | `boolean` | true |
| backFill | If backFill selected item the input when using keyboard | `boolean` | true |
| popup-append-to-body | whether to append Dialog itself to body | `boolean` | true |
| auto-focus | auto focus | `boolean` | true |
| show-submit-button | show submit button | `boolean` | true |
| submit-button-label | submit button label | `string` | Submit |
| offset-top | pixels to offset from input bottom | `number` | 5 |
| auto-flip | auto flip | `boolean` | false |
| history-enabled | open save history record | `boolean` | true |
| history-type | save history record mode | `string` | localStorage |
| history-storage-key | save history record key | `string` | company-history |
| history-clearable | show history clear button | `boolean` | true |

### Events

| Name | Description | Type |
| --- | --- | --- |
| input | triggers when the input value change | `Function` |
| change | triggers when the input value change | `Function` |
| fetch | triggers when query data | `Function` |
| abort-fetch | triggers when abort query data | `Function` |
| select | triggers when a suggestion is clicked | `Function` |
| clear | triggers when the input is cleared by clicking the clear button | `Function` |
| focus | triggers when the input focuses | `Function` |
| blur | triggers when the input blurs | `Function` |
| submit | triggers when the button submit | `Function` |
| dropdown-visible-change | triggers when the dropdown appears/disappears | `Function` |

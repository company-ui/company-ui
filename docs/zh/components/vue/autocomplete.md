---
layout: doc
---

# AutoComplete 自动完成

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

## 基本用法

<autocomplete
v-model="value1"
placeholder="Input company name"
/>

```vue
<autocomplete v-model="value" placeholder="Input company name" />
```

## 其他数据源用法

<autocomplete
v-model="value2"
api="qcc_open"
history-storage-key="qcc-open-company-history"
:auto-focus="false"
submit-button-label="查一查"
/>

```vue
<autocomplete
  v-model="value"
  api="qcc_open"
  history-storage-key="qcc-open-company-history"
  :auto-focus="false"
  submit-button-label="查一查"
/>
```

## API

### Attributes

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | 绑定值 | `string` | - |
| api | 查询数据源 | `string` | clearbit |
| query-delay | 查询数据延迟 | `number` | 500 |
| placeholder | 输入占位符内容 | `string` | 请输入企业名称或统一社会信用代码 |
| clearable | 显示清除按钮 | `boolean` | true |
| backFill | 使用键盘选择选项的时候把选中项回填到输入框中 | `boolean` | true |
| popup-append-to-body | 是否插入至 body 元素上 | `boolean` | true |
| auto-focus | 自动获取焦点 | `boolean` | true |
| show-submit-button | 显示提交按钮 | `boolean` | true |
| submit-button-label | 提交按钮文字 | `string` | Submit |
| offset-top | 距离文本框底部的偏移值 | `number` | 5 |
| auto-flip | 文本框是否自动翻转 | `boolean` | false |
| history-enabled | 打开保存历史记录 | `boolean` | true |
| history-type | 保存历史记录模式 | `string` | localStorage |
| history-storage-key | 保存历史记录键 | `string` | company-history |
| history-clearable | 显示历史记录清除按钮 | `boolean` | true |

### Events

| Name                    | Description                | Type       |
| ----------------------- | -------------------------- | ---------- |
| input                   | 当输入值改变时触发         | `Function` |
| fetch                   | 查询数据时触发             | `Function` |
| abort-fetch             | 当中止查询数据时触发       | `Function` |
| select                  | 当单击建议时触发           | `Function` |
| clear                   | 当单击文本框清除按钮时触发 | `Function` |
| focus                   | 当输入聚焦时触发           | `Function` |
| blur                    | 当输入取消聚焦时触发       | `Function` |
| submit                  | 按钮提交时触发             | `Function` |
| dropdown-visible-change | 当下拉菜单出现/消失时触发  | `Function` |

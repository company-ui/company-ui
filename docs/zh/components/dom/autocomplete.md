---
layout: doc
---

<el-backtop></el-backtop>

# AutoComplete 自动完成

<script setup lang="ts">
import { onMounted } from 'vue';
import '@company-ui/style';
import { Autocomplete } from '@company-ui/dom';

onMounted(() => {
  new Autocomplete({
    target: '#autocomplete1'
  });
  new Autocomplete({
    api: 'qcc_open',
    target: '#autocomplete2',
    autoFocus: false,
    submitButtonLabel: '查一查',
    historyStorageKey: 'qcc-open-company-history',
    placeholder: '请输入企业名称或统一社会信用代码'
  });
})
</script>

## 基本用法

<div id="autocomplete1"></div>

```ts
import '@company-ui/style';
import { Autocomplete } from '@company-ui/dom';

new Autocomplete({
  target: '#autocomplete1',
  placeholder: 'Input company name',
});
```

## 其他数据源用法

<div id="autocomplete2"></div>

```ts
import '@company-ui/style';
import { Autocomplete } from '@company-ui/dom';

new Autocomplete({
  api: 'qcc_open',
  target: '#autocomplete2',
  autoFocus: false,
  submitButtonLabel: '查一查',
  historyStorageKey: 'qcc-open-company-history',
});
```

## API

### Attributes

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| target | HTML元素标签的id | `string` | - |
| api | 查询数据源 | `string` | clearbit |
| queryDelay | 查询数据延迟 | `number` | 500 |
| placeholder | 输入占位符内容 | `string` | Input company name |
| clearable | 显示清除按钮 | `boolean` | true |
| backFill | 使用键盘选择选项的时候把选中项回填到输入框中 | `boolean` | true |
| popupAppendToBody | 是否插入至 body 元素上 | `boolean` | true |
| autoFocus | 自动获取焦点 | `boolean` | true |
| showSubmitButton | 显示提交按钮 | `boolean` | true |
| submitButtonLabel | 提交按钮文字 | `string` | Submit |
| offsetTop | 距离文本框底部的偏移值 | `number` | 5 |
| autoFlip | 文本框是否自动翻转 | `boolean` | false |
| avatarUrl | 头像链接 | `string` | - |
| clearIcon | 清除按钮图标 | `string` | <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17L12 13.41L8.41 17L7 15.59L10.59 12L7 8.41L8.41 7L12 10.59L15.59 7L17 8.41L13.41 12L17 15.59z"/></svg> |
| history | 历史记录配置 | `HistoryOptions` | [HistoryOptions](#historyoptions) |

### HistoryOptions

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| enabled | 打开保存历史记录 | `boolean` | true |
| type | 保存历史记录模式 | `string` | localStorage |
| key | 保存历史记录键 | `string` | company-history |
| showClear | 显示历史记录清除按钮 | `boolean` | true |
| itemIcon | 历史记录图标 | `string` | <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="m15.1 19.37l1 1.74c-.96.44-2.01.73-3.1.84v-2.02c.74-.09 1.44-.28 2.1-.56zM4.07 13H2.05c.11 1.1.4 2.14.84 3.1l1.74-1c-.28-.66-.47-1.36-.56-2.1zM15.1 4.63l1-1.74c-.96-.44-2-.73-3.1-.84v2.02c.74.09 1.44.28 2.1.56zM19.93 11h2.02c-.11-1.1-.4-2.14-.84-3.1l-1.74 1c.28.66.47 1.36.56 2.1zM8.9 19.37l-1 1.74c.96.44 2.01.73 3.1.84v-2.02c-.74-.09-1.44-.28-2.1-.56zM11 4.07V2.05c-1.1.11-2.14.4-3.1.84l1 1.74c.66-.28 1.36-.47 2.1-.56zm7.36 3.1l1.74-1.01c-.63-.87-1.4-1.64-2.27-2.27l-1.01 1.74c.59.45 1.1.96 1.54 1.54zM4.63 8.9l-1.74-1c-.44.96-.73 2-.84 3.1h2.02c.09-.74.28-1.44.56-2.1zm15.3 4.1c-.09.74-.28 1.44-.56 2.1l1.74 1c.44-.96.73-2.01.84-3.1h-2.02zm-3.1 5.36l1.01 1.74c.87-.63 1.64-1.4 2.27-2.27l-1.74-1.01c-.45.59-.96 1.1-1.54 1.54zM7.17 5.64l-1-1.75c-.88.64-1.64 1.4-2.27 2.28l1.74 1.01a7.7 7.7 0 0 1 1.53-1.54zM5.64 16.83l-1.74 1c.63.87 1.4 1.64 2.27 2.27l1.01-1.74a7.7 7.7 0 0 1-1.54-1.53zM13 7h-2v5.41l4.29 4.29l1.41-1.41l-3.7-3.7V7z"/></svg> |
| clearIcon | 清除历史记录按钮图标 | `string` | <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M15 2h-3.5l-1-1h-5l-1 1H1v2h14zm1 7c-.7 0-1.37.1-2 .29V5H2v12c0 1.1.9 2 2 2h5.68A6.999 6.999 0 0 0 23 16c0-3.87-3.13-7-7-7zm-7 7c0 .34.03.67.08 1H4V7h8v3.26c-1.81 1.27-3 3.36-3 5.74zm7 5c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5z"/><path fill="currentColor" d="M16.5 12H15v5l3.6 2.1l.8-1.2l-2.9-1.7z"/></svg> |

### Events

| Name                    | Description                | Type       |
| ----------------------- | -------------------------- | ---------- |
| onInput                 | 当输入值改变时触发         | `Function` |
| onChange                | 当输入值改变时触发         | `Function` |
| onFetch                 | 查询数据时触发             | `Function` |
| onAbortFetch            | 当中止查询数据时触发       | `Function` |
| onSelect                | 当单击建议时触发           | `Function` |
| onClear                 | 当单击文本框清除按钮时触发 | `Function` |
| onFocus                 | 当输入聚焦时触发           | `Function` |
| onBlur                  | 当输入取消聚焦时触发       | `Function` |
| submitCallback          | 按钮提交时触发             | `Function` |
| onDropdownVisibleChange | 当下拉菜单出现/消失时触发  | `Function` |

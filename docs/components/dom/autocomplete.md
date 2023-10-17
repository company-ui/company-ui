---
layout: doc
---

# AutoComplete

<script setup lang="ts">
import { onMounted } from 'vue';
import '@company-ui/style';
import { CompanyAutocomplete } from '@company-ui/dom';

onMounted(() => {
  new CompanyAutocomplete({
    target: '#autocomplete1',
    placeholder: 'Input company name'
  });
  new CompanyAutocomplete({
    api: 'qcc_open',
    target: '#autocomplete2',
    autoFocus: false,
    submitButtonLabel: '查一查',
    historyStorageKey: 'qcc-open-company-history'
  });
})
</script>

## Basic Usage

<div id="autocomplete1"></div>

```ts
import '@company-ui/style';
import { CompanyAutocomplete } from '@company-ui/dom';

new CompanyAutocomplete({
  target: '#autocomplete1',
  placeholder: 'Input company name',
});
```

## Data Source Usage

<div id="autocomplete2"></div>

```ts
import '@company-ui/style';
import { CompanyAutocomplete } from '@company-ui/dom';

new CompanyAutocomplete({
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
| target | id of the html element tag | `string` | - |
| api | query data source | `string` | clearbit |
| queryDelay | query data delay | `number` | 500 |
| placeholder | input placeholder content | `string` | 请输入企业名称或统一社会信用代码 |
| clearable | show clear button | `boolean` | true |
| backFill | If backFill selected item the input when using keyboard | `boolean` | true |
| popupAppendToBody | whether to append Dialog itself to body | `boolean` | true |
| autoFocus | auto focus | `boolean` | true |
| showSubmitButton | show submit button | `boolean` | true |
| submitButtonLabel | submit button label | `string` | Submit |
| offsetTop | pixels to offset from input bottom | `number` | 5 |
| autoFlip | auto flip | `boolean` | false |
| avatarUrl | avatar url | `string` | - |
| clearIcon | clear icon | `string` | <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17L12 13.41L8.41 17L7 15.59L10.59 12L7 8.41L8.41 7L12 10.59L15.59 7L17 8.41L13.41 12L17 15.59z"/></svg> |
| history | history options | `HistoryOptions` | [HistoryOptions](#historyoptions) |

### HistoryOptions

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| enabled | history enabled | `boolean` | true |
| type | history save mode | `string` | localStorage |
| key | history save key | `string` | company-history |
| showClear | show clear history link | `boolean` | true |
| itemIcon | history item icon | `string` | <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="m15.1 19.37l1 1.74c-.96.44-2.01.73-3.1.84v-2.02c.74-.09 1.44-.28 2.1-.56zM4.07 13H2.05c.11 1.1.4 2.14.84 3.1l1.74-1c-.28-.66-.47-1.36-.56-2.1zM15.1 4.63l1-1.74c-.96-.44-2-.73-3.1-.84v2.02c.74.09 1.44.28 2.1.56zM19.93 11h2.02c-.11-1.1-.4-2.14-.84-3.1l-1.74 1c.28.66.47 1.36.56 2.1zM8.9 19.37l-1 1.74c.96.44 2.01.73 3.1.84v-2.02c-.74-.09-1.44-.28-2.1-.56zM11 4.07V2.05c-1.1.11-2.14.4-3.1.84l1 1.74c.66-.28 1.36-.47 2.1-.56zm7.36 3.1l1.74-1.01c-.63-.87-1.4-1.64-2.27-2.27l-1.01 1.74c.59.45 1.1.96 1.54 1.54zM4.63 8.9l-1.74-1c-.44.96-.73 2-.84 3.1h2.02c.09-.74.28-1.44.56-2.1zm15.3 4.1c-.09.74-.28 1.44-.56 2.1l1.74 1c.44-.96.73-2.01.84-3.1h-2.02zm-3.1 5.36l1.01 1.74c.87-.63 1.64-1.4 2.27-2.27l-1.74-1.01c-.45.59-.96 1.1-1.54 1.54zM7.17 5.64l-1-1.75c-.88.64-1.64 1.4-2.27 2.28l1.74 1.01a7.7 7.7 0 0 1 1.53-1.54zM5.64 16.83l-1.74 1c.63.87 1.4 1.64 2.27 2.27l1.01-1.74a7.7 7.7 0 0 1-1.54-1.53zM13 7h-2v5.41l4.29 4.29l1.41-1.41l-3.7-3.7V7z"/></svg> |
| clearIcon | clear history link icon | `string` | <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M15 2h-3.5l-1-1h-5l-1 1H1v2h14zm1 7c-.7 0-1.37.1-2 .29V5H2v12c0 1.1.9 2 2 2h5.68A6.999 6.999 0 0 0 23 16c0-3.87-3.13-7-7-7zm-7 7c0 .34.03.67.08 1H4V7h8v3.26c-1.81 1.27-3 3.36-3 5.74zm7 5c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5z"/><path fill="currentColor" d="M16.5 12H15v5l3.6 2.1l.8-1.2l-2.9-1.7z"/></svg> |

### Events

| Name | Description | Type |
| --- | --- | --- |
| onFetch | triggers when query data | `Function` |
| onAbortFetch | triggers when abort query data | `Function` |
| onSelect | triggers when a suggestion is clicked | `Function` |
| onClear | triggers when the input is cleared by clicking the clear button | `Function` |
| onFocus | triggers when the input focuses | `Function` |
| onBlur | triggers when the input blurs | `Function` |
| submitCallback | triggers when the button submit | `Function` |
| onDropdownVisibleChange | triggers when the dropdown appears/disappears | `Function` |

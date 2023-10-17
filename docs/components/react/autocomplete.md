---
layout: doc
---

# AutoComplete

<script setup lang="ts">
</script>

## Basic Usage

```tsx
import { useState } from 'react';
import '@company-ui/style';
import { AutoComplete } from '@company-ui/react';

const [inputValue, setInputValue] = useState('');

<AutoComplete
  placeholder="Input company name"
  defaultValue={inputValue}
  value={inputValue}
  onChange={setInputValue}
/>;
```

## Data Source Usage

```tsx
import { useState } from 'react';
import '@company-ui/style';
import { AutoComplete } from '@company-ui/react';

const [inputValue, setInputValue] = useState('');

<AutoComplete
  defaultValue={inputValue}
  value={inputValue}
  api="qcc_open"
  historyStorageKey="qcc-open-company-history"
  submitButtonLabel="查一查"
  autoFocus={false}
  onChange={setInputValue}
/>;
```

## API

### Attributes

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| defaultValue | the initial input content | `string` | - |
| value | the input content value | `string` | - |
| api | query source | `string` | clearbit |
| queryDelay | query delay | `number` | 500 |
| placeholder | input placeholder content | `string` | 请输入企业名称或统一社会信用代码 |
| clearable | show clear button | `boolean` | true |
| backFill | If backFill selected item the input when using keyboard | `boolean` | true |
| popupAppendToBody | whether to append Dialog itself to body | `boolean` | true |
| autoFocus | auto focus | `boolean` | true |
| showSubmitButton | show submit button | `boolean` | true |
| submitButtonLabel | submit button label | `string` | Submit |
| offsetTop | pixels to offset from input bottom | `number` | 5 |
| autoFlip | auto flip | `boolean` | false |
| historyEnabled | open save history record | `boolean` | true |
| historyType | save history record mode | `string` | localStorage |
| historyStorageKey | save history record key | `string` | company-history |
| historyClearable | show history clear button | `boolean` | true |

### Events

| Name | Description | Type |
| --- | --- | --- |
| onChange | triggers when the input value change | `Function` |
| onInput | triggers when the input value input | `Function` |
| onFetch | triggers when query data | `Function` |
| onAbortFetch | triggers when abort query data | `Function` |
| onSelect | triggers when a suggestion is clicked | `Function` |
| onClear | triggers when the input is cleared by clicking the clear button | `Function` |
| onFocus | triggers when the input focuses | `Function` |
| onBlur | triggers when the input blurs | `Function` |
| onSubmit | triggers when the button submit | `Function` |
| onDropdownVisibleChange | triggers when the dropdown appears/disappears | `Function` |

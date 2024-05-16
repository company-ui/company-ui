---
layout: doc
---

<el-backtop></el-backtop>

# AutoComplete 自动完成

## 基本用法

```tsx
import { useState } from 'react';
import '@company-ui/style';
import { AutoComplete } from '@company-ui/react';

const [inputValue, setInputValue] = useState('');

<AutoComplete defaultValue={inputValue} value={inputValue} onChange={setInputValue} />;
```

## 其他数据源用法

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
  placeholder="请输入企业名称或统一社会信用代码"
  autoFocus={false}
  onChange={setInputValue}
/>;
```

## API

### Attributes

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| defaultValue | 输入框默认内容 | `string` | - |
| value | 输入框内容 | `string` | - |
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
| historyEnabled | 打开保存历史记录 | `boolean` | true |
| historyType | 保存历史记录模式 | `string` | localStorage |
| historyStorageKey | 保存历史记录键 | `string` | company-history |
| historyClearable | 显示历史记录清除按钮 | `boolean` | true |

### Events

| Name                    | Description                | Type       |
| ----------------------- | -------------------------- | ---------- |
| onChange                | 当输入值改变时触发         | `Function` |
| onInput                 | 当输入值输入时触发         | `Function` |
| onFetch                 | 查询数据时触发             | `Function` |
| onAbortFetch            | 当中止查询数据时触发       | `Function` |
| onSelect                | 当单击建议时触发           | `Function` |
| onClear                 | 当单击文本框清除按钮时触发 | `Function` |
| onFocus                 | 当输入聚焦时触发           | `Function` |
| onBlur                  | 当输入取消聚焦时触发       | `Function` |
| onSubmit                | 按钮提交时触发             | `Function` |
| onDropdownVisibleChange | 当下拉菜单出现/消失时触发  | `Function` |

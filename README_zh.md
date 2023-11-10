<p align="center">
  <a href="https://company-ui.github.io/company-ui/" target="_blank" rel="noopener noreferrer">
    <img height="100" src="https://company-ui.github.io/company-ui/full-logo.png" alt="company ui">
  </a>
</p>
<p align="center">
  <img alt="GitHub Workflow Status" src="https://img.shields.io/github/actions/workflow/status/company-ui/company-ui/deploy.yml?branch=main">
  <img alt="GitHub" src="https://img.shields.io/github/license/company-ui/company-ui">
  <a href="https://discord.gg/RsKkwNYp"><img src="https://img.shields.io/discord/1143015541175496777" alt="Join the chat"></a>
</p>

# Company-UI

同时支持 Vue 2、Vue 3和React。

## 用法

### Vue

<a href="https://npmjs.com/package/@company-ui/vue"><img src="https://badgen.net/npm/v/@company-ui/vue" alt="npm package"></a> <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/@company-ui/vue"> <img alt="npm download week" src="https://img.shields.io/npm/dw/@company-ui/vue">

```ts
import '@company-ui/style';
import CompanyUI from '@company-ui/vue';
app.use(CompanyUI);
```

```vue
<autocomplete v-model="value" />
```

### React

<a href="https://npmjs.com/package/@company-ui/react"><img src="https://badgen.net/npm/v/@company-ui/react" alt="npm package"></a> <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/@company-ui/react"> <img alt="npm download week" src="https://img.shields.io/npm/dw/@company-ui/react">

```ts
import '@company-ui/style';
import { AutoComplete } from '@company-ui/react';
```

```jsx
<AutoComplete
  popupAppendToBody={false}
  defaultValue={inputValue}
  value={inputValue}
  onChange={setInputValue}
></AutoComplete>
```

### Dom

<a href="https://npmjs.com/package/@company-ui/dom"><img src="https://badgen.net/npm/v/@company-ui/dom" alt="npm package"></a> <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/@company-ui/dom"> <img alt="npm download week" src="https://img.shields.io/npm/dw/@company-ui/dom">

```ts
import '@company-ui/style';
import { Autocomplete } from '@company-ui/dom';

new Autocomplete({
  target: '#example',
});
```

## 文档

要了解更多，请查看[文档](https://company-ui.github.io/company-ui/)

## 维护者

[@zhensherlock](https://github.com/zhensherlock)。

## 如何贡献

非常欢迎你的加入！[提一个 Issue](https://github.com/company-ui/company-ui/issues/new/choose) 或者提交一个 Pull Request。

标准 Readme 遵循 [Contributor Covenant](http://contributor-covenant.org/version/1/3/0/) 行为规范。

### 贡献者

感谢以下参与项目的人：

<a href="https://github.com/company-ui/company-ui/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=company-ui/company-ui" />
</a>

## 使用许可

[MIT](LICENSE) © MichaelSun

<p align="center">
  <a href="https://company-ui.github.io/company-ui/" target="_blank" rel="noopener noreferrer">
    <img height="100" src="https://company-ui.github.io/company-ui/full-logo.png" alt="company ui">
  </a>
</p>
<p align="center">
  <img alt="GitHub Workflow Status" src="https://img.shields.io/github/actions/workflow/status/company-ui/company-ui/deploy.yml?branch=main">
  <img alt="GitHub" src="https://img.shields.io/github/license/company-ui/company-ui">
  <a href="https://discord.gg/89xaVqpV"><img src="https://img.shields.io/discord/1143015541175496777" alt="Join the chat"></a>
</p>

# Company-UI

Works with both Vue 2 , Vue 3 And React.

## Translations

- [中文文档](README_zh.md)

## Installing

```bash
# or pnpm or yarn
npm install @company-ui/dom
```

## Usage

### Vue

<a href="https://npmjs.com/package/@company-ui/vue"><img src="https://badgen.net/npm/v/@company-ui/vue" alt="npm package"></a>

```ts
import '@company-ui/style';
import CompanyUI from '@company-ui/vue';
app.use(CompanyUI);
```

```vue
<autocomplete v-model="value" />
```

### React

<a href="https://npmjs.com/package/@company-ui/react"><img src="https://badgen.net/npm/v/@company-ui/react" alt="npm package"></a>

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

<a href="https://npmjs.com/package/@company-ui/dom"><img src="https://badgen.net/npm/v/@company-ui/dom" alt="npm package"></a>

```ts
import '@company-ui/style';
import { CompanyAutocomplete } from '@company-ui/dom';

const companyAutocomplete = new CompanyAutocomplete({
  target: '#example',
});
```

## Documentation

To learn more, check [its documentation](https://company-ui.github.io/company-ui/).

## License

[MIT](LICENSE).

<p align="center">
  <a href="https://company-ui.github.io/company-ui/" target="_blank" rel="noopener noreferrer">
    <img height="100" src="https://company-ui.github.io/company-ui/full-logo.png" alt="company ui">
  </a>
</p>
<p align="center">
  <a href="https://npmjs.com/package/@company-ui/vue"><img src="https://badgen.net/npm/v/@company-ui/vue" alt="npm package"></a>
  <img alt="GitHub Workflow Status" src="https://img.shields.io/github/actions/workflow/status/company-ui/company-ui/deploy.yml?branch=main">
  <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/@company-ui/vue">
  <img alt="npm download week" src="https://img.shields.io/npm/dw/@company-ui/vue">
  <img alt="GitHub" src="https://img.shields.io/github/license/company-ui/company-ui">
  <a href="https://discord.gg/89xaVqpV"><img src="https://img.shields.io/discord/1143015541175496777" alt="Join the chat"></a>
</p>

# `@company-ui/vue`

Works with both Vue 2 , Vue 3.

## Installing

```bash
# or pnpm or yarn
npm install @company-ui/vue
npm install @company-ui/style
```

## Usage

### General

```ts
import '@company-ui/style';
import companyAutocomplete from '@company-ui/vue';
app.use(companyAutocomplete);
```

```vue
<Autocomplete v-model="value" />
```

## Documentation

To learn more, check [its documentation](https://company-ui.github.io/company-ui/).

## License

[MIT](LICENSE).

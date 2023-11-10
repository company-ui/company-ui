<p align="center">
  <a href="https://company-ui.github.io/company-ui/" target="_blank" rel="noopener noreferrer">
    <img height="100" src="https://company-ui.github.io/company-ui/full-logo.png" alt="company ui">
  </a>
</p>
<p align="center">
  <a href="https://npmjs.com/package/@company-ui/react"><img src="https://badgen.net/npm/v/@company-ui/react" alt="npm package"></a>
  <img alt="GitHub Workflow Status" src="https://img.shields.io/github/actions/workflow/status/company-ui/company-ui/deploy.yml?branch=main">
  <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/@company-ui/react">
  <img alt="npm download week" src="https://img.shields.io/npm/dw/@company-ui/react">
  <img alt="GitHub" src="https://img.shields.io/github/license/company-ui/company-ui">
  <a href="https://discord.gg/RsKkwNYp"><img src="https://img.shields.io/discord/1143015541175496777" alt="Join the chat"></a>
</p>

# `@company-ui/react`

Works with React.

## Installing

```bash
# or pnpm or yarn
npm install @company-ui/react
npm install @company-ui/style
```

## Usage

### General

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

## Documentation

To learn more, check [its documentation](https://company-ui.github.io/company-ui/).

## Maintainers

[@zhensherlock](https://github.com/zhensherlock).

## Contributing

Feel free to dive in! [Open an issue](https://github.com/company-ui/company-ui/issues/new/choose) or submit PRs.

Standard Readme follows the [Contributor Covenant](http://contributor-covenant.org/version/1/3/0/) Code of Conduct.

### Contributors

This project exists thanks to all the people who contribute.

<a href="https://github.com/company-ui/company-ui/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=company-ui/company-ui" />
</a>

## License

[MIT](LICENSE) © MichaelSun

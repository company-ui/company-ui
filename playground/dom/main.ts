import 'virtual:uno.css';
import '../../packages/style/src/index.scss';
import { CompanyAutocomplete } from '../../packages/dom/src/main';
new CompanyAutocomplete({
  api: 'clearbit',
  target: '#example',
});
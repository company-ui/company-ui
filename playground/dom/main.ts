import 'virtual:uno.css';
import '../../packages/style/src/index.scss';
import { Autocomplete } from '../../packages/dom/src/main';
new Autocomplete({
  api: 'clearbit',
  target: '#example',
});

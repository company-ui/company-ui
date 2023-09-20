import { DirectiveBinding } from 'vue-demi';

interface HTMLElementWithClickOutside extends HTMLElement {
  onClickOutside?: (_event: MouseEvent) => void;
}

const register = (el: HTMLElementWithClickOutside, binding: DirectiveBinding) => {
  let clicked = false;
  const callback = binding.value;

  const onClick = (_event: MouseEvent) => {
    if (!el.contains(_event.target as Node) && clicked) {
      callback();
    }
    clicked = el.contains(_event.target as Node);
  };

  document.addEventListener('click', onClick, true);

  el.onClickOutside = onClick;
};

const unregister = (el: HTMLElementWithClickOutside) => {
  document.removeEventListener('click', el.onClickOutside!, true);
  delete el.onClickOutside;
};

export default {
  // Vue 3 Directive Hooks
  created: register,
  unmounted: unregister,
  // Vue 2 Directive Hooks
  bind: register,
  unbind: unregister,
};

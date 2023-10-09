import { defineConfig, presetIcons, presetUno } from 'unocss';

export default defineConfig({
  content: {
    filesystem: ['**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}'],
  },
  // shortcuts: [
  //   [
  //     't1',
  //     'hidden i-ic-baseline-history-toggle-off',
  //   ],
  //   [
  //     't2',
  //     'text-[0.9em] inline-block cursor-pointer',
  //   ],
  // ],
  // safelist: [
  //   'i-ic-baseline-history-toggle-off'
  // ],
  presets: [
    presetUno(),
    presetIcons({
      scale: 1,
      warn: true,
    }),
  ],
});

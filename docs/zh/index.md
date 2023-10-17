---
layout: home
sidebar: false
title: Company UI
titleTemplate: false

hero:
  name: Company UI
  text: A company UI library
  tagline: 简易、强大、高性能。
  image:
    src: /hero-image.png
    alt: company-ui
  actions:
    - theme: brand
      text: 开始 👆
      link: /zh/guide/getting-started
    - theme: alt
      text: 在 GitHub 上查看
      link: https://github.com/company-ui/company-ui

features:
  - icon: 🛠️
    title: 丰富的功能
    details: 支持众多功能。
  - icon: 🔑
    title: 完全类型化的API
    details: 灵活的 API 和完整的 TypeScript 类型。
  - icon: 🔩
    title: 通用的插件
    details: 可用于vue 2, vue 3和react。
---

<script setup lang="ts">
import { onMounted } from 'vue';
onMounted(() => {
  const image = document.querySelector('.VPHero .VPImage.image-src');
  image.classList.add('blur');
  setTimeout(() => {
    image.classList.remove('blur');
    image.classList.add('animation');
  }, 500)
});
</script>

# Vuety Modal

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Vuety Modal is a modal component library for Vue 3 \
Soon new features

## Installation

```bash
npm i vuety-modal
```

This package required gsap

```bash
npm i gsap
```

Next step is setting up Vuety configuration.

```bash
import {createApp} from 'vue';
import App from './App.vue';
import Vuety from 'vuety-modal/config';
const app = createApp(App);

app.use(Vuety);
```

## Usage

### Use modal component

```js
<template>
  <button @click="show = true">open modal</button>
  <Modal v-model:show="show">
    <div class="w-screen sm:w-60 h-screen sm:h-60 bg-white sm:m-auto flex flex-col items-center justify-center p-8">
      <div>Modal content</div>
      <button @click="show = false">close</button>
    </div>
  </Modal>
</template>
<script setup>
import { ref } from "vue";
import Modal from "vuety-modal/modal"

const show = ref(false);
</script>
```

### Events

| Event | | Type | | Description |
| :-: | | :-: | | :-: |
| @open | | Callback | | Callback to invoke when modal is showed. |
| @close | | Callback | | Callback to invoke when modal is hidden. |

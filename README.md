# Vuety Modal

## Installation

```bash
npm i vuety-modal
```

This package required gsap

```bash
npm i gsap
```

## Usage

### Use modal component

```js
<template>
  <Modal v-model:show="show">
    <div class="w-screen sm:w-[500px] h-screen sm:h-[500px] bg-white sm:m-auto">
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
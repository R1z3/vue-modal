<template>
  <div class="p-10">
    <button
      @click="show = true"
      class="px-10 py-3 bg-yellow-400 text-white rounded-md shadow-md"
    >
      open modal
    </button>
  </div>
  <Modal v-model:show="show">
    <div class="bg-white w-[200px] h-[200px] rounded-md m-auto">
      <button @click="showTwo = true">open two modal</button>
    </div>
  </Modal>
  <Modal v-model:show="showTwo">
    <div class="bg-white w-[500px] h-[500px] rounded-md m-auto"></div>
  </Modal>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import Modal from "./components/modal/modal";

const show = ref(false);
const showTwo = ref(false);
</script>

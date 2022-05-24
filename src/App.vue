<template>
  <div class="p-10 h-[2000px]">
    <button
      @click="show = true"
      class="px-10 py-3 bg-yellow-400 text-white rounded-md shadow-md"
    >
      open modal
    </button>
  </div>
  <Modal v-if="!hiddeModal" v-model:show="show">
    <div class="bg-white w-[200px] h-[200px] rounded-md m-auto">
      <button @click="hiddeModal = true">hidde modal</button>
      <button @click="showTwo = true">open two modal</button>
    </div>
  </Modal>
  <ModalTwo v-model:show="showTwo"></ModalTwo>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import Modal from "./components/modal/modal";
import ModalTwo from "./components/ModalTwo.vue";

const show = ref(false);
const showTwo = ref(false);
const hiddeModal = ref(false);
</script>

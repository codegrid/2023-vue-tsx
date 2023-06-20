<script setup>
import { ref } from 'vue';

const isOpen = ref(true);
const toggle = () => (isOpen.value = !isOpen.value);
</script>

<template>
  <div>
    <h3>v-ifに替わる式による開閉</h3>
    <button @click="toggle">
      {{ isOpen ? '閉じる' : '開く' }}
    </button>
    <div v-if="isOpen">
      <p>contents</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{ text: string }>();
const emit = defineEmits<{ (eventName: 'changeText', text: string): void }>();
const text = computed({
  get: () => props.text,
  set: (newText) => emit('changeText', newText),
});
</script>

<template>
  <h3>v-modelを使ったフォーム</h3>
  <div>
    <!-- テキストボックス -->
    <input type="text" v-model="text" />

    <!-- ラジオボタン -->
    <label><input type="radio" v-model="text" value="orange" />orange</label>
    <label><input type="radio" v-model="text" value="apple" />apple</label>
    <label><input type="radio" v-model="text" value="ringo" />ringo</label>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ listItems: string[] }>();
</script>

<template>
  <h3>v-forに替わるArray#mapによるリスト表示</h3>
  <ul>
    <li v-for="item in props.listItems" :key="item">
      {{ item }}
    </li>
  </ul>
</template>

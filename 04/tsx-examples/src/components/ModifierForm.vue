<script setup>
const onSubmit = () => {
  alert('送信しました');
};
</script>

<template>
  <h3>preventモディファイアを使ったフォーム</h3>
  <form @submit.prevent="onSubmit">
    <button type="submit">送信する</button>
  </form>
</template>

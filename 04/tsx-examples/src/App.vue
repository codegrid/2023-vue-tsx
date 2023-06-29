<script setup>
import { ref } from 'vue';
import TextEdit from './components/TextEdit.vue';
import ModifierForm from './components/ModifierForm.vue';
import AppLayout from './components/AppLayout.vue';

const text = ref('apple');
const onChangeText = (newText) => (text.value = newText);
</script>

<template>
  <h1>.vue based</h1>

  <TextEdit @changeText="onChangeText" :text="text" />
  <div>text.value is 「{{ text }}」</div>

  <ModifierForm />
  <AppLayout>
    <template v-slot:header>
      <p>headerにこの部分が差し込まれる</p>
    </template>
    <template v-slot:default>
      <p>defaultにこの部分が差し込まれる</p>
    </template>
  </AppLayout>
</template>

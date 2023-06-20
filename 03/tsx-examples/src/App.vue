<script setup>
import Expander from './components/Expander.vue';
import ListItems from './components/ListItems.vue';
import CheckboxItem from './components/CheckboxItemVue/index.vue';
import ExpanderVShow from './components/ExpanderVShow.vue';

const listItems = ['item1', 'item2', 'item3'];
</script>

<template>
  <h1>.vue based</h1>
  <Expander />
  <ListItems :listItems="listItems" />
  <CheckboxItem />
  <ExpanderVShow />
</template>

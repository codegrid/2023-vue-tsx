<template>
  <h3>スロットによるコンテンツの差し込み</h3>
  <div class="AppLayout">
    <header>
      ...
      <slot name="header" />
    </header>
    <main>
      <slot />
    </main>
    <footer>...</footer>
  </div>
</template>

<style scoped>
.AppLayout {
  margin: 10px;
  padding: 10px;
  border: solid 1px orange;
}
</style>

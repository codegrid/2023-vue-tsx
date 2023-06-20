<template>
  <h3>for、label、classの利用</h3>
  <div :class="$style.CheckboxItem">
    <input id="ok2" type="checkbox" />
    <label for="ok2">ここをクリックしてください</label>
  </div>
</template>

<style module src="./index.module.css" />

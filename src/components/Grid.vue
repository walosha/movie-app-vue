<template>
  <div class="app-container">
    <slot></slot>
  </div>
</template>

<style scoped>
.app-container {
  display: grid;
  grid-template-columns: 24rem 1fr;
}
</style>


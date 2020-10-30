<template>
  <div class="container">
    <div class="header-title">
      <slot></slot>
      <p class="header-title_sub">MOVIES</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.header-title {
  display: flex;
  flex-direction: column;
  padding: 0.8rem 0rem;
}

.header-title_sub {
  font-weight: bold;
}
</style>

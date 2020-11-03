<template>
  <div class="ttiltcontainer">
    <h2 class="header-title">{{ title }}</h2>
    <p class="header-title_sub">MOVIES</p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["title"],
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

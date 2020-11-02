<template>
  <div>
    <div class="app">
      <div>
        <app-title>
          <h1 class="title">{{ title }}</h1>
        </app-title>
        <div class="main-content">
          <h1>Individual Movie Page</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Popular",
    },
  },
};
</script>

<style scoped>
</style>

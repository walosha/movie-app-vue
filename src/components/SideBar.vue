<template>
  <div class="sidebar">
    <app-btn v-for="item in 15" :key="item" />
  </div>
</template>

<script>
import AppBtn from "./Btn.vue";
export default {
  data() {
    return {};
  },
  components: {
    AppBtn,
  },
};
</script>

<style scoped>
.sidebar {
  padding: 1rem;
  border-right: 1px solid #e7ebec;
  display: flex;
  flex-direction: column;
}
</style>

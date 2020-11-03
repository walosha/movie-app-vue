<template>
  <fragment>
    <router-view name="header" />
    <app-grid>
      <router-view name="sidebar" />
      <div class="app-container">
        <div class="inner-container">
          <router-view />
        </div>
      </div>
    </app-grid>
  </fragment>
</template>

<script>
import AppGrid from "./components/Grid";
export default {
  components: {
    AppGrid,
  },
};
</script>

<style scoped>
.app-container {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  padding: 2rem 4rem;
}

.inner-container {
  display: flex;
  width: 100%;
  flex-direction: column;
}
</style>


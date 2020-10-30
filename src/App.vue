<template>
  <div>
    <app-header> </app-header>
    <div class="app">
      <side-bar />
      <div>
        <app-title>
          <h1 class="title">{{ title }}</h1>
        </app-title>
        <div class="main-content">
          <movie-card v-for="item in 9" :key="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
import AppTitle from "./components/AppTitle";
import MovieCard from "./components/MovieCard";
import SideBar from "./components/SideBar";

export default {
  props: {
    title: {
      type: String,
      default: "Popular",
    },
  },
  components: {
    AppHeader,
    AppTitle,
    MovieCard,
    SideBar,
  },
};
</script>

<style scoped>
.app {
  display: grid;
  grid-template-columns: 24rem 1fr;
}
.container {
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  user-select: none;
}
.main-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 25rem));
  place-content: space-between space-evenly;
  -webkit-box-align: start;
  align-items: start;
  padding: 4rem 0px;
  gap: 4rem 2rem;
}

.title {
  font-size: 2.5rem;
  font-weight: 200;
  line-height: 1;
  color: var(--color-primary-dark);
  letter-spacing: -0.5px;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}
</style>

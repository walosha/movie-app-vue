<template>
  <fragemnet>
    <app-title>
      <h1 class="title">{{ title }}</h1>
    </app-title>
    <div class="movie-content">
      <movie-card v-for="item in 9" :key="item" />
    </div>
  </fragemnet>
</template>

<script>
import AppTitle from "../components/AppTitle";
import MovieCard from "../components/MovieCard";

export default {
  props: {
    title: {
      type: String,
      default: "Popular",
    },
  },
  components: {
    AppTitle,
    MovieCard,
  },
};
</script>

<style scoped>
.movie-content {
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

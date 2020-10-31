<template>
  <div class="card">
    <div class="card-content">
      <div class="image-header">
        <img class="image" :src="uri" alt="ksjsjsj" />
      </div>
      <div class="card-footer">
        <p class="movie-title">3032</p>
        <div class="movie-rating">
          <star-rating :rating="3" :show-rating="false" :star-size="20" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
  data() {
    return {
      uri: require("../assets/logo.png"),
    };
  },
  components: {
    StarRating,
  },
};
</script>

<style scoped>
.image {
  width: 100%;
  height: 38rem;
  object-fit: cover;
  border-radius: 0.8rem;
  box-shadow: 0rem 2rem 5rem #0000005c;
  transition: all 100ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
}

.card {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  background-color: transparent;
  border-radius: 0.8rem;
  position: relative;
  transition: all 300ms cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
}

.card:hover {
  transform: scale(1.03);
  background-color: #37474f;
}

.card:hover .movie-title,
.card:hover .movie-rating {
  color: #fff;
}

.image-container {
  height: 70%;
}

.movie-title {
  text-align: center;
  font-size: 1.3rem;
  font-weight: 400;
  color: #000;
  margin-bottom: 1rem;
  line-height: 1.4;
  transition: color 300ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
}

.card-footer {
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  padding: 1.5rem 3rem;
}
</style>

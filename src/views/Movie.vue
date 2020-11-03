<template>
  <div class="app">
    <app-title title="Action" />

    <div>
      <div class="movie-box">
        <div class="movie-image--container">
          <img
            class="movie-image"
            :src="require('../assets/logo.png')"
            alt=""
          />
        </div>
        <div class="movie-description">
          <div class="sc-ksYbfQ iKhlGI">
            <div class="">
              <h1 size="2" class="">Roald Dahl's The Witches</h1>
              <h2 size="2" class="">They're real!</h2>
            </div>
          </div>
          <div class="sc-frDJqD hskDAP">
            <div class="sc-kvZOFW dwUwmf">
              <star-rating :rating="3" :show-rating="false" :star-size="20" />

              <p class="sc-hqyNC divNJH">7.2</p>
            </div>
            <div class="sc-jbKcbu kwqQbH">English / 106 min. / 2020</div>
          </div>
          <div class="sc-kjoXOD evAhfb">
            <a class="sc-gisBJw dOXnyo" href="/genres/Fantasy"> Fantasy</a>
            <a class="sc-gisBJw dOXnyo" href="/genres/Family"> Family</a>
            <a class="sc-gisBJw dOXnyo" href="/genres/Adventure"> Adventure</a>
            <a class="sc-gisBJw dOXnyo" href="/genres/Comedy"> Comedy</a>
            <a class="sc-gisBJw dOXnyo" href="/genres/Horror"> Horror</a>
          </div>
          <h3 class="Title">The Synopsis</h3>
          <p class="description">
            In late 1967, a young orphaned boy goes to live with his loving
            grandma in the rural Alabama town of Demopolis. As the boy and his
            grandmother encounter some deceptively glamorous but thoroughly
            diabolical witches, she wisely whisks him away to a seaside resort.
            Regrettably, they arrive at precisely the same time that the world's
            Grand High Witch has gathered.
          </p>
          <h3 class="cast">Cast</h3>
          <div class="carousel-container">CAROUSEL</div>
          <div class="group-container">
            <div class="group-btn">
              <a
                target="_blank"
                href="https://www.thewitchesmovie.net/"
                class="btn-link"
                ><button class="btn">Website</button></a
              ><a
                target="_blank"
                href="https://www.imdb.com/title/tt0805647"
                class="btn-link"
                ><button class="btn">IMDB</button></a
              >
              <div>
                <button class="btn">Trailer</button>
              </div>
            </div>
            <div>
              <button class="btn btn-black">Back</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 class="recommended-main-title">recommended</h3>
        <p class="recommended-sub-title">movies</p>
      </div>
      <div class="related-content">
        <movie-card v-for="item in 9" :key="item" />
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
import MovieCard from "../components/MovieCard";
import AppTitle from "../components/AppTitle";

export default {
  props: {
    title: {
      type: String,
      default: "Popular",
    },
  },
  components: {
    MovieCard,
    StarRating,
    AppTitle,
  },
};
</script>

<style scoped>
.related-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 25rem));
  place-content: space-between space-evenly;
  -webkit-box-align: start;
  align-items: start;
  padding: 4rem 0px;
  gap: 4rem 2rem;
}
.movie-image {
  max-height: 100%;
  height: auto;
  object-fit: cover;
  max-width: 100%;
  border-radius: 0.8rem;
  box-shadow: 0rem 2rem 5rem var(--shadow-color-dark);
}
.title {
  color: #000;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 1rem;
  font-size: 1.4rem;
}
.cast {
  color: #000;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 1rem;
  font-size: 1.4rem;
}
.description {
  font-size: 1.4rem;
  line-height: 1.8;
  color: var(--link-color);
  font-weight: 500;
  margin-bottom: 3rem;
}
.carousel-container {
  margin-bottom: 5rem;
}

.btn-link {
  margin-right: 1rem;
}

.btn {
  display: flex;
  flex-direction: row-reverse;
  -webkit-box-align: center;
  align-items: center;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  padding: 1.2rem 3rem;
  line-height: 1;
  font-weight: 500;
  font-size: 1.3rem;
  width: auto;
  -webkit-box-flex: 0;
  flex-grow: 0;
  color: #000;
  border: 1px solid #000;
  background-color: transparent;
  border-radius: 5rem;
  box-shadow: none;
  transition: all 600ms cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
}

.btn-black {
  background-color: #000;
  color: #fff;
}
.movie-box {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 100%;
  max-width: 120rem;
  margin: 0px auto 7rem;
  transition: all 600ms cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
}

.movie-image--container {
  width: 100%;
  max-width: 40%;
  flex: 1 1 40%;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  display: flex;
  padding: 4rem;
}
.recommended-main-title {
  font-size: 2.5rem;
  font-weight: 200;
  line-height: 1;
  color: #000;
  letter-spacing: -0.5px;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.recommended-sub-title {
  text-transform: uppercase;
  line-height: 1;
  color: rgb(46, 44, 44);
  font-size: 1.2rem;
  font-weight: 700;
}

.group-container {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}
.group-btn {
  margin-right: auto;
  display: flex;
}

.movie-description {
  width: 100%;
  max-width: 60%;
  padding: 4rem;
  flex: 1 1 60%;
}
</style>

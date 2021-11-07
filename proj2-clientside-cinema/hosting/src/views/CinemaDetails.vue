<template>
  <div class="cinema-details">
     <h1 class="title">BEC Auditorium</h1>
    <h1 class="title">{{ screenings.cinemaName }}</h1>
    <div class="screening-im">
      <router-link
        v-for="screening in screenings"
        :key="screening.id"
        :to="{
          name: 'Book',
          params: { slug: cinemaslug },
        }"
        ><img
          :src="`/images/films/${screening.filmSlug}.jpg`"
          alt="screening.filmname"
        />
        <p class="is-size-6">Screen {{ screening.screen }}</p>
        <p class="is-size-3 has-text-weight-medium">
          {{ screening.timeString }}
        </p>
        <p class="is-size-5 has-text-weight-light">{{ screening.filmName }}</p>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Screening } from '@/store/models'
import { mapState } from 'vuex'
@Component({
  computed: mapState(['screening'])
})
export default class CinemaDetails extends Vue {
  get screenings (): Screening[] {
    return this.$store.getters.screeningsForCinema(this.$route.params.slug)
  }
}
</script>

<style scoped>
.screening-im {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  grid-gap: 1rem;
  object-fit: cover;
  object-position: 50% 45%;
  aspect-ratio: auto;

}
.screening-im img {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  object-position: 50% 45%;
}
.screening-im p {
  line-height: 1.1;
}
</style>

<template>
  <div class="page-athlete-details">
    <div class="section" v-if="Athlete">
    <p class="title is-2">{{ Athlete.slug }}</p>
    <p class="title is-2"> age: {{ Athlete.age}}</p>
    <p>{{ Athlete.Gender }}</p>
    </div>
    <div class="section" v-else>
      <p class="title is-2"> Athlete not found</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Athlete } from '@/store/types'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class AthleteDetails extends Vue {
  get Athlete (): Athlete | undefined {
    return this.$store.getters.athletesBySlug[this.$route.params.slug]
  }
}
</script>

<style scoped>
.imga {
  width: 4%;
  height: 2%;
  margin-right: 1rem;
}
.topM15 {
  margin-top: 15px;
}
</style>

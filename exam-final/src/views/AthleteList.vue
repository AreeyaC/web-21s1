<template>
  <div class="page-athlete-list">
    <p class="is-size-3 has-text-weight-bold">Athletes</p>
    <router-link :to="{ name: 'AthleteDetails' }">Ahmed hafnaoui(Tunisia)</router-link><br>
    <router-link :to="{ name: 'AthleteDetails' }">Hsing-Chun Kuo(Chinese Taipei)</router-link><br>
    <router-link :to="{ name: '/' }">Shell-Ann Fraser-Pryce(Jamaica)</router-link><br>
    <router-link :to="{ name: '/' }">Sunisa Lee(USA)</router-link>
  </div>
</template>

<script lang="ts">
import { Athlete } from '@/store/types'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class AthleteList extends Vue {
  get Athlete (): Athlete[] {
    return this.$store.this.state.athlete
      .sort((a: Athlete, b: Athlete) => a.name.localeCompare(b.name))
  }
}
</script>

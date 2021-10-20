<template>
  <div>
    <b-navbar type="is-primary" wrapper-class="container">
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ name: 'Home' }">
          <img src="/images/sports/rhythmic.png" style="filter: invert(1)" class="mr-1" />
          <span class="is-size-4">BEC Olympics</span>
        </b-navbar-item>
      </template>
      <template #start>
        <b-navbar-item tag="router-link" :to="{ name: 'AthleteDetails', params: { athleteSlug: 'ahmed-hafnaoui' } }">Athlete: Ahmed</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ name: 'AthleteList' }">Athletes</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ name: 'AthleteCreate' }">Create Athlete</b-navbar-item>
      </template>
    </b-navbar>

    <div class="container">
      <router-view />
    </div>
  </div>
</template>

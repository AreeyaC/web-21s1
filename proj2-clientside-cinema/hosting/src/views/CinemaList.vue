<template>
 <div>
   <h1 class="is-size-3 has-text-weight-bold">Cinemas</h1>
   <b-navbar-item tag="router-link" :to="{ path: '/cinemas/bangkok-paragon' }">
    <li class="is-size-6  has-text-weight-bold">BECinema @ Siam Paragon</li>
    </b-navbar-item>
    <b-navbar-item tag="router-link" :to="{ path: '/cinemas/chiang-mai-maya' }">
    <li class="is-size-6  has-text-weight-bold">BECinema @ MAYA</li>
    </b-navbar-item><span>- Bangkok</span>
    <b-navbar-item tag="router-link" :to="{ path: '/cinemas/phitsanulok-bec-auditorium' }">
    <li class="is-size-6  has-text-weight-bold">BEC Auditorium</li>
    <h2>- Bangkok</h2>
    </b-navbar-item>
    <b-navbar-item tag="router-link" :to="{ path: '/cinemas/phitsanulok-canal' }">
    <li class="is-size-6  has-text-weight-bold">BECinema Canal View</li>
    <h2>- Bangkok</h2>
    </b-navbar-item>
    <b-navbar-item tag="router-link" :to="{ path: '/cinemas/phitsanulok-central' }">
    <li class="is-size-6  has-text-weight-bold">BECinema @ Central Plaza</li>
    </b-navbar-item>
 </div>
</template>

<style scoped></style>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class cinemas extends Vue { }
</script>

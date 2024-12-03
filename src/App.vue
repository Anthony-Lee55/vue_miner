<script setup>
import Navbar from './components/Navbar.vue';
import { AppState } from './AppState.js';
import { ref } from 'vue';
import Upgrade from './components/globals/Upgrade.vue';
import AutoUpgrade from './components/globals/AutoUpgrade.vue';
import Mine from './components/globals/Mine.vue';
</script>

<template>
  <header class="bg-danger-subtle text-center p-3">
    <h1><i>Vue Miner</i></h1>
  </header>
  <main class="d-flex bg-danger-subtle justify-content-center container-fluid">
    <section class="row">
      <div class="col-md- border border-danger border border-3 justify-content-around fs-3 ">
        <Mine />
      </div>
    </section>
  </main>
  <footer class="bg-danger-subtle">
    <section class="container-fluid">
      <Upgrade />
      <AutoUpgrade />
    </section>
  </footer>
</template>

<style lang="scss">
@import '@/assets/scss/main.scss';

img {
  object-fit: contain;
  max-height: 40vh;
  user-select: none;
  cursor: grabbing;
}
</style>

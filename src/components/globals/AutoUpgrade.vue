<script setup>
import { AppState } from '@/AppState';
import { computed } from 'vue';

const autoUpgrades = computed(() => AppState.autoUpgrades)

// function autoUpdate() {
//   const wood = wood += autoTotal
// }
</script>


<template>
  <div v-for="autoUpgrade in autoUpgrades" :key="autoUpgrade.name" class="row justify-content-center m-2 text-shadow">
    <button class="btn btn-outline-danger col-md-3">
      <p>🪵{{ autoUpgrade.price }}</p>
      <span>
        <p>🔥+{{ autoUpgrade.damage }}/Second</p>
      </span>
    </button>
  </div>
</template>
<style lang="scss" scoped></style>
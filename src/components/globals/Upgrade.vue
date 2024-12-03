<script setup>
import { AppState } from '@/AppState';
import { computed, ref } from 'vue';

const wood = ref(0)


const upgrades = computed(() => AppState.upgrades)

// function clickUpdate() {
//   const wood = wood += clickTotal()
// }

</script>


<template>
  <div v-for="upgrade in upgrades" :key="upgrade.name" class="row justify-content-center m-2">
    <button class="btn btn-outline-danger col-md-3" :disabled="wood > 10">
      <p>🪵{{ upgrade.price }}</p>
      <span>
        <p>🪓+{{ upgrade.damage }}/Click</p>
      </span>
    </button>
  </div>
</template>


<style lang="scss" scoped></style>
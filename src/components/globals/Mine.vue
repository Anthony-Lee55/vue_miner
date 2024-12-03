<script setup>
import { AppState } from '@/AppState';
import { Mine } from '@/models/Mine';
import { computed, ref } from 'vue';

const wood = ref(0)

function farm() {
  wood.value++
}

const mine = computed(() => AppState.mine)
</script>


<template>
  <section class="row">
    <div class="col-md-12" role="button" @click="farm()">
      <img src="https://em-content.zobj.net/source/telegram/386/christmas-tree_1f384.webp" alt="">
    </div>
  </section>
  <div class="d-flex justify-content-between align-self-center">
    <div>
      <h4>🪓+ <span>{{ mine.clickCount }}</span></h4>
    </div>
    <div>
      <h4>🪵= <span>{{ wood }}</span></h4>
    </div>
    <div>
      <h4>🔥+ <span>{{ mine.autoCount }}</span></h4>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>
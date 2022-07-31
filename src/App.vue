<script setup>
import { useMainStore } from './store/main';
const store = useMainStore()
console.log(store);
// const store = useMainStore()
// const store = useMainStore()
</script>

<template>
  <div>
    {{ store.count }}
    <button @click="store.count++">count++</button>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

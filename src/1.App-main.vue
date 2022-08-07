<script setup>
import { useMainStore } from './store/main';
const store = useMainStore()
const { increase } = store
console.log(store);
// const store = useMainStore()
// const store = useMainStore()
</script>

<template>
  <div>
    {{ store.count }}
    <button @click="store.count++">count++</button>
    <button @click="store.increase(5)">通过action ++</button>
    <button @click="increase(5)">increase解决this ++</button>
    <div>计算属性：{{ store.double }}</div>
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

<script setup>
import { useMainStore } from './store/main';
import { useUserStore } from './store/user';

const mainStore = useMainStore()
console.log(mainStore);
const userStore = useUserStore()
const { increase } = mainStore

mainStore.$subscribe((state) => { // 类似watch
  console.log(state);
  console.log('userStore changed,subscribe');
})

</script>

<template>
  <div>
    {{ mainStore.count }}
    <button @click="mainStore.count++">count++</button>
    <button @click="mainStore.$patch({
      count: mainStore.count + 1 //可以给多个属性批量新增
    })">通过$patch对象 ++</button>

    <button @click="mainStore.$patch((state) => {
      state.count++
    })">通过$patch函数 ++</button>
    <button @click="mainStore.increase(5)">通过store ++</button>
    <button @click="increase(5)">increase解决this ++</button>
    <div>计算属性：{{ mainStore.double }}</div>

    <button @click="mainStore.$reset()">$reset重置</button>
  </div>

  <br />
  <button @click="userStore.changeAge(5)">changeAge 5 ++</button>

  {{ userStore.age }} {{ userStore.doubleAge }}

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

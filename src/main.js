import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from '@/pinia'

const app = createApp(App)
const pinia = createPinia()
pinia.use(function (store) {
	// 每个store都要执行
	let local = localStorage.getItem(store.id + 'PINIA_STATE')
	if (local) {
		store.$state = JSON.parse(local)
	}
	store.$subscribe(store => {
		localStorage.setItem(store.id + 'PINIA_STATE', JSON.stringify(store))
	})
})
app.use(pinia)

app.mount('#app')

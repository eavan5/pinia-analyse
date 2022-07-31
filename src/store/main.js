import { defineStore } from '@/pinia'

export const useMainStore = defineStore('main', {
	state: () => ({
		count: 0,
	}),
	getters: {
		dobule() {
			return this.count * 2
		},
	},
	actions: {
		increment(payload) {
			this.count += payload
		},
		decrement(payload) {
			this.count -= payload
		},
	},
})

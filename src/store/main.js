import { defineStore } from '@/pinia'

export const useMainStore = defineStore('main', {
	state: () => ({
		count: 0,
	}),
	getters: {
		double() {
			return this.count * 2
		},
	},
	actions: {
		increase(payload) {
			this.count += payload
		},
		decrement(payload) {
			this.count -= payload
		},
	},
})

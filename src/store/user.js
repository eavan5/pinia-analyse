import { defineStore } from '@/pinia'

import { computed, reactive, toRefs } from 'vue'

export const useUserStore = defineStore('user', () => {
	const person = reactive({ name: 'eavan', age: 18 })
	const doubleAge = computed(() => {
		return person.age * 2
	})
	const changeAge = playLoad => {
		person.age = playLoad
	}

	return {
		...toRefs(person),
		doubleAge,
		changeAge,
	}
})

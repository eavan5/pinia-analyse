import { getCurrentInstance, inject, effectScope } from 'vue'
import { symbolPinia } from './consts'
// state 管理store中的state
// _s store和对应着id的映射表
// _e 用来停止effect

function createOptionsStore(id, options, pinia) {
	let { state } = options
	let scope
	function setup() {
		// 后面要实现计算属性等

		pinia.state.value[id] = state ? state() : {}

		const localState = pinia.state.value[id]
		return localState
	}

	// 全局可以关闭所有的store,让他停止,自己也有一个scope,可以停止自己
	const setupStore = pinia._e.run(() => {
		scope = effectScope()
		return scope.run(() => setup())
	})
	pinia._s.set(id, setupStore)
}

export function defineStore(idOrOptions, setup) {
	// id+对象 // ID+setup // 对象
	let id
	let options
	if (typeof idOrOptions === 'string') {
		id = idOrOptions
		options = setup
	} else {
		id = idOrOptions.id
		options = idOrOptions
	}

	// 用户使用的函数
	function useStore() {
		const currentInstance = getCurrentInstance()
		const pinia = currentInstance && inject(symbolPinia)
		// 用户多次调用useStore方法,只有第一次是将这个store创建出来,后续都是可以复用的
		if (!pinia._s.has(id)) {
			// 将标识和选项放到pinia中
			createOptionsStore(id, options, pinia)
		}
		const store = pinia._s.get(id)
		return store
	}
	return useStore
}

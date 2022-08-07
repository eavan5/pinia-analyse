import { ref, effectScope } from 'vue'
import { symbolPinia } from './consts'

export function createPinia() {
	const scope = effectScope() // scope.stop() 停止所有 effect
	const state = scope.run(() => ref({})) // 控制所有的effect
	const _p = []
	const pinia = {
		install(app) {
			app.provide(symbolPinia, pinia)
		},
		state, // 维护所有store的状态
		_s: new Map(), // 存放所有store的实例
		_e: scope,
		_p,
		use(plugin) {
			_p.push(plugin)
			return this // 让他能链式调用
		},
	}

	return pinia
}

// 一个store对应的内容

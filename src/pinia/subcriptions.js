export function addSubscription(subscription, callback) {
	subscription.push(callback)
	const removeSubscription = () => {
		const index = subscription.indexOf(callback)
		if (index > -1) {
			subscription.splice(index, 1)
		}
	}
	return removeSubscription
}

export function triggerSubscriptions(subscriptions, ...args) {
	subscriptions.slice(0).forEach(callback => {
		callback(...args)
	})
}

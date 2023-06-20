import { defineStore } from 'pinia'
import useSystemMessagesStore from './systemMessages.js'

export default (connectors) => {
	const store = defineStore('main-features', {
		state: () => ({
			items: []
		}),
		actions: {
			async load() {
				try {
					const res = await connectors.getMainFeatured()
					this.items = res.slider_images
					return res
				} catch (error) {
					useSystemMessagesStore().addError(error)
				}
			}
		}
	})
	return store
}

import { defineStore } from 'pinia'
import useSystemMessagesStore from './systemMessages.js'

export default (connectors) => {
	const store = defineStore('product', {
		state: () => ({
			items: [],
			totalPage: 0
		}),
		actions: {
			async load(params) {
				try {
					if (params > 0 && params <= this.totalPage) {
						params = '?page=' + params
					} else {
						params = '?page=' + 1
					}
					const res = await connectors.list(params)
					this.items = res.data
					this.totalPage = res.totalPage
					return res.data
				} catch (error) {
					useSystemMessagesStore().addError(error)
				}
			},
			async getOne(id) {
				try {
					const res = await connectors.getOne({ id })
					return res
				} catch (error) {
					useSystemMessagesStore().addError(error)
				}
			},
			async loadCategoryProducts(id) {
				try {
					const res = await connectors.listCategoryProducts({ id })
					this.items = res
					return res
				} catch (error) {
					useSystemMessagesStore().addError(error)
				}
			},
			async listRelatedProducts(id) {
				try {
					const res = await connectors.listRelatedProducts({ id })
					return res
				} catch (error) {
					useSystemMessagesStore().addError(error)
				}
			},
			async productReviews(id) {
				try {
					const res = await connectors.productReviews({ id })
					return res
				} catch (error) {
					useSystemMessagesStore().addError(error)
				}
			},
			async submitProductReview(formData) {
				try {
					const res = await connectors.submitReview(formData)
					return res
				} catch (error) {
					useSystemMessagesStore().addError(error)
				}
			},
			async searchProducts(formData) {
				try {
					const res = await connectors.searchProducts(formData)
					this.items = res
					return res
				} catch (error) {
					useSystemMessagesStore().addError(error)
				}
			}
		}
	})
	return store
}

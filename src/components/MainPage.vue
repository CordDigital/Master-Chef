<script setup>
import { ref, watchEffect } from 'vue'
import { useMainFeaturedStore } from '../stores'
import AppLoadingVue from './AppLoading.vue'

const data = ref()
const mainFeaturedProducts = await useMainFeaturedStore()

async function loadData() {
	const mainFeatures = await mainFeaturedProducts.load()
	console.log('main-featured data: ', mainFeatures.data)
	data.value = mainFeatures.data
}

watchEffect(async() => {
	loadData()
})

</script>

<template>
	<AppLoadingVue v-if="!data"></AppLoadingVue>
	<v-container  v-else>
		<div class="main-container">
			<div class="main-carusel">
				<div class="main-carusel__sec">
					<div class="main-carusel__item">
						<swiper-container
							lides-per-view="3"
							speed="500"
							loop="true"
							style="height: 100%"
							:autoplay="{
								delay: 1000
							}"
						>
							<swiper-slide v-for="(item, index) of data[0]" :key="index">
							<router-link :to="`/category/${item.category_id}/product`">
								<v-img cover class="img" style="width: 100%; height: 100%" :src="item.slider_images[0]" />
							</router-link>
							</swiper-slide>
						</swiper-container>
					</div>
					<div class="main-carusel__item">
						<swiper-container
							lides-per-view="3"
							speed="500"
							loop="true"
							style="height: 100%"
							:autoplay="{
								delay: 1000
							}"
						>
							<swiper-slide v-for="(item, index) of data[0]" :key="index">
								<router-link :to="`/category/${item.category_id}/product`">
									<v-img cover class="img" style="width: 100%; height: 100%" :src="item.slider_images[1]"/>
								</router-link>
							</swiper-slide>
						</swiper-container>
					</div>
				</div>
				<div class="main-carusel__main">
					<swiper-container
						lides-per-view="3"
						speed="500"
						loop="true"
						style="height: 100%"
						:autoplay="{
							delay:980
						}"
					>
						<swiper-slide v-for="(item, index) of data[0]" :key="index">

							<router-link :to="`/category/${item.category_id}/product`">
								<v-img cover style="width: 100%; height: 100%"  class="img hidden-xs-and-down" :src="item.main_slider_image"/>
								<v-img contain style="width: 100%; height: 100%" class="img hidden-sm-and-up"  :src="item.main_slider_image"/>
							</router-link>
						</swiper-slide>
					</swiper-container>
				</div>
				<div class="main-carusel__sec">
					<div class="main-carusel__item">
						<swiper-container
							lides-per-view="3"
							speed="500"
							loop="true"
							style="height: 100%"
							:autoplay="{
								delay: 1000
							}"
						>
							<swiper-slide v-for="(item, index) of data[0]" :key="index">
								<router-link :to="`/category/${item.category_id}/product`">
									<v-img cover class="img" style="width: 100%; height: 100%" :src="item.slider_images[2]"/>
								</router-link>
							</swiper-slide>
						</swiper-container>
					</div>
					<div class="main-carusel__item">
						<swiper-container
							lides-per-view="3"
							speed="500"
							loop="true"
							style="height: 100%"
							:autoplay="{
								delay: 1000
							}"
						>
							<swiper-slide v-for="(item, index) of data[0]" :key="index">
								<router-link :to="`/category/${item.category_id}/product`">
									<v-img cover class="img" style="width: 100%; height: 100%" :src="item.slider_images[3]"/>
								</router-link>
							</swiper-slide>
						</swiper-container>
					</div>
				</div>
			</div>
		</div>
	</v-container>
</template>

<style lang="scss" scoped>
.main-carusel {
	height: 60vh;
	min-height: 450px;
	margin-block: 2rem;
	display: flex;
	&__main {
		width: 50%;
	}
	&__main,
	&__sec {
		margin-inline-end: 2%;
		&:last-of-type {
			margin-inline-end: 0;
		}
	}
	&__sec {
		width: 23%;
		height: 100%;
	}

	&__sec {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	&__item {
		height: 46%;
	}
}
@media (min-width: 320px) and (max-width: 599px) {
.main-carusel {
	height: 60vh;
	min-height: 450px;
	margin-block: 2rem;
	display: flex;
	&__main {
		width: 100%;
		.v-img__img.v-img__img--cover{
			object-fit: contain !important;
		}
	}
	&__sec {
		display: none;
	}
}

}

</style>

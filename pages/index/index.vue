<template>
	<view class="">
		<swiper-image :swiperArr="swiperArr"></swiper-image>
	</view>
</template>

<script>
	import swiperImage from '../../components/index/swiper-image.vue'
	export default {
		components:{
			swiperImage
			
		},
		data() {
			return{
				swiperArr:[
					{
						src:'../../static/images/demo/cate_banner.png'
					},
					{
						src:'../../static/images/demo/cate_banner.png'
					},
					{
						src:'../../static/images/demo/cate_banner.png'
					}
				]
			}
		},
		methods: {

		}
	}
</script>

<style>
	
</style>

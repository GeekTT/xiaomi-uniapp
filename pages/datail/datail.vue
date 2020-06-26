<template>
	<view>
		<swiper-image :swiperArr="banners" height='750' preview></swiper-image>
	</view>
</template>

<script>
	import swiperImage from '../../components/index/swiper-image.vue'
	export default {
		components:{
			swiperImage
		},
		data() {
			return {
				banners:[
					{
						src:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/72cad6b5b7caafc18b2ad93ee17e3024.jpg'
					},
					{
						src:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/54b60d49bbfe14e4db53efee3e1b0053.jpg'
					},
					{
						src:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/121e370dc1d5ccf75673eb9ac7a575a3.jpg'
					},
					{
						src:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6678e97a159fff2e90b31573059188e7.jpg'
					},
					
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>

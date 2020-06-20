<template>
	<view class="">
		<swiper indicator-dots autoplay circular :interval="3000" :duration="1000">
			<block v-for="(item,index) in swiperArr" :key="index">
				<swiper-item>
					<image :src="item.src" mode="" lazy-load style="height: 350upx;"></image>
				</swiper-item>
			</block>
			
		</swiper>
	</view>
</template>

<script>
	export default {
		props:{
			swiperArr:Array
		},
		data() {
			return{
				
			}
		},
		methods: {
	
		}
	}
</script>

<style>
</style>

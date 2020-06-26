<template>
	<view class="">
		<swiper indicator-dots autoplay circular :interval="3000" :duration="1000" :style="getStyle" 
		indicator-color="rgba(0, 0, 0, .2)" indicator-active-color="#fff">
			<block v-for="(item,index) in swiperArr" :key="index">
				<swiper-item class="swiper-item" @tap="event(item,index)">
					<image :src="item.src" mode="" lazy-load :style="getStyle"></image>
				</swiper-item>
			</block>

		</swiper>
	</view>
</template>

<script>
	export default {
		props: {
			swiperArr: [Array, Object],
			height: {
				type: String,
				default: "350"
			},
			preview: {
				type: Boolean,
				default: false
			}
		},
		computed: {
			getStyle() {
				return `height: ${this.height}rpx;`
			},
			getUrls() {
				var urls = []
				for (let v in this.swiperArr) {
					urls.push(this.swiperArr[v].src)
				}
				return urls
			}
		},
		methods: {
			event(item, index) {
				if (this.preview) {
					return uni.previewImage({
						current: index,
						urls: this.getUrls,
						indicator: "default"
					})
				}
			}
		}
	}
</script>

<style>
</style>

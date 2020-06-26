<template>
	<view class="p-2">
		<view class="d-flex flex-row a-end">
			<text class="font-lg main-tab-text-color font-weight">￥{{detail.pprice}}</text>
			<text class="text-light-muted font line-through">￥{{detail.oprice}}</text>
		</view>
		<view class="font-md font-weight">{{detail.title}}</view>
		<view class="font text-muted mb-3 line-h-sm mt-1">{{detail.desc}}</view>
	</view>
</template>

<script>
	import price from "@/components/common/price.vue"
	export default {
		components: {
			price
		},
		props: ['detail','showPrice'],
	}
</script>

<style>
</style>

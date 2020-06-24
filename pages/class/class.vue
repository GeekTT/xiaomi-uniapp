<template>
	<view>
		<!-- 顶部 -->
		<view class="w-95 position-fixed top-0 z-9 d-flex a-center j-around bg-light-1 px-2 pt-1 pb-0">
			<i class="iconfont icon-fanhui4 i-font-size"></i>
			<view class="flex-1 text-light-muted text-center">分类</view>
			<i class="iconfont icon-sousuo1 text-light-muted i-font-size m-0 " @click="goSearch"></i>
		</view>
		<view class="d-flex my-7 w-100 ">
			<scroll-view class="flex-1 scroll-y border-right">
				<view class="border-light-secondary py-1 left-scroll-item" v-for="(item,index) in cate" :key="index" @click="changeCate(index)">
					<view class=" py-1 font-md text-muted text-center class-no-active" :class="activeIndex === index ? 'class-active':'' ">{{item.name}}</view>
				</view>
			</scroll-view>
			<scroll-view class="flex-3 scroll-y">
				<view v-for="(item, index) in 50" :key="index">
					{{item}}
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: 0,
				cate: []
			}
		},
		onLoad() {
			for (let i = 0; i < 20; i++) {
				this.cate.push({
					name: '分类' + i
				})
			}
		},
		methods: {
			// 点击搜索按钮跳转至搜索页
			goSearch() {
				uni.navigateTo({
					url: '../search/search'
				})
			},
			changeCate(index) {
				this.activeIndex = index
			}
		}
	}
</script>

<style>
	.class-active {
		font-size: 40upx;
		color: #FF6700 !important;
		transition: all .2s linear;
	}
	.class-no-active{
		    transition: all .2s linear;
		    transform-origin: center center;
			}
</style>

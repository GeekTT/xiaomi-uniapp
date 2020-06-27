<template>
	<view>
		<view class="position-relative w-100 my-header " style="height: 172rpx; line-height: 172rpx;">
			<view class="d-flex a-center position-absolute left-0 right-0" style="bottom: 40rpx;">
				<image src="https://m.mi.com/static/img/avatar.76a75b8f17.png" style="height: 90rpx;width: 90rpx;" class="rounded-circle border-light ml-4"></image>
				<view class="ml-2 text-white font-md">登录/注册</view>
			</view>
		</view>


		<!-- 图标分类 -->
		<card>
			<view slot="title" class="d-flex a-center j-sb w-100">
				<text class="font-md-1">我的订单</text>
				<view class="text-secondary font ml-auto" @click="navigate('order',true)">
					全部订单 <text class="iconfont icon-you font"></text>
				</view>
			</view>
			<view class="d-flex a-center">
				<view class="flex-1 d-flex flex-column a-center j-center py-3" hover-class="bg-light-secondary" v-for="(item,index) in orders"
				 :key="index" @click="openOrder(item)">
					<view class="iconfont font-lg line-h" :class="item.icon"></view>
					<view>{{item.name}}</view>
				</view>
			</view>
		</card>
		<divider></divider>
		<uni-list-item showExtraIcon leftIconStyle="color:#FDBF2E;" leftIcon="icon-VIP" title="小米会员"></uni-list-item>
		<uni-list-item showExtraIcon leftIconStyle="color:#FCBE2D;" leftIcon="icon-huangguan" title="会员中心"></uni-list-item>
		<divider></divider>
		<uni-list-item showExtraIcon leftIconStyle="color:#FA6C5E;" leftIcon="icon-service" title="服务中心"></uni-list-item>
		<uni-list-item showExtraIcon leftIconStyle="color:#FE8B42;" leftIcon="icon-home" title="小米之家"></uni-list-item>
		<divider></divider>
		<uni-list-item showExtraIcon leftIconStyle="color:#9ED45A;" leftIcon="icon-gengduo" title="更多功能"></uni-list-item>
		<uni-list-item showExtraIcon leftIconStyle="color:#808C98;" leftIcon="icon-icon_set_up" title="更多设置" @click="navigate('user-set')"></uni-list-item>
	</view>
</template>

<script>
	import loading from "@/common/mixin/loading.js"
	import card from "@/components/common/card.vue"
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
	export default {
		components: {
			loading,
			card,
			uniListItem
		},
		data() {
			return {
				orders: [{
					name: "待付款",
					icon: "icon-wallet_icon",
					index: 1
				}, {
					name: "待收货",
					icon: "icon-daishouhuo",
					index: 2
				}, {
					name: "待评价",
					icon: "icon-pinglun",
					index: 3
				}, {
					name: "待退修",
					icon: "icon-buoumaotubiao46"
				}]

			}
		},
		methods: {

		}
	}
</script>

<style>
	.my-header {
		background: url(https://m.mi.com/static/img/bg.63c8e19851.png) center 0 #f37d0f;
		background-size: auto 100%;
	}
</style>

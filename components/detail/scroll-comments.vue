<template>
	<view class="p-2">
		<card headTitle="用户评价" :headTitleWeight="true" :headBorderBottom="false"/>
		<scroll-view scroll-x class="scroll-row">
			<view class="scroll-row-item rounded-1 mr-2 p-2 border" style="width: 620rpx;height: 380rpx;"
			v-for="(item,index) in comments" :key="index">
				<view class="d-flex a-center mb-1">
					<image class="rounded-circle" :src="item.userpic" mode="widthFix" style="width: 70rpx;height: 70rpx;"></image>
					<view class="ml-2">
						<text class="font-md ">{{item.unsername}}</text>
						<text class="d-block font text-light-muted line-h"></text>
					</view>
					<view class="iconfont icon-dianzan text-light-muted font pl-1 ml-auto">{{item.goods_num}}</view>
				</view>
				<view class="m-0 font text-light-muted">{{item.context}}</view>
				<view class="row">
					<view class="span24-8 px-2" v-for="(img,index2) in item.imglist" :key="index2">
						<image class="rounded" :src="img" mode="" style="height: 159rpx;"></image>
					</view>
	
				</view>
			</view>
			
		</scroll-view>
		<view class="w-100 d-flex j-center a-center mt-2 py-2  border-bottom text-light-muted font-md" hover-class="bg-light-secondary">
			<text class="">查看全部</text>
			<view class="iconfont icon-you font ml-1"></view>
		</view>
	</view>
</template>

<script>
	import card from '../common/card.vue'
	import $T from '@/common/lib/time.js';
	export default {
		components:{
			card
		},
		props: ['comments','goods_id'],
		filters: {
			formatTime(value) {
				return $T.gettime(value);
			}
		},
		methods:{
			open(){
				uni.navigateTo({
					url: '/pages/detail-comment/detail-comment?id='+this.goods_id,
				});
			}
		}
	}
</script>

<style>
</style>

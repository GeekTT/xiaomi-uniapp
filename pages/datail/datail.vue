<template>
	<view>
		<!-- 商品大图 -->
		<swiper-image :swiperArr="banners" height='750' preview></swiper-image>
	<!-- 基础详情 -->
	<base-info :detail="detail"></base-info>
	<!-- 滚动商品特性 -->
	<scroll-attrs :baseAttrs="baseAttrs"></scroll-attrs>
	<!-- 属性选择 -->
	 <view class="p-2">
		      <view class="rounded border">
				  <!-- @click="show('attr')" v-if="detail.sku_type === 1" -->
		        <uni-list-item >
		          <view class="d-flex">
		            <text class="mr-2 text-muted">已选</text>
					<!-- {{checkedSkus}} -->
		            <text>8+128GB</text>
		          </view>
		        </uni-list-item>
				<!-- @click="goToCoupon" -->
		        <uni-list-item >
		          <view class="d-flex">
		            <text class="mr-2 text-muted">优惠券</text>
		            <text class="main-text-color">马上领取</text>
		          </view>
		        </uni-list-item>
				<!-- @click="show('express')" -->
		        <uni-list-item >
		          <view class="d-flex">
		            <text class="mr-2 text-muted">配送至</text>
		            <text class="mr-2">北京 东城区</text>
		            <text class="main-text-color">现配</text>
		          </view>
		        </uni-list-item>
				<!-- @click="show('service')" -->
		        <uni-list-item extraWidth="15%" >
		          <view class="d-flex a-center">
		            <view class="text-muted font d-flex a-center mr-2">
		              <view class="iconfont icon-finish main-text-color"></view>
		              小米自营
		            </view>
		            <view class="text-muted font d-flex a-center mr-2">
		              <view class="iconfont icon-finish main-text-color"></view>
		              小米发货
		            </view>
		            <view class="text-muted font d-flex a-center mr-2">
		              <view class="iconfont icon-finish main-text-color"></view>
		              七天无理由退货
		            </view>
		          </view>
		        </uni-list-item>
		      </view>
		    </view>
	<!-- 横向滚动评论 -->
	<!-- 商品详情 -->
	<!-- 热门推荐 -->
	
	
	</view>
</template>

<script>
	import swiperImage from '@/components/index/swiper-image.vue'
	import baseInfo from '@/components/detail/base-info.vue'
	import scrollAttrs from '../../components/detail/scroll-attrs.vue'
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
	export default {
		components:{
			swiperImage,
			baseInfo,
			scrollAttrs,
			uniListItem
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
					
				],
				detail:{
					title:"小米10 ",
					desc:'骁龙865旗舰平台，双模5G，用久了也不卡 / 1亿像素8K电影相机 / 6.67英寸 AMOLED双曲面屏',
					pprice:3799,
					oprice:3999
				},
				baseAttrs:[
					{
						icon:'icon-cpu',
						cpu:'CPU',
						desc:'骁龙865'
					},
					{
						icon:'icon-cpu',
						cpu:'CPU',
						desc:'骁龙865'
					},
					{
						icon:'icon-cpu',
						cpu:'CPU',
						desc:'骁龙865'
					},
					{
						icon:'icon-cpu',
						cpu:'CPU',
						desc:'骁龙865'
					},
					{
						icon:'icon-cpu',
						cpu:'CPU',
						desc:'骁龙865'
					},
					{
						icon:'icon-cpu',
						cpu:'CPU',
						desc:'骁龙865'
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

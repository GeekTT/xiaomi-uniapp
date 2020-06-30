<template>
	<view>
		<uni-nav-bar left-icon="back"  @click-right="isEdit = !isEdit"
		:right-text="isEdit?'完成': '编辑'" title="购物车" :statusBar="true" :shadow="false" :fixed="true"></uni-nav-bar>
		 <!-- 购物车为空 v-if="disableSelectAll"-->
		 <view class="w-100">
		 	<view class="w-100 d-flex j-center a-center py-3  text-light-muted " style="height: 70rpx; background-color: #ebebeb;">
		 		<image src="https://m.mi.com/static/img/cartnull.daaf7926f8.png" mode="widthFix" style="width: 90rpx;"></image>
		 		<text class="d-block mx-2 font text-light-muted-l">购物车还是空的 </text>
		 		<view class="px-2" style="border: 1px solid rgba(0,0,0,.15)">去逛逛</view>
		 	</view>
			<view class="w-100">
				<image src="https://i8.mifile.cn/b2c-mimall-media/e95ade2750a7fde92369b416c7d3176d.jpg" 
				mode="widthFix" style="height: auto;"></image>
			</view>
			<view class="row j-sb mb-6">
				<common-list v-for="(item,index) in hotList" :key="index" :item="item" :index="index" type="redirectTo">
				</common-list>
			</view>
		 </view>
			 	
	</view>
</template>

<script>
	import commonList from "@/components/common/common-list.vue"
	import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue'
	export default {
		components:{
			uniNavBar,
			commonList
		},
		data() {
			return {
				isEdit:false,
				hotList: [{
						cover: '../../static/images/demo/list/mi10.jpg',
						title: '小米10',
						desc: '骁龙865/1亿像素相机',
						oprice: '3999',
						pprice: '3799'
				
					},
					{
						cover: '../../static/images/demo/list/mi10.jpg',
						title: '小米10',
						desc: '骁龙865/1亿像素相机',
						oprice: '3999',
						pprice: '3799'
				
					},
					{
						cover: '../../static/images/demo/list/mi10.jpg',
						title: '小米10',
						desc: '骁龙865/1亿像素相机',
						oprice: '3999',
						pprice: '3799'
				
					},
					{
						cover: '../../static/images/demo/list/mi10.jpg',
						title: '小米10',
						desc: '骁龙865/1亿像素相机',
						oprice: '3999',
						pprice: '3799'
				
					},
				],
				
			}
		},
		
		onLoad(){
			console.log(JSON.stringify(this.$store.state.list))
		},
		methods: {
			
		}
	}
</script>

<style>
</style>

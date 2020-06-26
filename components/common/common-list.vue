<template>
	<view class="" style="width: 372.5rpx;" @click="openDetail">
		<image :src="item.cover" mode="widthFix" style="height: 400rpx;" lazy-load></image>
		<view class="d-flex flex-column j-center a-center p-1 pb-3">
			<view><text class="font-md">{{item.title}}</text></view>
			
			<text class="d-block m-0 p-0 font text-light-muted">{{item.desc}}</text>
			<view class="d-flex py-1">
				<price :text="item.pprice"></price>
				<view class="ml-1 a-self-end line-h" ><text class="font-sm text-light-muted line-through">￥{{item.oprice}}</text></view>
			</view>
			<button  class="main-btn-bg-color py-0 px-5 font">立即购买</button>
		</view>
	</view>
</template>

<script>
	import price from "@/components/common/price.vue";
	export default {
		components:{
			price
		},
		props:{
			item:Object,
			index:[Number,String],
			type:{
				type:String,
				default:"navigateTo"
			}
		},
		methods: {
			// openDetail() {
			// 	uni[this.type]({
			// 		url:"/pages/detail/detail?detail="+JSON.stringify(this.item)
			// 	})
			// }
			openDetail(){
				uni.navigateTo({
					url:'../../pages/datail/datail'
				})
			}
		},
	}
</script>

<style>
</style>

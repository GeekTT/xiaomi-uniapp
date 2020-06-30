<template>
	<view>
		<view class="p-2">
			<view class="d-flex a-center py-2 border-bottom border-light-secondary">
				<text class="text-muted">用户评价({{total}})</text>
				<text class="main-text-color ml-auto mr-1">{{ (good_rate * 100) + '%' }}</text>
				<text class="text-muted">满意</text>
			</view>
			<view class="d-flex flex-wrap pt-3" style="margin-right: -20rpx;">
				<view class="px-2 py border rounded mr-2 mb-2 cate-item" v-for="(item,index) in cateList" :key="index" :class="cateIndex === index ? 'active' : ''"
				 @tap="cateChange(index)">
					{{item.name}}
				</view>
			</view>
		</view>
		<divider />
		<view class="p-2 d-flex a-start border-bottom border-light-secondary">
					<image src="../../static/images/demo/demo6.jpg" mode="widthFix"
					style="width: 90rpx;height: 90rpx;" class="rounded flex-shrink"></image>
					<view class="pl-2 flex-1">
						<view class="d-flex a-center">
							<text class="font-md text-primary font-weight">zjk</text>
							<view class="iconfont icon-xiaolian  main-tab-text-color ml-auto">
								<text class="pl-1 font">000</text>
							</view>
						</view>
						<view class="line-h-md font-md">
							000
						</view>
						<view class="row" >
							<view class="span24-8 px pb">
								<image src="http://i1.mifile.cn/b2c-data-mishop/1a0755b93a6c2a550bddcc6948db105c.jpg" mode="widthFix"
								style="height: 100rpx;"></image>
							</view>
						</view>
						<view class="d-flex a-center">
							<text class="text-light-muted">2020-06-29</text>
							<view class="d-flex text-light-muted ml-auto a-center mr-2">
								12 <text class="iconfont icon-dianzan text-muted ml"></text>
							</view>
							<view class="d-flex text-light-muted a-center">
								<text class="iconfont icon-pinglun text-muted ml"></text>
							</view>
						</view>
						<!-- 客服回复 -->
						<view class="bg-light-secondary rounded p-2 d-flex flex-wrap a-center mt-1">
							<template >
								<text class="main-tab-text-color">官方回复：</text>
								谢谢惠顾！
								<view class="iconfont icon-dianzan text-light-muted line-h-md font ml-2">
									<text class="text-muted pl-1">赞客服 666</text>
								</view>
							</template>
						</view>
					</view>
				</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: 0,
				cateIndex: 0,
				cateList: [{
						name: "全部",
						value: ""
					},
					{
						name: "好评",
						value: "/good"
					},
					{
						name: "中评",
						value: "/middle"
					},
					{
						name: "差评",
						value: "/bad"
					},
				],
				total: 0,
				good_rate: 0,
				list: [],
				page: 1,
				// 1.上拉加载更多 2.加载中... 3.没有更多了
				loadtext: "上拉加载更多"
			}
		},
		methods: {
				cateChange(index){
							this.cateIndex = index
							uni.showLoading({
								title:"加载中..."
							})
						
						}
		}
	}
</script>

<style>
.cate-item{
	background: #FFEBEC;
	color: #7B6D6C;
	border-color:#F4E0E1;
}
.cate-item.active{
	background: #FF6B01!important;
	color: #FFFFFF!important;
	border-color: #DE7232!important;
}
</style>

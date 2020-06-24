<template>
	<view>
		<view class=" d-flex a-center j-around px-2 pt-1 pb-0">
			<i class="iconfont icon-fanhui4 i-font-size"></i>
			<search-top class="flex-1 mx-2" :searchIconShow="false" :paddingLeft="false" :placeholder="placeholder" @onSearch="onSearch" :disabled="true"></search-top>
			<i class="iconfont icon-tubiao- text-light-muted i-font-size"></i>
		</view>
		<card headTitle="热门搜索" :headBorderBottom="false" bodyCover="../../static/images/demo/search-banner.jpg"></card>
		<!-- 多色按钮 -->
		<view class="px-1 mb-2">
			<color-tag v-for="(item,index) in hot" :key="index" :item="item" @click="quickSearch(item.name)"></color-tag>
		</view>
		<!-- 常用分类 -->
		<card headTitle="常用分类" :bodyPadding="true" :headBorderBottom="false">
			<color-tag v-for="(item,index) in cate" :key="index" :item="item" :color="false" @click="quickSearch(item.name)"></color-tag>
		</card>
		
		<template>
					<!-- 分割线 -->
					<divider />
					<!-- 搜索记录 -->
					<card headTitle="搜索记录">
						<!-- <view slot="right" class="font text-primary"
						@click="clearHistory">清除搜索记录</view> -->
						<uni-list-item title="小米10pro"></uni-list-item>
						<uni-list-item title="米家插线板"></uni-list-item>
					</card>
				</template>
	</view>
</template>

<script>
	import searchTop from '@/components/common/search.vue'
	import card from '@/components/common/card.vue'
	import colorTag from "@/components/search/color-tag.vue"
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"

	export default {
		components: {
			searchTop,
			card,
			colorTag,
			uniListItem
		},
		data() {
			return {
				placeholder: '输入商品名称~',
				
				cate: [{
						name: '耳机'
					},
					{
						name: '手机'
					},
					{
						name: '音箱'
					},
					{
						name: '手表'
					},
					{
						name: '配件'
					},
					{
						name: '网关/传感器'
					},
					{
						name: '健康'
					},
					{
						name: '酷玩'
					},
				],
				hot: [{
						name: 'Redmi9 购机赠耳机'
					},
					{
						name: 'Redmi K30pro'
					},
					{
						name: 'RedmiBook 14'
					},
					{
						name: '小米10'
					},
					{
						name: '手环 腕带'
					},
					{
						name: '米家插线板 快充版27W'
					},
				],

			}
		},
		methods: {
			onSearch(){
				uni.navigateTo({
					url:'../search-list/search-list'
				})
			}

		}
	}
</script>

<style>
	.i-font-size {
		font-size: 55rpx;
		color: #8a8a8a;
	}
</style>

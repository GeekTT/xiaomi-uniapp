<template>
	<view>
		<!-- 顶部搜索栏 -->
		<view class="w-95 position-fixed top-0 z-9 d-flex a-center j-around bg-white px-2 pt-1 pb-2">
			<i class="iconfont icon-fanhui4 i-font-size"></i>
			<search-top class="flex-1 mx-2" :searchIconShow="false" :paddingLeft="false" :placeholder="placeholder" @onSearch="onSearch"
			 :disabled="true"></search-top>
			<i class="iconfont icon-sousuo1 text-light-muted i-font-size m-0 "></i>
		</view>
		<!-- 排序|筛选 -->
		<view class="w-100 position-fixed top-10 d-flex border-top border-bottom a-center  bg-white" style="height: 100upx;z-index: 100;">
			<view class="flex-1 d-flex a-center j-center font-md" v-for="(item,index) in screen.list" :key="index" @tap="changeScreen(index)">
				<text :class="screen.currentIndex === index ? 'main-text-color' : 'text-muted'">{{item.name}}</text>
				<view>
					<view class="iconfont icon-paixu-shengxu line-h0" :class="item.status===1?'main-text-color':'text-light-muted'">
					</view>
					<view class="iconfont icon-paixu-jiangxu line-h0" :class="item.status===2?'main-text-color':'text-light-muted'">
					</view>
				</view>
			</view>

			<view class="flex-1 d-flex a-center j-center main-text-color" @click="showDrawer">
				筛选
			</view>
		</view>


		<view style="height: 220rpx;" class="z-0"></view>
		<!-- 抽屉 -->
		<uni-drawer :visible="showRigth" mode="right" @close="closeDrawer">
			<card headTitle="价格范围" :headBorderBottom="false" :headTitleWeight="false">

				<!-- 单选按钮组 -->
				<zcm-radio-group :label="label" :selected.sync='label.selected'></zcm-radio-group>

			</card>
			<!-- 按钮 -->
			<view class="d-flex position-fixed bottom-0 right-0 w-100 border-top border-light-secondary">
				<view class="flex-1 main-bg-color text-white font-md py-2 text-center" hover-class="main-bg-hover-color" @click="confirm">确定</view>
				<view class="flex-1 font-md py-2 text-center" hover-class="bg-light-secondary" @click="reset">重置</view>
			</view>
		</uni-drawer>
		<!-- 列表 -->
		<block v-for="(item,index) in list" :key="index">
			<search-list :item="item" :index="index"></search-list>
		</block>
		<!-- 没有数据 -->
		<no-thing v-if="list.length === 0" msg="空空如也"></no-thing>
		<!-- 上拉加载更多 -->
		<divider />
		<view class="d-flex a-center j-center text-light-muted font-md py-3">
			{{loadtext}}
		</view>
	</view>
</template>

<script>
	import card from "@/components/common/card.vue"
	import uniDrawer from "@/components/uni-ui/uni-drawer/uni-drawer.vue"
	import searchTop from '@/components/common/search.vue'
	import zcmRadioGroup from "@/components/common/radio-group.vue"
	import searchList from "@/components/search-list/search-list.vue"
	import noThing from '@/components/common/no-thing.vue';
	export default {
		components: {
			searchTop,
			uniDrawer,
			card,
			zcmRadioGroup,
			searchList,
			noThing
		},

		data() {
			return {
				placeholder: '输入商品名称~',
				// 1.上拉加载更多 2.加载中... 3.没有更多了
				loadtext: "上拉加载更多",
				keyword: "",
				page: 1,
				list: [{
						title: '小米10',
						titlepic: '/static/images/demo/demo6.png',
						desc: '骁龙865 / 1亿像素8K电影相机/ 双1216超线性扬声器 / 新一代LPDDR5',
						pprice: 3999,
						comment_num: 1300,
						good_num: '98%',
					},
					{
						title: '小米10',
						titlepic: '/static/images/demo/demo6.png',
						desc: '骁龙865 / 1亿像素8K电影相机/ 双1216超线性扬声器 / 新一代LPDDR5',
						pprice: 3999,
						comment_num: 1300,
						good_num: '98%',
					},
					{
						title: '小米10',
						titlepic: '/static/images/demo/demo6.png',
						desc: '骁龙865 / 1亿像素8K电影相机/ 双1216超线性扬声器 / 新一代LPDDR5',
						pprice: 3999,
						comment_num: 1300,
						good_num: '98%',
					},
					{
						title: '小米10',
						titlepic: '/static/images/demo/demo6.png',
						desc: '骁龙865 / 1亿像素8K电影相机/ 双1216超线性扬声器 / 新一代LPDDR5',
						pprice: 3999,
						comment_num: 1300,
						good_num: '98%',
					},
					{
						title: '小米10',
						titlepic: '/static/images/demo/demo6.png',
						desc: '骁龙865 / 1亿像素8K电影相机/ 双1216超线性扬声器 / 新一代LPDDR5',
						pprice: 3999,
						comment_num: 1300,
						good_num: '98%',
					},
					{
						title: '小米10',
						titlepic: '/static/images/demo/demo6.png',
						desc: '骁龙865 / 1亿像素8K电影相机/ 双1216超线性扬声器 / 新一代LPDDR5',
						pprice: 3999,
						comment_num: 1300,
						good_num: '98%',
					},

				],
				showRigth: false,
				screen: {
					currentIndex: 0,
					list: [{
							name: "综合",
							status: 2,
							key: "all"
						},
						{
							name: "销量",
							status: 0,
							key: "sale_count"
						},
						{
							name: "价格",
							status: 0,
							key: "min_price"
						},
					]
				},
				label: {
					selected: 0,
					list: [{
							name: "不限",
							rule: false,
							value: false
						},
						{
							name: "0-50",
							rule: "between",
							value: "0,50"
						},
						{
							name: "50-100",
							rule: "between",
							value: "50,100"
						},
						{
							name: "100-500",
							rule: "between",
							value: "100,500"
						},
						{
							name: "500-1000",
							rule: "between",
							value: "500,1000"
						},
						{
							name: "大于1000",
							rule: ">",
							value: "1000"
						},
					]
				},

			}
		},
		methods: {
			// 打开筛选抽屉
			showDrawer() {
				this.showRigth = true
				// 记录旧的值
				this.oldSelected = this.label.selected
			},
			// 关闭抽屉
			closeDrawer() {
				// 恢复回原来的值
				this.label.selected = this.oldSelected
				this.showRigth = false
				this.oldSelected = 0
			},
			changeScreen(index) {
				// 判断当前点击是否已经是激活状态
				let oldIndex = this.screen.currentIndex
				let oldItem = this.screen.list[oldIndex]
				if (oldIndex === index) {
					oldItem.status = oldItem.status === 1 ? 2 : 1
					// 加载数据
					// this.getData()
					return
				}
				let newIitem = this.screen.list[index]
				// 移除旧激活状态
				oldItem.status = 0
				this.screen.currentIndex = index
				// 增加新激活状态
				newIitem.status = 1
				// 加载数据
				// this.getData()
			},
		}
	}
</script>

<style>
	.i-font-size {
		font-size: 50rpx;
		color: #8a8a8a;
	}
</style>

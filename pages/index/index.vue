<template>
	<view>
		  <view class="status_bar"></view>
		<view class="w-100 ">
			<!-- 顶部搜索框 -->
			<navigator url="../search/search">
				<view class=" d-flex a-center j-around px-2 pt-1 pb-0">
					<image class="logo-mi" src="../../static/images/mi.png" mode=""></image>
					<search-top  class="flex-1 mx-2" :placeholder="placeholder"  :disabled="true"></search-top>
					<i class="iconfont icon-iconfuzhi text-light-muted font-my"></i>
				</view>
			</navigator>
			<!-- 顶部选项卡 -->
			<scroll-view scroll-x="true" class="scroll-row border-bottom" style="height: 80rpx;" :scroll-into-view="scrollinto"
			 scroll-with-animation="true">
				<view class="scroll-item scroll-row-item px-3" v-for="(item,i) in tabBars" :key="i" @click="changeTab(i)" :id="'tab' + i">
					<text :class="tabIndex === i ? 'main-tab-text-color border-bottom-active-color': ' ' ">{{item.name}}</text>
				</view>
			</scroll-view>
		</view>
		<swiper class="mb-5 pb-3" :current="tabIndex" :style="'height: '+ scrollH +'px;'" @change="onChangeTab">
			<swiper-item v-for="(item,i) in newsitems" :key="i">
				<scroll-view class="mb-5" scroll-y="true" :style="'height: '+ scrollH +'px;'"
				@scrolltolower="loadmore(i)">
					<block v-for="(list ,listIndex) in item.list" :key="listIndex">
						<!-- 轮播组件 -->
						<swiper-image v-if="list.type === 'swiper'" :swiperArr="list.data"></swiper-image>
						<template v-if="list.type === 'nav'">
							<!-- 首页导航卡片 -->
							<index-nav :resdata="list.data"></index-nav>
							<!-- 全局分割线 -->
							<divider></divider>
						</template>
						<template v-if="list.type === 'threeAd'">
							<!-- 三图广告 -->
							<three-adv :resdata="list.data"></three-adv>
							<!-- <divider></divider> -->
						</template>
						<!-- 公共列表组件 -->
						<view class="row j-sb">
							<block v-if="list.type === 'commonList'" v-for="(item2,index2) in list.data" :key="index2">
								<common-list :item="item2" :index="index2"></common-list>
							</block>
						</view>
					</block>
					<!-- 上拉加载更多 -->
					<divider />
					<view class="d-flex a-center j-center font-sm text-light-muted-l font-md py-3">
						{{item.loadtext}}
					</view>
				</scroll-view>

			</swiper-item>

		</swiper>
	</view>
</template>

<script>
	// 模拟后端数据
	let demotabBars = [{
			name: '推荐'
		},
		{
			name: '手机'
		},
		{
			name: '智能'
		},
		{
			name: '电视'
		},
		{
			name: '笔记本'
		},
		{
			name: '家电'
		},
		{
			name: '生活周边'
		},
	]
	let demo1 = [{
			type: 'swiper',
			data: [{
					src: '../../static/images/demo/banner1.jpg'
				},
				{
					src: '../../static/images/demo/banner2.jpg'
				},
				{
					src: '../../static/images/demo/banner3.jpg'
				}
			]
		},

		{
			type: 'nav',
			data: [{
					src: '../../static/images/indexnav/1.png',
					text: '新品分类'
				},
				{
					src: '../../static/images/indexnav/2.gif',
					text: '小米众筹'
				},
				{
					src: '../../static/images/indexnav/3.gif',
					text: '以旧换新'
				},
				{
					src: '../../static/images/indexnav/4.gif',
					text: '1分拼团'
				},
				{
					src: '../../static/images/indexnav/5.gif',
					text: '超值特卖'
				},
				{
					src: '../../static/images/indexnav/6.gif',
					text: '小米秒杀'
				},
				{
					src: '../../static/images/indexnav/7.gif',
					text: '真心想要'
				},
				{
					src: '../../static/images/indexnav/8.gif',
					text: '电视热卖'
				},
				{
					src: '../../static/images/indexnav/9.gif',
					text: '家电热卖'
				},
				{
					src: '../../static/images/indexnav/10.gif',
					text: '米粉卡'
				},
			]
		},

		{
			type: 'threeAd',
			data: [{
					src: '../../static/images/demo/demo1.jpg'
				},
				{
					src: '../../static/images/demo/demo2.jpg'
				},
				{
					src: '../../static/images/demo/demo3.jpg'
				},
			]
		},
		{
			type: 'commonList',
			data: [{
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
			]
		},

	]
let demo2 = [
	{
			type: 'swiper',
			data: [{
					src: '../../static/images/demo/banner1.jpg'
				},
				{
					src: '../../static/images/demo/banner2.jpg'
				},
				{
					src: '../../static/images/demo/banner3.jpg'
				}
			]
		},

		{
			type: 'nav',
			data: [{
					src: '../../static/images/indexnav/1.png',
					text: '新品分类'
				},
				{
					src: '../../static/images/indexnav/2.gif',
					text: '小米众筹'
				},
				{
					src: '../../static/images/indexnav/3.gif',
					text: '以旧换新'
				},
				{
					src: '../../static/images/indexnav/4.gif',
					text: '1分拼团'
				},
				{
					src: '../../static/images/indexnav/5.gif',
					text: '超值特卖'
				},
			]
		},

		{
			type: 'threeAd',
			data: [{
					src: '../../static/images/demo/demo1.jpg'
				},
				{
					src: '../../static/images/demo/demo2.jpg'
				},
				{
					src: '../../static/images/demo/demo3.jpg'
				},
			]
		},
		{
			type: 'commonList',
			data: [{
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
			]
		},

	]
	import searchTop from '../../components/common/search.vue'
	import swiperImage from '../../components/index/swiper-image.vue'

	import indexNav from '../../components/index/index-nav.vue'
	import threeAdv from '../../components/index/three-adv.vue'
	import card from '../../components/common/card.vue'
	import commonList from '../../components/common/common-list.vue'
	export default {
		components: {
			swiperImage,
			indexNav,
			threeAdv,
			card,
			commonList,
			searchTop

		},
		data() {
			return {
				
				placeholder:'小米10pro',
				scrollinto: '',
				scrollH: 700, // 默认屏幕高度
				tabIndex: 0,
				tabBars: [],
				newsitems: [],


			}
		},
		onLoad() {
			// 获取可视高度
			uni.getSystemInfo({
				success(res) {
					this.scrollH = res.windowHeight - uni.upx2px(82)
				}
			})
			this.__init()
		},
		methods: {
			// 点击搜索框跳转至搜索页
			onFocus(){
				uni.navigateTo({
					url:'../search/search'
				})
				},
			// 初始化事件
			__init() {
				// 获取顶部选项卡
				this.tabBars = demotabBars
				// 根据顶部选项卡生成页面
				let arr = []
				for (let i = 0; i < this.tabBars.length; i++) {
					let obj = { // 存放页面的对象
						list: [],
						// 1.上拉加载更多 2.加载中... 3.没有更多了
						loadtext: "上拉加载更多",
					}
					if (i === 0) {
						obj.list = demo1
					}
					arr.push(obj)
				}
				this.newsitems = arr
			},
			//切换选项卡
			changeTab(index) {
				if (this.tabIndex === index) {
					return
				} else {
					this.tabIndex = index
					this.scrollinto = 'tab' + index
					// 滑动时加载相应数据
					this.onLoadData()
				}
			},
			// 监听滑动
			onChangeTab(e) {
				this.changeTab(e.detail.current)
			},
			// 加载数据
			onLoadData() {
				// 获取当前选项卡index
				let index = this.tabIndex
				// 请求数据
				this.newsitems[index].list = demo2
			},
			
			// 上拉加载更多
			loadmore(index) {
				let item = this.newsitems[index]
				// 是否处于可加载状态
				if (item.loadtext !== '上拉加载更多') return;
				// 模拟加载
				item.loadtext = '加载中...'
				setTimeout(() => {
					item.list = [...item.list, ...demo2]
					item.loadtext = '上拉加载更多'
				},2000)

				// this.addData(() => {
				// 	uni.showToast({
				// 		title: '加载成功'
				// 	})
				// })
				
				
				
			},
			
			
			
		},
		created() {
		
		}
	}
</script>

<style>
	.scroll-item {
		height: 80rpx;
		line-height: 80rpx;
	}
	.logo-mi{
		width: 45rpx;
		height: 30rpx;
	}
	.font-my{
		font-size: 48rpx;
	}
</style>

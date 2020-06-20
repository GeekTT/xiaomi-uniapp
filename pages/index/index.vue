<template>
	<view>
		<!-- 顶部选项卡 -->
		<scroll-view scroll-x="true" class="scroll-row border-bottom" style="height: 80rpx;" :scroll-into-view="scrollinto" scroll-with-animation="true">
			<view  class="scroll-item scroll-row-item px-3"
			v-for="(item,i) in tabBars" :key="i"
			@click="changeTab(i)"
			:id="'tab' + i">
				<text :class="tabIndex === i ? 'main-tab-text-color border-bottom-active-color': ' ' ">{{item.name}}</text>
			</view>
		</scroll-view>
		<swiper :current="tabIndex" :style="'height: '+ scrollH +'px;'"
		@change="onChangeTab">
			<swiper-item v-for="(item,i) in tabBars" :key="i">
				<scroll-view scroll-y="true" :style="'height: '+ scrollH +'px;'">
					<!-- 轮播组件 -->
					<swiper-image :swiperArr="swiperArr"></swiper-image>
					<!-- 首页导航卡片 -->
					<index-nav :resdata="navArr"></index-nav>
					<!-- 全局分割线 -->
					<divider></divider>
					<!-- 三图广告 -->
					<three-adv :resdata="threeAdvArr"></three-adv>
					<divider></divider>
					<card :showhead="false">
						<image src="../../static/images/bg.jpg" mode="widthFix"></image>
					</card>
					<!-- 公共列表组件 -->
					<view class="row j-sb">
						<block v-for="(item2,index2) in commonList" :key="index2">
							<common-list :item="item2" :index="index2"></common-list>
						</block>
					</view>
				</scroll-view>
				
			</swiper-item>
			
		</swiper>
		
		
	</view>
</template>

<script>
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
			commonList

		},
		data() {
			return {
				scrollinto:'',
				scrollH:700,// 默认屏幕高度
				tabIndex:0,
				tabBars:[
					{name:'推荐'},
					{name:'手机'},
					{name:'智能'},
					{name:'电视'},
					{name:'笔记本'},
					{name:'家电'},
					{name:'生活周边'},
				],
				swiperArr: [{
						src: '../../static/images/demo/banner1.jpg'
					},
					{
						src: '../../static/images/demo/banner2.jpg'
					},
					{
						src: '../../static/images/demo/banner3.jpg'
					}
				],
				navArr: [{
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
				],
				threeAdvArr: [{
						src: '../../static/images/demo/demo1.jpg'
					},
					{
						src: '../../static/images/demo/demo2.jpg'
					},
					{
						src: '../../static/images/demo/demo3.jpg'
					},
				],
				commonList: [{
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

			}
		},
		onLoad() {
			// 获取可视高度
			uni.getSystemInfo({
				success(res) {
					this.scrollH = res.windowHeight - upx2px(82)
				}
			})
		},
		methods: {
		//切换选项卡
		changeTab(index){
			if(this.tabIndex === index){
				return
			}else{
				this.tabIndex = index
				this.scrollinto = 'tab'+index	
			}
		},
		onChangeTab(e){
			this.changeTab(e.detail.current)
		}
	}
	}
</script>

<style>
.scroll-item{
	height: 80rpx;
	line-height: 80rpx;
}
</style>

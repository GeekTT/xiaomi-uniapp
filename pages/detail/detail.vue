<template>
	<view>
		<!-- 商品大图 -->
		<swiper-image :swiperArr="banners" height='750' preview></swiper-image>
		<!-- 基础详情 -->
		<base-info :detail="detail"></base-info>
		<!-- 滚动商品特性 -->
		<scroll-attrs :baseAttrs="baseAttrs"></scroll-attrs>
		<divider />
		<!-- 属性选择 -->
		<view class="">
			<!-- @click="show('attr')" v-if="detail.sku_type === 1" -->
			<uni-list-item @click="show">
				<view class="d-flex a-center j-sb">
					<text class="mr-2 text-muted">已选</text>
					<!-- {{checkedSkus}} -->
					<text class="flex-1">8+128GB</text>
				</view>
			</uni-list-item>
			<!-- @click="goToCoupon" -->
			<uni-list-item>
				<view class="d-flex">
					<text class="mr-2 text-muted">优惠券</text>
					<text class="main-text-color">马上领取</text>
				</view>
			</uni-list-item>
			<!-- @click="show('express')" -->
			<uni-list-item>
				<view class="d-flex">
					<text class="mr-2 text-muted">送至</text>
					<i class="iconfont icon-dingwei mr-1"></i>
					<text class="mr-2">北京 东城区</text>
					<text class="main-text-color">现配</text>
				</view>
			</uni-list-item>
			<!-- @click="show('service')" -->
			<uni-list-item extraWidth="15%">
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

		<!-- 横向滚动评论 :goods_id="detail.id"-->
		<scroll-comments :comments="comments"></scroll-comments>
		<!-- 商品详情 -->
		<view class="py-4">
			<u-parse class="uparse" :content="context" @preview="preview" @navigate="navigate"></u-parse>
		</view>
		<!-- 热门推荐 -->
		<card headTitle="热门推荐" :headTitleWeight="false" :headBorderBottom="false">
			<view class="row j-sb">
				<common-list v-for="(item,index) in hotList" :key="index" :item="item" :index="index" type="redirectTo">
				</common-list>
			</view>
		</card>
		<!-- 底部操作条 @show="show('attr')"-->
		<bottom-btn @click="show"></bottom-btn>
		<!-- 属性筛选框 -->
		<common-popup :popupClass="popupClass" @hide="hide">
			
		</common-popup>

	</view>
</template>


<script>
	import commonPopup from "@/components/common/common-popup.vue"
	import bottomBtn from "@/components/detail/bottom-btn.vue"
	import commonList from "@/components/common/common-list.vue"
	import card from '@/components/common/card.vue'
	import uParse from "@/components/uni-ui/uParse/src/wxParse.vue"
	import scrollComments from '@/components/detail/scroll-comments.vue'
	import divider from '@/components/common/divider.vue'
	import swiperImage from '@/components/index/swiper-image.vue'
	import baseInfo from '@/components/detail/base-info.vue'
	import scrollAttrs from '../../components/detail/scroll-attrs.vue'
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
	let htmlString =
		`
	<p>
		<img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7c800f765b6b795094659f413e289ba0.jpg?w=1080&h=218&bg=FEFEFE">
		<img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/95a3019200c600fb583e72a7893842c3.jpg?w=1080&h=1885&bg=FFFFFF">
		<img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c64d57025e52beed787ad785eb9247cb.jpg?w=1080&h=1185&bg=181818">
		<img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2929aea9b080c1b673aa3bbe09d9d64b.jpg?w=1080&h=944&bg=181818">
		<img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/56c41794983a5dc165f6ee51cae96309.jpg?w=1080&h=503&bg=181818">
		<img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f3c3118de1bbaa05504ea2125160b81e.jpg?w=1080&h=1561&bg=181818">
		<img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1318c513d90fc9f609b3be0033bcb381.jpg?w=1080&h=834&bg=FFFFFF">
		<img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7f32baef197119012e55f01fd01949aa.jpg?w=1080&h=806&bg=FAFAFA">
		<img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a987820092163ac4b93619b31240d3f.jpg?w=1080&h=597&bg=FAFAF8">
		<img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0d3653b9918f59e829ca5419c0832b57.jpg?w=1080&h=867&bg=FAFAFA">
		<img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dadb7de6d74b29c01762beb17cb1b791.jpg?w=1080&h=1041&bg=70F1C">
		<img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dadb7de6d74b29c01762beb17cb1b791.jpg?w=1080&h=1041&bg=70F1C">
		<img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f7b00f6f69cbc93a707339cc613a30d8.jpg?w=1080&h=828&bg=C1D2D">
		<img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/03bcc5f519e58841bb2d2f45b909b9eb.jpg?w=1080&h=1189&bg=121B2A">
		
		<img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/29099d2f2167eab4433e493e0c4dbdeb.jpg?w=1080&h=788&bg=30408">
		<img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cc412c91f4194c3b38a1fa09f1e6b1cc.jpg?w=1080&h=877&bg=20202">
		<img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1d3367f995db2fcdbcb82edeaa418f02.jpg?w=1080&h=1377&bg=20202">
		<img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/46497422f5e0be3d232e23f87028411b.jpg?w=1080&h=1121&bg=101010">
		<img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c2c5405724356ccc05a974d5dad76ab9.jpg?w=1080&h=843&bg=8090B">
		<img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2f592d9351bf3c51dc199970ee75f975.jpg?w=1080&h=944&bg=F2F0F1">
		<img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b77b79881217f6795579b814207cee5c.jpg?w=1080&h=983&bg=F2F0F1">
		<img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/95c429cef04c1e8b65f29ef546a2ac72.jpg?w=1080&h=1949&bg=FFFFFF">
		<img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fc88fd153c1da1138fd621e00137d3e2.png?w=1080&h=427">
	</p>
	`
	export default {
		components: {
			swiperImage,
			baseInfo,
			scrollAttrs,
			uniListItem,
			divider,
			scrollComments,
			uParse,
			card,
			commonList,
			bottomBtn,
			commonPopup
		},
		data() {
			return {
				context: htmlString,
				popupClass:'none',
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
				comments: [{
						userpic: '../../static/images/demo/demo6.jpg',
						unsername: '买买买',
						create_time: '2020-06-26',
						goods_num: 2323,
						context: '好，很好，非常好',
						imglist: [
							'../../static/images/demo/cate_03.png',
							'../../static/images/demo/cate_03.png',
							'../../static/images/demo/cate_03.png'
						]
					},
					{
						userpic: '../../static/images/demo/demo6.jpg',
						unsername: '买买买',
						create_time: '2020-06-26',
						goods_num: 2323,
						context: '好，很好，非常好',
						imglist: [
							'../../static/images/demo/cate_03.png',
							'../../static/images/demo/cate_03.png',
							'../../static/images/demo/cate_03.png'
						]
					},
					{
						userpic: '../../static/images/demo/demo6.jpg',
						unsername: '买买买',
						create_time: '2020-06-26',
						goods_num: 2323,
						context: '好，很好，非常好',
						imglist: [
							'../../static/images/demo/cate_03.png',
							'../../static/images/demo/cate_03.png',
							'../../static/images/demo/cate_03.png'
						]
					},
				],
				banners: [{
						src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/72cad6b5b7caafc18b2ad93ee17e3024.jpg'
					},
					{
						src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/54b60d49bbfe14e4db53efee3e1b0053.jpg'
					},
					{
						src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/121e370dc1d5ccf75673eb9ac7a575a3.jpg'
					},
					{
						src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6678e97a159fff2e90b31573059188e7.jpg'
					},

				],
				detail: {
					title: "小米10 ",
					desc: '骁龙865旗舰平台，双模5G，用久了也不卡 / 1亿像素8K电影相机 / 6.67英寸 AMOLED双曲面屏',
					pprice: 3799,
					oprice: 3999
				},
				baseAttrs: [{
						icon: 'icon-cpu',
						cpu: 'CPU',
						desc: '骁龙865'
					},
					{
						icon: 'icon-cpu',
						cpu: 'CPU',
						desc: '骁龙865'
					},
					{
						icon: 'icon-cpu',
						cpu: 'CPU',
						desc: '骁龙865'
					},
					{
						icon: 'icon-cpu',
						cpu: 'CPU',
						desc: '骁龙865'
					},
					{
						icon: 'icon-cpu',
						cpu: 'CPU',
						desc: '骁龙865'
					},
					{
						icon: 'icon-cpu',
						cpu: 'CPU',
						desc: '骁龙865'
					},
				]
			}
		},
		methods: {
			hide(key) {
			        this.popupClass = 'hide'
			        setTimeout(() => {
			          this.popupClass= 'none'
			        }, 200);
			      },
			      show(key) {
			        this.popupClass= 'show'
			      },
			preview(src, e) {
				// do something
				console.log("src: " + src);
			},
			navigate(href, e) {
				// 如允许点击超链接跳转，则应该打开一个新页面，并传入href，由新页面内嵌webview组件负责显示该链接内容
				console.log("href: " + href);
			},

		}
	}
</script>

<style>
	.uparse p {
		padding: 0 !important;
	}

	.uparse view,
	.uparse uni-view {
		margin: 0;
		padding: 0 !important;
		line-height: 0 !important;
	}
</style>

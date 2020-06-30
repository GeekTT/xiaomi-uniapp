<template>
	<view class="d-flex h-100" >
		<scroll-view id="leftScroll" class="left-scroll flex-1 border-right " scroll-y>
			<view class="left-scroll-item py-1" v-for="(item,index) in cate" :key="index" @tap="changeCate(index)">
				<view class=" py-1 font-md text-muted text-center class-no-active" :class="activeIndex === index ? 'class-active':'' ">{{item.name}}</view>
				
			</view>
		</scroll-view>
		<scroll-view scroll-y class="right-scroll flex-3" :scroll-top="rightScrollTop" scroll-with-animation
		@scroll="onRightScroll">
			<view class="row right-scroll-item" v-for="(item,index) in list" :key="index">
				<view class="w-100 text-center text-muted font-md">{{item.name}}</view>
				<view class="span24-8 text-center py-2" v-for="(item2 ,index2) in item.list" :key="index2">
					<image :src="item2.src" mode="" style="width: 120upx;height: 120upx;"></image>
					<text class="d-block text-light-muted font">{{item2.name}}</text>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showLoading:true,// 是否显示加载动画
				activeIndex: 0,
				cate: [],
				list: [],
				leftDomsTop: [],
				rightDomsTop: [],
				rightScrollTop: 0,
				leftScrollTop: 0,
				cateItemHeight: 0,// 左边每个节点的高度
			}
		},
		watch: {
			async activeIndex(newValue, oldValue) {
				// 获取scroll-view高度，scrollTop
				let data = await this.getElInfo({
					size: true,
					scrollOffset: true
				})
				let H = data.height
				let ST = data.scrollTop
				// 下边
				if ((this.leftDomsTop[newValue] + this.cateItemHeight) > (H + ST)) {
					return this.leftScrollTop = this.leftDomsTop[newValue] + this.cateItemHeight - H
				}
				// 上边
				if (ST > this.cateItemHeight) {
					this.leftScrollTop = this.leftDomsTop[newValue]
				}
			}
		},
		onLoad() {
			this.getData()
		},
		onReady() {
			// 左边
			this.getElInfo({
				all: 'left',
				size: true,
				rect: true
			}).then(data => {
				this.leftDomsTop = data.map(v => {
					this.cateItemHeight = v.height
					return v.top
				})
			})
	
			// 右边边
			this.getElInfo({
				all: 'right',
				size: false,
				rect: true
			}).then(data => {
				this.rightDomsTop = data.map(v => v.top)
			})
	
		},
		methods: {
			// 获取节点信息
			getElInfo(obj = {}) {
				return new Promise((res, rej) => {
					let option = {
						size: obj.size ? true : false,
						rect: obj.rect ? true : false,
						scrollOffset: obj.scrollOffset ? true : false,
					}
					const query = uni.createSelectorQuery().in(this);
					let q = obj.all ? query.selectAll(`.${obj.all}-scroll-item`) : query.select('#leftScroll')
					q.fields(option, data => {
						res(data)
					}).exec();
				})
			},
			getData() {
				for (let i = 0; i < 20; i++) {
					this.cate.push({
						name: '分类' + i
					})
					this.list.push({
						name: `—— 产品分类${i} ——`,
						list: []
					})
				}
				for (let i = 0; i < this.list.length; i++) {
					for (let j = 0; j < 24; j++) {
						this.list[i].list.push({
							src: '/static/images/demo/demomi.png',
							name: `分类${i}-商品${j}`
						})
					}
				}
				this.showLoading = false
			},
			// 点击搜索按钮跳转至搜索页
			goSearch() {
				uni.navigateTo({
					url: '../search/search'
				})
			},
			// 点击左边导航栏
			changeCate(index) {
				this.activeIndex = index
				// 右边scroll-view滚动到对应区块
				this.rightScrollTop = this.rightDomsTop[index]
				console.log(this.rightScrollTop)
			},
			// 监听右边滚动事件
			async onRightScroll(e) {
				// 匹配当前scrollTop所处的索引
				this.rightDomsTop.forEach((v, k) => {
					if (v < e.detail.scrollTop + 3) {
						this.activeIndex = k
						return false
					}
				})
			},
		}
	}
</script>

<style>
.class-active {
		font-size: 40upx;
		color: #FF6700 !important;
		transition: all .15s linear;
	}

	.class-no-active {
		transition: all .15s linear;
		transform-origin: center center;
		line-height: 60upx;
	}
</style>

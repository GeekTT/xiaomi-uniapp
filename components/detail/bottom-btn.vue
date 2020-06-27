<template>
	<view>
		<view style="height: 100rpx;"></view>
		<view class="d-flex a-stretch bg-white position-fixed left-0 bottom-0 right-0"
		style="height: 100rpx; z-index: 100;">
			<view class="flex-1 d-flex flex-column a-center j-center line-h-sm text-light-muted font" hover-class="bg-light-secondary">
				<view class="iconfont icon-unstarred  line-h-sm font-lg"></view>
				收藏
			</view>
			<view class="flex-1 d-flex flex-column a-center j-center line-h-sm position-relative text-muted font" hover-class="bg-light-secondary" @tap="ToCart">
				<view class="iconfont icon-gouwuche1 text-light-muted line-h-sm font-lg"></view>
				<!-- v-if="cartCount === '99+' || cartCount > 0" -->
				<view class="position-absolute" style="left: 100rpx;top: 0;">
					<uni-badge :text="cartCount" type="error" size="small"></uni-badge>
				</view>
				购物车
			</view>
			<!-- @tap="$emit('show')" -->
			<view @click="show" class="d-flex j-center a-center font-md main-bg-color text-white" hover-class="main-bg-hover-color" style="flex: 2.5;"
			>
				加入购物车
			</view>
		</view>
		<!-- 属性筛选框 -->
		<common-popup :popupClass="popupClass" @hide="hide"></common-popup>
	</view>
</template>

<script>
	import uniBadge from '../uni-ui/uni-badge/uni-badge.vue';
	import commonPopup from "@/components/common/common-popup.vue"
	// import { mapGetters } from 'vuex'
	export default {
		components: {
			uniBadge,
			commonPopup
		},
		data(){
			return {
				popupClass:'none',
			}
		},
		computed: {
			// ...mapGetters(['cartCount'])
		},
		methods: {
			ToCart() {
				uni.switchTab({
					url:"../../pages/cart/cart"
				})
			},
			hide(key) {
			        this.popupClass = 'hide'
			        setTimeout(() => {
			          this.popupClass= 'none'
			        }, 200);
			      },
			      show(key) {
			        this.popupClass= 'show'
			      },
			
		},
	}
</script>

<style>
</style>

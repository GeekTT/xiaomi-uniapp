<template>
	<view class="container position-fixed left-0 right-0">
	  <i class="iconfont  find" :class="{'icon-tubiao-':searchIconShow}"></i>
	  <input class="bar" :class="{ 'bar-pl60':paddingLeft,'bar-pl30':!paddingLeft}" @confirm="$emit('onSearch')" :placeholder="placeholder"></input>
	</view>
</template>

<script>
	export default{
		props:{
			 placeholder: String,
			 searchIconShow:{
				 type:Boolean,
				 default:true
			 },
			 paddingLeft:{
				 type:Boolean,
				 default:true
			 }
		}
		
	}
</script>

<style>
	.container {
	  display: flex;
	  align-items: center;
	  position: relative;
	}
	.bar {
	  flex: 1;
	  height: 68rpx;
	  font-size: 28rpx;
	  border-radius: 10rpx;
	  background-color: #f5f5f5;
	  
	}
	.bar-pl60{
		padding-left: 60rpx;
	}
	.bar-pl30{
		padding-left: 30rpx;
	}
	.find {
	  position: absolute;
	  top: 50%;
	  transform: translate(16rpx, -50%);
	  color: #9f9f9f;
	  font-size: 48rpx;
	}
</style>

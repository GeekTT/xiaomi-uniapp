<template>
	<view class="card">
		<view v-if="showhead" class="p-2 border-bottom main-border-color">
			<slot name="title">
				<text v-if="headTitle" class="font-md font-weight">{{headTitle}}</text>
			</slot>
		</view>
		<view class="">
			<image v-if="bodyCover" :src="bodyCover" mode="widthFix"></image>
			<slot></slot>
		</view>
	</view>
	
</template>

<script>
	export default{
			props:{
						bodyStyle:String,
						// 头部标题
						headTitle:String,
						// 封面图
						bodyCover:String,
						// 是否显示头部
						showhead:{
							type:Boolean,
							default:true
						},
						// 是否显示下边线
						headBorderBottom:{
							type:Boolean,
							default:true
						},
						// 标题是否加粗
						headTitleWeight:{
							type:Boolean,
							default:true
						},
						// 是否给body加padding
						bodyPadding:{
							type:Boolean,
							default:false
						},
						cardStyle:{
							type:String,
							default:""
						}
					},
	}
</script>

<style>
</style>

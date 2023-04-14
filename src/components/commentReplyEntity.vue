<template>
	<view class="wrap">
		<view class="left">
			<view class="photo">
				<image :src="data.avatarUrl"></image>
			</view>
		</view>
		<view class="right">
			<view class="name">
				<text class="nickname">{{data.nickname}}</text>
			</view>
			<view class="text">
				<text class="content">{{data.content}}</text>
				<text class="time">{{data.createtime.slice(0,10)}}</text>
			</view>
		</view>
		<br>
	</view>
</template>

<script>
	export default {
		methods: {},
		props: {
			data: {
				type: Object,
				default: {},
			},
		},
	};
</script>

<style lang="less" scoped>
.wrap {
	width: 100%;
	padding: 10rpx 0;
	min-height: 100rpx;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-wrap: nowrap;
	.left {
		width: 80rpx;
		height: 80rpx;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		.photo {
			display: flex;
			align-items: center;
			width: 60rpx;
			height: 60rpx;
			border-radius: 50%;
			overflow: hidden;
			image {
				width: 100%;
				height: 100%;
			}
		}
	}
	.right {
		width: calc(100% - 80rpx);
		min-height: 100rpx;
		padding: 10rpx 0;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		.name {
			height: 50rpx;
			width: 100%;
			.nickname {
				color: gray;
			}
		}
		.text {
			min-height: 50rpx;
			width: 100%;
			.content {
				margin-right: 20rpx;
			}
			.time {
				color: gray;
			}
		}
	}
}
</style>
<template>
	<view class="wrap">
		<view class="line">
			<view class="img">
				<!-- <image src="http://43.139.27.78/img/logo.png"></image> -->
				<view class="image"></view>
			</view>
			<view class="content">
				<view class="name">
					来自用户568197566034
				</view>
				<view class="word">
					就业迷茫，我需要做什么？
				</view>
			</view>
			<view class="count">
				共计x条回答
			</view>
		</view>
		<view class="line">
			<view class="img">
				<!-- <image src="http://43.139.27.78/img/logo.png"></image> -->
				<view class="image"></view>
			</view>
			<view class="content">
				<view class="name">
					来自用户568197566034
				</view>
				<view class="word">
					就业迷茫，我需要做什么？
				</view>
			</view>
			<view class="count">
				共计x条回答
			</view>
		</view>
		<view class="line">
			<view class="img">
				<!-- <image src="http://43.139.27.78/img/logo.png"></image> -->
				<view class="image"></view>
			</view>
			<view class="content">
				<view class="name">
					来自用户568197566034
				</view>
				<view class="word">
					就业迷茫，我需要做什么？
				</view>
			</view>
			<view class="count">
				共计x条回答
			</view>
		</view>
		<view class="more">
			更 多 >
		</view>
	</view>
</template>

<script>
	export default {};
</script>

<style lang="less" scoped>
.wrap {
	width: 100%;
	height: 280rpx;
	display: flex;
	align-content: center;
	justify-content: center;
	position: relative;
	flex-wrap: wrap;
	.line {
		height: 90rpx;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		.img {
			width: 90rpx;
			height: 90rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			.image {
				width: 50rpx;
				height: 50rpx;
				border-radius: 50%;
				background-color: gray;
			}
		}

		.content {
			width: 70%;
			height: 70rpx;
			.name {
				font-size: 18rpx;
				height: 25rpx;
				line-height: 25rpx;
				color: gray;
			}
			.word {
				font-size: 24rpx;
				height: 45rpx;
				font-weight: 700;
				line-height: 45rpx;
				color: rgb(108, 183, 160);
			}
		}

		.count {
			width: 20%;
			font-size: 18rpx;
			line-height: 60rpx;
			padding-top: 30rpx;
			color: gray;
		}
	}

	.more {
		position: absolute;
		right: 30rpx;
		top: 15rpx;
		font-size: 20rpx;
	}
}
</style>
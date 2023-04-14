<template>
	<view class="wrap">
		<view class="topwrap">
			<view class="jindutiao_wrap">
				<view class="jindutiao">
					<image class="gongzai" src="../../static/icon/公仔.png"></image>
				</view>
			</view>
			<view class="jindutiaoRight">
				<text class="percent">{{percent}}%</text>
			</view>
		</view>
		<view class="content">
			<view class="title">
				<text>我的轨迹</text>
			</view>
			<view class="img">
				<image src="../../static/icon/轨迹内图.jpg"></image>
				<text class="years_one">2025</text>
				<text class="years_two">2024</text>
				<navigator class="years_three" url="/pages/guiji/myDetail">2023</navigator>
				<text class="years_four">2022</text>
				<image class="up" src="../../static/icon/我的年规格（年份选择）.png"></image>
				<image class="down" src="../../static/icon/我的年规格（年份选择）.png"></image>
			</view>
		</view>
		<navigator class="bottom" url="/pages/guiji/yearPlan">
			<view class="text">我的年规划</view>
			<image src="../../static/icon/我的年规格（年份选择）.png"></image>
		</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				percent: 60,
			};
		},
		methods() {},
	};
</script>

<style lang="less" scoped>
.wrap {
	display: flex;
	justify-content: center;
	width: 100vw;
	flex-wrap: wrap;
	.topwrap {
		width: 90%;
		height: 70rpx;
		margin: 40rpx 0 20rpx 0;
		display: flex;
		.jindutiao_wrap {
			width: 85%;
			height: 70rpx;
			background-color: #fff;
			border-radius: 12px;
			.jindutiao {
				width: 60%;
				background-color: rgb(103, 184, 174);
				height: 100%;
				border-radius: 12px 0 0 12px;
				position: relative;
				.gongzai {
					position: absolute;
					float: right;
					right: -50rpx;
					top: -20rpx;
					width: 100rpx;
					height: 100rpx;
				}
			}
		}
		.jindutiaoRight {
			width: 15%;
			height: 100%;
			text-align: right;
			.percent {
				line-height: 70rpx;
				font-weight: 700;
				font-size: 32rpx;
			}
		}
	}

	.content {
		width: 90%;
		height: auto;
		background-color: #fff;
		border-radius: 12px;
		display: flex;
		flex-wrap: wrap;
		.title {
			height: 60rpx;
			width: 100%;
			text {
				font-weight: 600;
				font-size: 28rpx;
				line-height: 60rpx;
				margin: 0 0 0 30rpx;
				letter-spacing: 3rpx;
			}
		}
		.img {
			width: 100%;
			height: 0;
			padding-bottom: 153%;
			position: relative;
			image {
				width: 100%;
				height: 100%;
				position: absolute;
				object-fit: cover;
				border-radius: 0 0 12px 12px;
			}
			.years_one {
				z-index: 999;
				position: absolute;
				left: 45.4%;
				top: 2.7%;
				font-size: 18rpx;
				font-weight: 700;
				color: #fff;
			}
			.years_two {
				z-index: 999;
				position: absolute;
				left: 56.2%;
				top: 17.2%;
				font-size: 28rpx;
				font-weight: 700;
				color: #fff;
			}
			.years_three {
				z-index: 999;
				position: absolute;
				left: 58.8%;
				top: 43.2%;
				font-size: 40rpx;
				font-weight: 700;
				color: #000;
			}
			.years_four {
				z-index: 999;
				position: absolute;
				left: 51%;
				top: 80.3%;
				font-size: 50rpx;
				font-weight: 700;
				color: #fff;
			}
			.up {
				z-index: 999;
				position: absolute;
				left: 61%;
				top: 30%;
				width: 60rpx;
				height: 60rpx;
				transform: rotate(-90deg);
			}
			.down {
				z-index: 999;
				position: absolute;
				left: 61%;
				top: 56%;
				width: 60rpx;
				height: 60rpx;
				transform: rotate(90deg);
			}
		}
	}
	.bottom {
		height: 70rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		.text {
			font-size: 26rpx;
		}
		image {
			width: 26rpx;
			height: 26rpx;
			margin: 0 10rpx;
		}
	}
}
</style>

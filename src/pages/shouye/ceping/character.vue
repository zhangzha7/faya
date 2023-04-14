<template>
	<view class="wrap">
		<view class="contentWrap">
			<view class="numWrap">
				<text class="num">1/20</text>
			</view>
			<view class="content">
				<view class="question">
					<radio class="q" value="r1">我向来认为自己是个平静的、随和的人</radio><br>
					<radio class="q" value="r2">我向来认为自己是个严肃的、自律的人</radio>
				</view>

			</view>
		</view>
		<view class="btnWrap">
			<button class="up">上一题</button>
			<button class="down">下一题</button>
		</view>
	</view>
</template>

<script>
	export default {};
</script>

<style lang="less" scoped>
.wrap {
	width: 100vw;
	height: 100vh;

	.contentWrap {
		height: 75%;

		.numWrap {
			height: 200rpx;
			line-height: 200rpx;
			padding-top: 150rpx;
			text-align: center;
			width: 100%;
			.num {
				font-size: 50rpx;
				font-weight: 700;
			}
		}

		.content {
			height: calc(100% - 350rpx);
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
			.question {
				.q {
					margin-top: 60rpx;
					font-weight: 700;
				}
			}
		}
	}

	.btnWrap {
		height: 25%;

		.up {
			display: inline-block;
			width: 36%;
			margin: 0 6% 0 8%;
			border: 3px solid rgb(124, 160, 149);
			border-radius: 20rpx;
			background-color: rgb(177, 229, 213);
			font-weight: 700;
			color: rgb(124, 160, 149);
		}
		.down {
			display: inline-block;
			width: 36%;
			margin: 0 8% 0 6%;
			border: 3px solid white;
			border-radius: 20rpx;
			background-color: rgb(177, 229, 213);
			color: white;
			font-weight: 700;
		}
	}
}
</style>

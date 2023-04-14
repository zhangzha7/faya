<template>
	<view class="inner" @click="go">
		<image :src="info.image"></image>
		<view class="titleWrap">
			<text v-if="type==='zhaopin'" class="title">{{info.unit}}</text>
			<text v-else class="title">{{info.name}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			info: {
				typeof: Object,
				default: {},
			},
			type: {
				typeof: String,
				default: "",
			},
		},
		methods: {
			go() {
				switch (this.type) {
					case "bisai":
						uni.navigateTo({
							url:
								"/pages/shouye/tuijian/compDetail?option=" +
								JSON.stringify(this.info),
						});
						break;
					case "huodong":
						uni.navigateTo({
							url:
								"/pages/shouye/tuijian/actDetail?option=" +
								JSON.stringify(this.info),
						});
						break;
					case "kecheng":
						uni.navigateTo({
							url:
								"/pages/shouye/tuijian/courseDetail?option=" +
								JSON.stringify(this.info),
						});
						break;
					case "zhaopin":
						uni.navigateTo({
							url:
								"/pages/shouye/tuijian/offerDetail?option=" +
								JSON.stringify(this.info),
						});
						break;
				}
			},
		},
	};
</script>

<style lang="less" scoped>
.inner {
	// height: 300rpx;
	margin: 20rpx;
	width: 33.3vw;
	// aspect-ratio: 3 / 4;
	position: relative;
	padding-bottom: 100%;
	height: 0;
	border: solid 4px rgb(177, 229, 213);
	border-radius: 15px;
	box-shadow: rgb(204, 204, 204) 0px 3px 0px 3px;
	image {
		width: 100%;
		height: 100%;
		position: absolute;
		object-fit: cover;
		border-radius: 10px;
	}
	.titleWrap {
		position: absolute;
		bottom: 0;
		background-color: rgba(177, 229, 213, 0.5);
		width: 100%;
		height: 30%;
		.title {
			font-weight: 700;
			color: #fff;
		}
	}
}
</style>

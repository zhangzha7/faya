<template>
	<view class="wrap">
		<uni-nav-bar title="授权登录"></uni-nav-bar>
		<view class='about'>
			<view class='logo'>
				<image src='../../static/icon/fayalogo.png'></image>
				<view>发芽</view>
			</view>
		</view>

		<button class="login" open-type="getUserInfo" @click="getuserinfo">授权登录</button>
		<view class="zanbu" @click="back">暂不登录</view>
		<view class="foot">
			<!-- <navigator hover-class="none" class="xieyi">《用户协议》</navigator> -->
			<!-- <view class='copy'>{{about.name}}版权所有© {{about.recordNumber}}</view> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sessionId: "",
			};
		},
		onReady() {
			// 获取sessionId
			var that = this;
			uni.login({
				success(res) {
					console.log(res.errMsg);
					if (res.code) {
						console.log(res.code);
						uni.showLoading({
							title: "加载中",
						});
						//发起网络请求
						uni.request({
							url: `${that.base.url}/api/auth/sessionId/${res.code}`,
							method: "GET",
							success: (res) => {
								that.sessionId = res.data;
								uni.hideLoading();
							},
							fail: (res) => {
								uni.hideLoading();
								console.log(res);
								uni.showToast({
									title: "当前网络不佳",
									icon: "error",
									duration: 2000,
								});
								return;
							},
						});
					} else {
						console.log("登录失败！" + res.errMsg);
						uni.showToast({
							title: "当前网络不佳",
							icon: "error",
							duration: 2000,
						});
						return;
					}
				},
			});
		},
		methods: {
			back() {
				uni.switchTab({
					url: "/pages/shouye/index",
				});
			},
			// 登录操作
			getuserinfo(e) {
				uni.getUserProfile({
					desc: "获取你的昵称、头像、地区及性别",
					success: (res) => {
						uni.showLoading({
							title: "加载中",
						});
						// -----------打印请求参数-----------
						console.log(
							"encryptedData:" +
								res.encryptedData +
								" iv:" +
								res.iv +
								" sessionId:" +
								this.sessionId
						);
						// -----------打印请求参数-----------
						uni.request({
							method: "POST",
							data: {
								encryptedData: res.encryptedData,
								iv: res.iv,
								sessionId: this.sessionId,
							},
							url: `${this.base.url}/api/auth/wxLogin`,
							success: (res) => {
								console.log(res.errMsg);
								console.log(res);
								if (res.data.code === 0) {
									uni.hideLoading();
									// uni.setStorageSync('userId', res.data)
									uni.setStorage({
										key: "userInfo",
										data: res.data,
										success: function () {
											console.log(
												"success setStorage:userInfo"
											);
										},
									});
									uni.switchTab({
										url: "/pages/shouye/index",
									});
								} else {
									uni.hideLoading();
									uni.showToast({
										title: "网络请求失败",
										icon: "error",
										duration: 2000,
									});
									console.log(this.sessionId);
									return;
								}
							},
							fail: (res) => {
								uni.hideLoading();
								console.log(res);
								uni.showToast({
									title: "当前网络不佳",
									icon: "error",
									duration: 2000,
								});
								return;
							},
						});
					},
					fail: (res) => {
						console.log(res);
						//拒绝授权
						uni.showToast({
							title: "您拒绝了请求,不能正常使用小程序",
							icon: "error",
							duration: 2000,
						});
						return;
					},
				});
			},
		},
	};
</script>

<style lang="less" scoped>
.about {
	padding: 240rpx 40rpx 0;
}

.about .logo image {
	display: block;
	width: 180rpx;
	height: 180rpx;
	margin: 0 auto 35rpx;
	border-radius: 30rpx;
}

.logo {
	text-align: center;
}

.about .logo view {
	font-size: 36rpx;
	color: #333;
}

.foot {
	position: fixed;
	left: 0;
	right: 0;
	text-align: center;
	bottom: 40rpx;
}

.login {
	width: 600rpx !important;
	height: 86rpx !important;
	line-height: 86rpx !important;
	background: #05c160 !important;
	font-size: 32rpx;
	border-radius: 6rpx !important;
	color: #fff;
	margin: 0 auto !important;
	position: fixed;
	left: 50%;
	transform: translateX(-50%);
	bottom: 514rpx;
}

.zanbu {
	font-size: 32rpx;
	color: #999999;
	/* margin: 45rpx 0 80rpx; */
	position: fixed;
	left: 50%;
	transform: translateX(-50%);
	bottom: 436rpx;
}

.xieyi {
	font-size: 24rpx;
	/* color: var(--mina) !important; */
	margin-bottom: 15rpx;
}

.copy {
	font-size: 24rpx;
	color: #9b9b9b;
}
</style>



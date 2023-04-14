<template>
  <view class="wrap">
    <view class="top">
      <view class="top_title">
        <text>测评反馈报告</text>
      </view>
      <image src="http://43.139.27.78/img/ceping1.jpg"></image>
    </view>
    <view class="bottom">
      <view class="bottom_title">
        <text class="black">性格报告</text>
        <text class="gray">兴趣报告</text>
        <text class="gray">行业认知报告</text>
        <text class="gray">专业认知报告</text>
      </view>
      <image src="http://43.139.27.78/img/ceping2.jpg"></image>
      <view class="more">
        <view class="img_wrap">
          <image src="../../../static/icon/测评报告（下滑查看更多）.png"></image>
        </view>
        <text>下滑查看更多</text>
      </view>
    </view>
    <navigator class="btn" url="/pages/shouye/ceping/guide1">
      重新测评
    </navigator>
  </view>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.wrap{
  width: 100vw;
  height: 100vh;
  .top{
    width: 90%;
    height: 440rpx;
    margin: 50rpx 5% 30rpx 5%;
    background-color: #fff;
    border-radius: 20rpx;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    .top_title{
      width: 100%;
      height: 43rpx;
      text{
        font-weight: 700;
        font-size: 28rpx;
        line-height: 43rpx;
        margin-left: 40rpx;
      }
    }
    image{
      width: 600rpx;
      height: 357rpx;
    }
  }
  .bottom{
    width: 90%;
    height: 640rpx;
    margin: 60rpx 5% 20rpx 5%;
    background-color: #fff;
    border-radius: 20rpx;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    .bottom_title{
      width: 100%;
      height: 54rpx;
      display: flex;
      justify-content: center;
      margin-top: 20rpx;
      .black{
        font-weight: 700;
        font-size: 28rpx;
        line-height: 54rpx;
        margin: 0 10rpx;
      }
      .gray{
        font-weight: 700;
        font-size: 28rpx;
        line-height: 54rpx;
        color: gray;
        margin: 0 10rpx;
      }
    }
    image{
      width: 640rpx;
      height: 446rpx;
    }
    .more{
      height: 120rpx;
      width: 100%;
      background-color: rgb(229,229,229);
      border-radius: 0 0 20rpx 20rpx;
      display: flex;
      align-content: center;
      justify-content: center;
      flex-wrap: wrap;
      .img_wrap{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 65rpx;
        image{
          width: 50rpx;
          height: 50rpx;
        }
      }
      text{
        font-size: 18rpx;
        line-height: 20rpx;
      }
    }
  }
  .btn{
    width: 90%;
    height: 60rpx;
    margin: 50rpx 5% 0 5%;
    background-color: #fff;
    border-radius: 20rpx;
    font-size: 26rpx;
    text-align: center;
    line-height: 60rpx;
    background-color:rgb(215,242,233);
    font-weight: 700;
  }
}
</style>
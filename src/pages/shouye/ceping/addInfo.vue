<template>
  <view class="wrap">
    <view class="content">
      <view class="info">
        <view class="infoTitleView">
          <text class="title">111完善信息111</text>
        </view>
        <view class="infoView">
          <text class="label">姓名</text>
          <input type="text" name="name" id="name" class="inputInfo" placeholder="点击输入">
        </view>
        <view class="infoView">
          <text class="label">学校</text>
          <input type="text" name="school" id="school" class="inputInfo" placeholder="点击输入">
        </view>
        <view class="infoView">
          <text class="label">专业</text>
          <input type="text" name="major" id="major" class="inputInfo" placeholder="点击输入">
        </view>
        <view class="infoView">
          <text class="label">年级</text>
          <input type="text" name="grade" id="grade" class="inputInfo" placeholder="点击输入">
        </view>
      </view>
      <view class="btnWrap">
        <view class="btn" @click="go">
          <text class="bigText">自我探索</text>
          <text class="smallText">点击进入</text>
        </view>
      </view>

    </view>
  </view>
</template>

<script>
export default {
  methods:{
    go(){
      uni.redirectTo({
        url:"/pages/shouye/ceping/goToCharacter"
      });
    }
  }
}
</script>

<style lang="less" scoped>
  .wrap{
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .content{
      width: 90%;
      height: 80%;
      background-color: #fff;
      border-radius:60rpx;
      display: flex;
      align-content: center;
      justify-content: center;
      flex-wrap: wrap;
      .info{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        width: 100%;
        .infoTitleView{
          margin: 20rpx 10%;
          height: 100rpx;
          width: 80%;
          text-align: center;
          border-radius: 20rpx;
          text{
            font-size: 44rpx;
            font-weight: 700;
            line-height: 100rpx;
          }
        }
        .infoView{
          margin: 20rpx 10%;
          height: 100rpx;
          width: 80%;
          background-color: rgb(177,229,213);
          border-radius: 20rpx;
          display: flex;
          flex-wrap: nowrap;
          align-items: center;
          justify-content: center;
          .label{
            line-height: 100rpx;
            font-size: 40rpx;
            font-weight: 700;
            padding: 0 20rpx;
          }
          .inputInfo{
            background-color: rgb(216, 242, 234);
            border-radius: 10rpx;
            height: 65%;
            padding: 5rpx 20rpx;
            margin: 0 20rpx;
          }
        }
      }
      .btnWrap{
        width: 100%;
        height: 200rpx;
        padding: 40rpx 0;
        display: flex;
        align-items: center;
        justify-content: center;
        .btn{
          width: 400rpx;
          height: 160rpx;
          background-color: rgb(177,229,213);
          display: flex;
          align-content: center;
          justify-content: center;
          flex-wrap: wrap;
          text-align: center;
          border-radius: 20rpx;

          .bigText{
            font-size: 40rpx;
            font-weight: 700;
            width: 100%;
          }
          .smallText{
            font-size: 26rpx;
            color: rgb(124,160,149);
            width: 100%;
            margin-top: 20rpx;
          }
        }
      }
    }
  }
</style>
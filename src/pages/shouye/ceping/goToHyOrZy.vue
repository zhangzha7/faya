<template>
  <view class="wrap">
    <view class="content">
      <view class="question">
        <image src="../../../static/icon/对话框.png"></image>
        <text>我了解什么？</text>
      </view>
      <view class="answer_wrap">
        <view class="answer" @click="goZY">
          <text>专业认知测试</text>
        </view>
        <view class="answer" @click="goHY">
          <text>行业认知测试</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  methods:{
    goZY(){
      uni.redirectTo({
        url:"/pages/shouye/ceping/chooseZY"
      });
    },
    goHY(){
      uni.redirectTo({
        url:"/pages/shouye/ceping/chooseHY"
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
      width: 100%;
      height: 80%;
      background-color: #fff;
      border-radius:60rpx;
      .question{
        width: 100%;
        height: 50%;
        position: relative;
        image{
          position: absolute;
          width: 400rpx;
          height: 200rpx;
          left: 0;
          top: 50%;
          transform:translateY(-50%);
        }
        text{
          position: absolute;
          left: 102rpx;
          top: 50%;
          transform:translateY(-50%);
          font-weight: 700;
          font-size: 48rpx;
        }
      }
      .answer_wrap{
        width: 100%;
        height: 50%;
        text-align: center;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        align-content:flex-start;
        .answer{
          background-color: rgb(177,229,213);
          border-radius: 30rpx;
          width: 450rpx;
          height: 150rpx;
          margin: 0 0 60rpx 0;

          text{
            line-height: 150rpx;
            font-weight: 700;
            font-size: 42rpx;
          }
        }
      }
    }
  }
</style>
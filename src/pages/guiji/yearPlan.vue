<template>
  <view class="wrap">
    <view class="main">
      <view class="top">
        <text class="title">我的年规划</text>
        <view class="year">
          <text>2023</text>
          <image src="../../static/icon/测评报告（下滑查看更多）.png"></image>
        </view>
      </view>
      <view class="content">
        <month></month>
        <month></month>
        <month></month>
        <month></month>
      </view>
    </view>
    <view class="more">
      <image src="../../static/icon/测评报告（下滑查看更多）.png"></image>
      <text>下滑更多</text>
    </view>
  </view>
</template>

<script>
import month from '../../components/guiji_yearPlan_month.vue'
export default {
 components:{
   month
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
  .main{
    margin: 5%;
    width: 90%;
    height: 90%;
    background-color: #fff;
    border-radius: 25rpx;
    display: flex;
    align-content: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    
    .top{
      width: 100%;
      height: 100rpx;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 2rpx solid gray;
      .title{
        font-size: 34rpx;
        font-weight: 700;
        line-height: 100%;
        margin: 0 30rpx;
      }
      .year{
        margin: 0 30rpx;
        text{
          font-size: 34rpx;
          font-weight: 700;
          line-height: 100%;
          
        }
        image{
          width: 26rpx;
          height: 26rpx;
          margin: 0 0 0 10rpx;
        }
      }
    }
    .content{
      width: 100%;
      height: calc(100% - 100rpx);
      overflow-y: scroll;
    }
  }
  .more{
    width: 100rpx;
    height: 100rpx;
    position: absolute;
    bottom: 20rpx;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
    image{
      width: 30rpx;
      height: 30rpx;
      margin-bottom: 5rpx;
    }
    text{
      font-size: 20rpx;
      color:gray
    }
  }
}
</style>
<template>
  <view class="wrap">
    <view class="timeWrap">
      <view class="title">
        <text>时间表</text>
      </view>
      <view class="content">
        <view class="chooseTime">

        </view>
        <view class="chooseTime">
          
        </view>
        <view class="chooseTime">
          
        </view>
        <view class="chooseTime">
          
        </view>
      </view>
    </view>
    <view class="jindutiao_wrap">
      <view class="jindutiao">
        <image class="gongzai" src="../../static/icon/公仔.png"></image>
      </view>
    </view>
    <view class="toDo">
      <view class="title">
        <text>我的待办</text>
        <view class="more">
          <text class="moreText">更多</text>
          <image src="../../static/icon/箭头.png"></image>
        </view>
      </view>
      <view class="content">
        
      </view>
    </view>
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
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  .timeWrap{
    width: 90%;
    height: 35%;
    margin: 20rpx 5%;
    background-color: #fff;
    border-radius: 20rpx;
    .title{
      width: 100%;
      height: 60rpx;
      text{
        font-size: 26rpx;
        font-weight: 800;
        padding: 0 30rpx;
        line-height: 60rpx;
      }
    }
    .content{
      width: 100%;
      height: calc(100% - 60rpx);
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-wrap: nowrap;
      .chooseTime{
        background-color: rgb(177,229,213);
        width: 18%;
        height: 90%;
        border-radius: 20rpx;
      }
    }
  }
  .jindutiao_wrap{
    margin: 2% 0;
    width: 90%;
    height: 70rpx;
    background-color: #fff;
    border-radius: 12px;
    .jindutiao{
      width:60%;
      background-color:rgb(103,184,174);
      height:100%;
      border-radius: 12px 0 0 12px;
      position: relative;
      .gongzai{
        position: absolute;
        float: right;
        right:-50rpx;
        top:-20rpx;
        width: 100rpx;
        height: 100rpx;
      }
    }
  }
  .toDo{
    width: 90%;
    height: 45%;
    margin: 20rpx 5%;
    background-color: #fff;
    border-radius: 20rpx;
    .title{
      width: 100%;
      height: 60rpx;
      display: flex;
      align-items: center;
      justify-content: space-between;
      text{
        font-size: 26rpx;
        font-weight: 800;
        padding: 0 30rpx;
        line-height: 60rpx;
      }
      .more{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 30rpx;
        .moreText{
          font-size: 20rpx;
          color: gray;
          padding: 0 10rpx;
        }
        image{
          width: 16rpx;
          height: 16rpx;
        }
      }
    }
    .content{
      width: 100%;
      height: calc(100% - 60rpx);
    }
  }
}
</style>
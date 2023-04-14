<template>
  <view class="wrap">
    <view class="left">
      <view class="photo">
        <image :src="data.commentEntity.avatarUrl"></image>
      </view>
    </view>
    <view class="right">
      <view class="name">
        <text class="nickname">{{data.commentEntity.nickname}}</text>
      </view>
      <view class="text">
        <text class="content">{{data.commentEntity.content}}</text>
        <text class="time">{{data.commentEntity.createtime.slice(0,10)}}</text>
      </view>
      <reply style="width:100%" v-show="data.commentReplyEntity.commentId===data.commentEntity.id" :data="data.commentReplyEntity"></reply>
    </view>
  </view>
</template>

<script>
import reply from './commentReplyEntity.vue'
export default {
  methods:{
    
  },
  props:{
    data:{
      type:Object,
      default:{}
    }
  },
  components:{
    reply
  }
}
</script>

<style lang="less" scoped>
.wrap{
  width: calc(100vw - 20rpx);
  padding: 10rpx 20rpx;
  min-height: 120rpx;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: nowrap;
  border-bottom: 1rpx solid gray;
  .left{
    width: 120rpx;
    height: 120rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    .photo{
      display: flex;
      align-items: center;
      width: 80rpx;
      height: 80rpx;
      border-radius: 50%;
      overflow: hidden;
      image{
        width: 100%;
        height: 100%;
      }
    }
  }
  .right{
    width: calc(100% - 120rpx);
    min-height: 100rpx;
    padding:10rpx 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    .name{
      height: 50rpx;
      width: 100%;
      .nickname{
        color:gray;
      }
    }
    .text{
      min-height: 50rpx;
      width: 100%;
      .content{
        margin-right: 20rpx;
      }
      .time{
        color:gray
      }
    }
  }
}
</style>
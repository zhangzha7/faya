<template>
  <view class="nav">
    <view class="input">
      <input type="text" placeholder="说点什么吧~">
    </view>
    <view class="icon">
      <view class="iconWrap" @click="likeClick">
        <view class="imgWrap">
          <image v-if="operateLike" src="../../../static/icon/发芽图标（点赞）_画板 1.png"></image>
          <image v-else src="../../../static/icon/评论区点赞前.png"></image>
        </view>
        <text class="count">{{like}}</text>
      </view>
      <view class="iconWrap" @click="collectClick">
        <view class="imgWrap">
          <image v-if="operateCollect" src='../../../static/icon/发芽图标（收藏）_画板 1.png'></image>
          <image v-else src='../../../static/icon/评论区收藏前.png'></image>
        </view>
        <text class="count">{{collect}}</text>
      </view>
      <view class="iconWrap" @click="commentClick">
        <view class="imgWrap">
          <image src='../../../static/icon/发芽图标（评论）_画板 1.png'></image>
        </view>
        <text class="count">{{comment}}</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data(){
    return{
      operateLike:false,
      operateCollect:false
    }
  },
  props:{
    like:{
      typeof:Number,
      default:0
    },
    collect:{
      typeof:Number,
      default:0
    },
    comment:{
      typeof:Number,
      default:0
    }
  },
  methods:{
    likeClick(){
      
      this.$emit('likeChange',this.operateLike)
      if(this.operateLike===false){
        this.operateLike=true
      }else{
        this.operateLike=false
      }
      
    },
    collectClick(){
      this.$emit('collectChange',this.operateCollect)
      if(this.operateCollect===false){
        this.operateCollect=true
      }else{
        this.operateCollect=false
      }
    },
    commentClick(){
      console.log('like')
    }
  }
}
</script>

<style lang="less" scoped>
.nav{
    // position: absolute;
    position: fixed;
    z-index: 999;
    background-color: #fff;
    bottom: 0;
    height: 100rpx;
    border-top: 3rpx lightgray solid;
    width: calc(100% - 20rpx);
    padding: 10rpx;
    display: flex;
    align-items:flex-start;
    justify-content: center;
    flex-wrap: nowrap;
    .input{
      width: 45%;
      margin-right: 10rpx;
      height: 60rpx;
      border-radius: 30rpx;
      background-color: rgb(246, 246, 246);
      input{
        width: 90%;
        height: 100%;
        margin: 0 5%;
      }
    }
    .icon{
      width: 55%;
      min-width: 240rpx;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: nowrap;
      .iconWrap{
        width: 33%;
        height: 60rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: nowrap;
        .imgWrap{
          height: 60rpx;
          width: 60rpx;
          display: flex;
          align-items: center;
          margin-right: 3rpx;
          image{
            height: 100%;
          }
          .count{
            line-height: 60rpx;
          }
        }
      }
      
    }
  }
</style>
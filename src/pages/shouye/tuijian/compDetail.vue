<template>
  <view class="wrap">
    <view class="top">
      <view class="videoWrap"></view>
    </view>
    <view class="bottom">
      <text class="title">比赛名称</text>
      <view class="content">
        <text class="contentText">{{info.name}}</text>
      </view>
      <text class="title">比赛时间</text>
      <view class="content">
        <text class="contentText">{{info.startTime}}-----{{info.endTime}}</text>
      </view>
      <text class="title">比赛简介</text>
      <view class="content">
        <text class="contentText">{{info.name}}</text>
      </view>
      <text class="title">比赛介绍</text>
      <view class="content">
        <text class="contentText">{{info.name}}</text>
      </view>
      
      <view class="comment">
        <view class="br"></view>
        <comments v-for="item in comments" :key="item" :data="item"></comments>
        <view class="end">
          <text>- THE END -</text>
        </view>
      </view>

      <navv :like="info.likeCnt" :collect="info.collectCnt" :comment="info.commentCnt" @likeChange='likeChangeFunction' @collectChange='collectChangeFunction'></navv>
      
    </view>
  </view>
</template>

<script>
import navv from '../../../components/tuijianDetailNav.vue'
import comments from '../../../components/comments.vue'
export default {
  onLoad(key){
    this.info=JSON.parse(key.option)
    this.getComments()
    var that=this
    uni.getStorage({
      key: 'userInfo',
      success: function (res) {
        that.openId=res.data.data.memberEntity.openId
      },
      fail: function (res) {
      }
    });
  },
  data(){
    return{
      info:{},
      openId:'',
      comments:[]
    }
  },
  components:{
    navv,
    comments
  },
  methods:{
    // 点赞的方法
    likeChangeFunction(operateLike){
      if(operateLike===false){
        // 点赞
        uni.showLoading({
          title:"加载中"
        })
        uni.request({
          url: `${this.base.url}/api/home/competition/giveCompALike`,
          method:'POST',
          data:{
            uid:this.openId,
            itemId:this.info.id
          },
          success:res=>{
            console.log(res)
            // ----------------------点赞以后要怎么处理逻辑？？？？？？？？？？----------------------
            uni.hideLoading();
          },
          fail:res=>{
            uni.hideLoading();
            console.log(res)
            uni.showToast({
              title: '点赞失败',
              icon: 'error',
              duration: 2000
            });
            return;
          }
        })
        console.log('点了个赞')
      }else{
        // 取消点赞
        uni.showLoading({
          title:"加载中"
        })
        uni.request({
          url: `${this.base.url}/api/home/competition/cancelCompALike`,
          method:'POST',
          data:{
            uid:this.openId,
            itemId:this.info.id
          },
          success:res=>{
            console.log(res)
            // ----------------------点赞以后要怎么处理逻辑？？？？？？？？？？----------------------
            uni.hideLoading();
          },
          fail:res=>{
            uni.hideLoading();
            console.log(res)
            uni.showToast({
              title: '操作失败',
              icon: 'error',
              duration: 2000
            });
            return;
          }
        })
        console.log('取消了点赞')
      }
    },
    // 收藏的方法
    collectChangeFunction(operateCollect){
      if(operateCollect===false){
        // 收藏
        uni.showLoading({
          title:"加载中"
        })
        uni.request({
          url: `${this.base.url}/api/home/competition/collectComp`,
          method:'POST',
          data:{
            uid:this.openId,
            itemId:this.info.id
          },
          success:res=>{
            console.log(res)
            // ----------------------收藏以后要怎么处理逻辑？？？？？？？？？？----------------------
            uni.hideLoading();
          },
          fail:res=>{
            uni.hideLoading();
            console.log(res)
            uni.showToast({
              title: '收藏失败',
              icon: 'error',
              duration: 2000
            });
            return;
          }
        })
        console.log('已收藏')
      }else{
        // 取消收藏
        uni.showLoading({
          title:"加载中"
        })
        uni.request({
          url: `${this.base.url}/api/home/competition/cancelCompCollect`,
          method:'POST',
          data:{
            uid:this.openId,
            itemId:this.info.id
          },
          success:res=>{
            console.log(res)
            // ----------------------取消收藏以后要怎么处理逻辑？？？？？？？？？？----------------------
            uni.hideLoading();
          },
          fail:res=>{
            uni.hideLoading();
            console.log(res)
            uni.showToast({
              title: '取消收藏失败',
              icon: 'error',
              duration: 2000
            });
            return;
          }
        })
        console.log('已取消收藏')
      }
    },
    // 获取评论
    getComments(){
      uni.request({
        url: `${this.base.url}/api/home/socialContact/listAnswerComments`,
        method:'GET',
        data:{
          type:0,
          itemId:this.info.id
        },
        success:res=>{
          this.comments=res.data.data
          console.log(this.comments)
        },
        fail:res=>{
          console.log(res)
          uni.showToast({
            title: '评论获取失败',
            icon: 'error',
            duration: 2000
          });
          return;
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.wrap{
  height: 100vh;
  width: 100vw;
  // position: relative;
  .top{
    height: 30%;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    .videoWrap{
      width: 320px;
      height: 180px;
      border: 10rpx white solid;
      border-radius: 20rpx;
      box-shadow: rgb(142,183,170) 0px 6px 0px 0px;
    }
  }
  .bottom{
    min-Height: 70%;
    width: 100vw;
    background-color: #fff;
    border-radius: 50rpx 50rpx 0 0 ;
    .title{
      font-size: 32rpx;
      font-weight: 700;
      margin:0 0 0 10%;
      line-height: 80rpx;
    }
    .content{
      width: 75%;
      border:6px rgb(177, 229, 213) solid;
      border-radius: 20rpx;
      margin: 0 auto;
      padding: 10rpx 20rpx;
      .contentText{
        line-height: 50rpx;
      }
    }
  }

  .comment{
    padding: 20rpx 0 100rpx 0;
    .br{
      background-color: lightgray;
      width: 100%;
      height: 3rpx;
      margin: 20rpx 0;
    }
    .end{
      width: 100%;
      height: 130rpx;
      display: flex;
      align-items: center;
      justify-content: center;
      text{
        font-size: 30rpx;
        color: gray;
      }
    }
  }

  
}
</style>
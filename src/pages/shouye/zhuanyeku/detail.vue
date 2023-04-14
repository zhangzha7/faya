<template>
  <view class="wrap">
    <view class="top">
      <text class="title">{{info.majorName}}</text>
    </view>
    <view class="content">
      <view class="box flexBox">
        <view class="left">
          <view>
            <text class="label yellow">专业代码：</text>
            <text>{{info.majorCode}}</text>
          </view>
          <view class="line">
            <text class="label green">专业类别：</text>
            <text>{{className}}</text>
          </view>
          <view class="line">
            <text class="label purple">学历层次：</text>
            <text>{{info.eduLevel}}</text>
          </view>
          <view class="line">
            <text class="label blue">授予学位：</text>
            <text>{{info.awardDegree}}</text>
          </view>
        </view>
        <view class="right">
          <image src="../../../static/icon/公仔.png"></image>
        </view>
      </view>
      <view class="box">
        <text class="label">简介：</text>
        <text class="text">{{info.briefIntro}}</text>
      </view>
      <view class="box">
        <text class="label">主干课程：</text>
        <view class="jobVosWrap">
          <text class="jobVos" v-for="item in info.courseVos" :key="item.id">{{item.name}}</text>
        </view>
      </view>
      <view class="box">
        <text class="label">培养目标：</text>
        <text class="text">{{info.majorObject}}</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data(){
    return{
      title:'',
      info:{},
      className:''
    }
  },
  onLoad(key){
    console.log(key.option)
    this.req(key.option)
    this.className=key.className
  },
  methods:{
    req(itemId){
      uni.showLoading({
        title:"加载中"
      })
      uni.request({
        url: `${this.base.url}/api/home/majoritem/getMajorItem`,
        method:'GET',
        data:{
          itemId:itemId
        },
        success:res=>{
          this.info=res.data.data
          uni.hideLoading();
        },
        fail:res=>{
          uni.hideLoading();
          console.log(res)
          uni.showToast({
            title: '当前网络不佳',
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
   width: 100vw;
   height: 100vh;
   .top{
     width: 100%;
     height: 100rpx;
     background-color: #F8F8F8;
     text-align: center;
    text{
      line-height: 100rpx;
      font-size: 36rpx;
      font-weight: 700;
    }
   }
   .content{
     width: 100%;
     display: flex;
     align-items:flex-start;
     justify-content: center;
     flex-wrap: wrap;
     margin-top: 20rpx;
     .flexBox{
       display: flex;
       align-items: center;
       justify-content: flex-start;
     }
     .box{
       background-color: #fff;
       width: 90%;
       margin: 0 5% 20rpx 5%;
       border-radius: 20rpx;
       padding: 30rpx;
       .left{
         width: 60%;
         .line{
           margin-top: 20rpx;
         }
       }
       .right{
         width:30%;
         height:0;
         padding-bottom:30%;
         position:relative;
         image{
           width:100%;
           height:100%;
           position:absolute;
           object-fit:cover;
           
         }
       }
       .label{
         color: rgb(55,120,133);
         font-weight: 700;
         font-size: 30rpx;
       }
       .yellow{
         color: rgb(234,145,84);
       }
       .green{
         color: rgb(103,184,174);
       }
       .purple{
         color: rgb(174,103,186);
       }
       .blue{
         color: rgb(99,160,193);
       }
       .jobVosWrap{
         width: 100%;
         margin-top: 20rpx;
         .jobVos{
           margin: 0 20rpx 0 0;
         }
       }
       .text{
         display: block;
         margin-top: 20rpx;
       }
     }
   }
 }
</style>
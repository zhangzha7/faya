<template>
  <view class="wrap">
    <view class="top">
      <text class="title">{{info.name}}</text>
    </view>
    <view class="content">
      <view class="box">
        <text class="label">薪资预估：</text>
        <text class="moneyText">{{info.salayFore}}/月</text>
      </view>
      <view class="box">
        <text class="label">代表岗位：</text>
        <view class="jobVosWrap">
          <text class="jobVos" v-for="item in info.jobVos" :key="item.id">{{item.name}}</text>
        </view>
      </view>
      <view class="box">
        <text class="label">工作内容：</text>
        <text class="text">{{info.workContent}}</text>
      </view>
      <view class="box">
        <text class="label">专业要求：</text>
        <text class="text">{{info.majorReq}}</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data(){
    return{
      title:'',
      info:{}
    }
  },
  onLoad(key){
    console.log(key.option)
    this.req(key.option)

  },
  methods:{
    req(itemId){
      uni.showLoading({
        title:"加载中"
      })
      uni.request({
        url: `${this.base.url}/api/home/careeritem/getCareerItem`,
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
     .box{
       background-color: #fff;
       width: 90%;
       margin: 0 5% 20rpx 5%;
       border-radius: 20rpx;
       padding: 30rpx;
       .label{
         color: rgb(55,120,133);
         font-weight: 700;
         font-size: 30rpx;
        //  line-height: 80rpx;
        //  margin: 0 30rpx;
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
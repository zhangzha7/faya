<template>
  <view class="wrap">
    <view class="check">
      <text class="check_text" :class="{check_check:activeKey=='bisai'}" @click="change('bisai')">比赛</text>
      <text class="check_no">|</text>
      <text class="check_text" :class="{check_check:activeKey=='huodong'}" @click="change('huodong')">活动</text>
      <text class="check_no">|</text>
      <text class="check_text" :class="{check_check:activeKey=='kecheng'}" @click="change('kecheng')">课程</text>
      <text class="check_no">|</text>
      <text class="check_text" :class="{check_check:activeKey=='zhaopin'}" @click="change('zhaopin')">招聘</text>
    </view>
    <view class="wrap_small">
      <view class="wrap_bottom">
        <sm v-for="item in info" :key="item.id" :type="activeKey" :info="item"></sm>
      </view>
    </view>
  </view>
</template>

<script>
import sm from './small_shouye_tuijian.vue'
export default {
  mounted() {
    try {
      const value = uni.getStorageSync('userInfo');
      if (value) {
        this.openId=value.data.memberEntity.openId
        // this.reqComp(this.openId)
      }
    } catch (e) {
      console.log('fail to request tuijian')
    }
	},
  data(){
    return{
      activeKey:'bisai',
      info:[],
      openId:''
    }
  },
  methods:{
    change(key){
      this.activeKey=key
    },
    reqComp(openId){
      uni.showLoading({
        title:"加载中"
      })
      uni.request({
        url: `${this.base.url}/api/home/like/recommendComp`,
        method:'GET',
        data:{
          uid:openId,
          cnt:6
        },
        success:res=>{
          this.info=res.data.data
          uni.hideLoading();
          console.log(this.info)
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
    },
    reqAct(openId){
      uni.showLoading({
        title:"加载中"
      })
      uni.request({
        url: `${this.base.url}/api/home/like/recommendAct`,
        method:'GET',
        data:{
          uid:openId,
          cnt:6
        },
        success:res=>{
          this.info=res.data.data
          uni.hideLoading();
          console.log(this.info)
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
    },
    reqCourse(openId){
      uni.showLoading({
        title:"加载中"
      })
      uni.request({
        url: `${this.base.url}/api/home/like/recommendCourse`,
        method:'GET',
        data:{
          uid:openId,
          cnt:6
        },
        success:res=>{
          this.info=res.data.data
          uni.hideLoading();
          console.log(this.info)
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
    },
    reqOffer(openId){
      uni.showLoading({
        title:"加载中"
      })
      uni.request({
        url: `${this.base.url}/api/home/like/recommendOffer`,
        method:'GET',
        data:{
          uid:openId,
          cnt:6
        },
        success:res=>{
          this.info=res.data.data
          uni.hideLoading();
          console.log(this.info)
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
  },
  watch:{
    activeKey:{
      handler(newVal){
        if(newVal==='bisai'){
          this.reqComp(this.openId)
        }else if(newVal==='huodong'){
          this.reqAct(this.openId)
        }else if(newVal==='zhaopin'){
          this.reqOffer(this.openId)
        }else if(newVal==='kecheng'){
          this.reqCourse(this.openId)
        }
      },
      immediate:true
    }
  },
  components:{
    sm
  }
}
</script>

<style lang="less" scoped>
.wrap{
  width: 90vw;
  min-height: 280rpx;
  background-color: #fff;
  margin: 20rpx 0 20rpx 0;
  border-radius: 15px;
  .check{
    text-align: center;
    padding: 30rpx 0 30rpx 0;
    .check_check{
      color:black !important
    }
    .check_text{
      width: 18vw;
      display: inline-block;
      text-align: center;
      font-size: 28rpx;
      color:gray;
    }
    .check_no{
      font-size: 28rpx;
      color:gray;
    }
  }

  .wrap_small{
    width: calc(100% - 60rpx);
    padding: 0 30rpx 30rpx 30rpx;
    .wrap_bottom{
      display: flex;
      justify-content:flex-start;
      flex-wrap: wrap;
    }
  }
}
</style>
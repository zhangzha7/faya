<template>
  <view class="wrap">
    <view class="side">
      <ul>
        <li class="liTop">{{active}}</li>
        <li :class="{current:flag==item.id,liInfo}" v-for="item in hangye" :key="item.id" @click="changeActive(item)">{{item.name}}</li>
        <li class="liBottom"><image src="../../../static/icon/箭头.png"></image></li>
      </ul>
    </view>
    <view class="content">
      <view class="top">
        <view class="search">
          <image src="../../../static/icon/发芽图标（搜索）_画板 1.png"></image>
          <input type="text">
        </view>
      </view>
      <view class="bottom">
        <view class="bumen_wrap">
          <view class="bumen" v-for="item in bm" :key="item.itemId" @click="go(item.itemId)">{{item.itemName}}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  onLoad(key){
    console.log(JSON.parse(key.option))
    this.reqXueke(JSON.parse(key.option).careerSn)
    this.flag=JSON.parse(key.option).id
    this.active=JSON.parse(key.option).name
    this.getCareerItemVo(JSON.parse(key.option).depSn)
  },
  data(){
    return{
      active:'',
      current:'current',
      flag:1,
      liInfo:'liInfo',
      hangye:[],
      bm:[]
    }
  },
  methods:{
    go(itemId){
      uni.navigateTo({
        url:"/pages/shouye/hangyeku/detail?option="+itemId
      })
    },
    changeActive(item){
      this.getCareerItemVo(item.depSn)
      this.active=item.name
      this.flag=item.id
    },
    reqXueke(careerSn){
      uni.showLoading({
        title:"加载中"
      })
      uni.request({
        url: `${this.base.url}/api/home/career/getCareerDep`,
        method:'GET',
        data:{
          careerSn:careerSn
        },
        success:res=>{
          this.hangye=res.data.data
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
    },
    getCareerItemVo(depSn){
      uni.showLoading({
        title:"加载中"
      })
      uni.request({
        url: `${this.base.url}/api/home/careerdep/getCareerItemVo`,
        method:'GET',
        data:{
          depSn:depSn
        },
        success:res=>{
          console.log(res.data.data)
          this.bm=res.data.data
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
  display: flex;
  .side{
    width: 30%;
    height: 100%;
    ul{
      margin: 30rpx 0 0 15%;
      width: 85%;
      height: auto;
      border-radius: 20rpx;
      background-color: rgb(216,242,234);
      text-align: center;
      .liTop{
        background-color: #fff;
        border-radius: 20rpx;
        height: 90rpx;
        width: 100%;
        line-height: 90rpx;
        font-size: 36rpx;
        font-weight: 600;
        color: #000;
      }
      .liInfo{
        height: 90rpx;
        border-bottom: 8rpx solid #fff;
        color: rgb(108,121,117);
        line-height: 90rpx;
        font-size: 36rpx;
        font-weight: 600;
      }
      .current{
        background-color: rgb(151,169,163);
      }
      .liBottom{
        background-color: rgb(172, 185, 181);
        border-radius: 0 0 20rpx 20rpx;
        height: 90rpx;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        image{
          width: 36rpx;
          height: 36rpx;
          transform: rotate(90deg);
        }
      }
    }
  }
  .content{
    width: 70%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    .top{
      width: 100%;
      height: 120rpx;
      display: flex;
      justify-content: center;
      .search{
        width: 87%;
        border: 6rpx solid #fff;
        height: 60rpx;
        margin-top: 30rpx;
        border-radius: 15rpx;
        display: flex;
        align-items: center;
        justify-content: center;
          image{
            width: 40rpx;
            height: 40rpx;
            border-right: 1rpx solid #fff;
            padding: 0 15rpx;
          }
          input{
            width: calc(100% - 70rpx);
            padding: 0 10rpx;
          }
      }
    }
    .bottom{
      width: 100%;
      height: calc(100% - 170rpx);
      padding: 20rpx 30rpx 30rpx 30rpx;
      
      .bumen_wrap{
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        max-height: 100%;
        .bumen{
          width: 40%;
          margin: 0 5% 40rpx 5%;
          height: 130rpx;
          text-align: center;
          line-height: 130rpx;
          background-color: rgb(216,242,234);
          border-radius: 20rpx;
          font-weight: 600;
          color: rgb(108,121,117);
          overflow: hidden;
        }
      }
    }
  }
}
</style>
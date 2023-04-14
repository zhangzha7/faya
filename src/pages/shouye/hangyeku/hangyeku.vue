<template>
  <view class="wrap">
    <view class="side">
      <ul>
        <li class="liTop">{{active}}</li>
        <li :class="{current:flag==item.id,liInfo}" v-for="item in hykArr" :key="item.id" @click="changeActive(item)">{{item.careerDirection}}</li>
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
          <view class="bumen" v-for="item in bumen" :key="item" @click="go(item)">{{item.name}}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data(){
    return{
      current:'current',
      flag:1,
      liInfo:'liInfo',
      active:'',
      hykArr:[],
      bumen:[]
    }
  },
  methods:{
    changeActive(item){
      this.active=item.careerDirection
      this.flag=item.id
      this.reqbumen(item.careerSn)
    },
    go(item){
      uni.navigateTo({
        url:"/pages/shouye/hangyeku/bumen?option="+JSON.stringify(item)
      })
    },
    reqbumen(careerSn){
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
          this.bumen=res.data.data
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
  },
  mounted(){
    uni.showLoading({
      title:"加载中"
    })
    uni.request({
      url: `${this.base.url}/api/home/career/getAllCareer`,
      method:'GET',
      success:res=>{
        this.hykArr=res.data.data
        this.reqbumen(this.hykArr[0].careerSn)
        this.active=this.hykArr[0].careerDirection
        this.flag=this.hykArr[0].id
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
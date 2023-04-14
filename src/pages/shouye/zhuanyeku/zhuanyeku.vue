<template>
  <view class="wrap">
    <view class="side">
      <ul>
        <li class="liTop">{{active}}</li>
        <li :class="{current:flag==item.id,liInfo}" v-for="item in zykArr" :key="item.id" @click="changeActive(item)">{{item.majorDirection}}</li>
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
        <view class="xueke_wrap">
          <view class="xueke" v-for="item in xueke" :key="item" @click="go(item)">{{item.name}}</view>
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
      zykArr:[],
      xueke:[]
    }
  },
  methods:{
    changeActive(item){
      this.active=item.majorDirection
      this.flag=item.id
      this.reqXueke(item.majorId)
    },
    go(item){
      uni.navigateTo({
        url:"/pages/shouye/zhuanyeku/xueke?option="+JSON.stringify(item)
      })
    },
    reqXueke(majorId){
      uni.showLoading({
        title:"加载中"
      })
      uni.request({
        url: `${this.base.url}/api/home/major/getMajorClass`,
        method:'GET',
        data:{
          majorId:majorId
        },
        success:res=>{
          this.xueke=res.data.data
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
      url: `${this.base.url}/api/home/major/getAllMajor`,
      method:'GET',
      success:res=>{
        this.zykArr=res.data.data
        this.reqXueke(this.zykArr[0].majorId)
        this.active=this.zykArr[0].majorDirection
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
      
      .xueke_wrap{
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        max-height: 100%;
        .xueke{
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
<template>
  <view class="wrap">
    <view class="wrap_top">
      <view class="top">
        <image src="../../static/icon/发芽图标（消息）_画板 1.png"></image>
        <image src="../../static/icon/发芽图标（设置）_画板 1.png"></image>
      </view>
    </view>
    <view class="wrap_module">
      <view class="module1">
        <view class="info" @click="go">
          <view class="info_left">
            <image :src="photo"></image>
          </view>
          <view class="info_middle">
            <text class="name">
              {{name}}
            </text>
            <text class="type">
              萌芽版
            </text>
          </view>
          <view class="info_right">
            <image src="../../static/icon/箭头.png"></image>
          </view>
        </view>
        <view class="info_bottom">
          <view class="info_bottom_small">
            <text class="info_bottom_num">
              0
            </text>
            <text class="info_bottom_type">
              讨论
            </text>
          </view>
          <view class="info_bottom_small">
            <text class="info_bottom_num">
              0
            </text>
            <text class="info_bottom_type">
              关注
            </text>
          </view>
          <view class="info_bottom_small">
            <text class="info_bottom_num">
              0
            </text>
            <text class="info_bottom_type">
              证书
            </text>
          </view>
        </view>
      </view>
      <view class="module2">
        <view class="item">
          <view class="left">
            <image src="../../static/icon/发芽图标（收藏）_画板 1.png"></image>
          </view>
          <view class="middle">
            <text>我的收藏</text>
          </view>
          <view class="right">
            <image src="../../static/icon/箭头.png"></image>
          </view>
        </view>
        <view class="item">
          <view class="left">
            <image src="../../static/icon/发芽图标（优惠券）_画板 1.png"></image>
          </view>
          <view class="middle">
            <text>我的优惠券</text>
          </view>
          <view class="right">
            <image src="../../static/icon/箭头.png"></image>
          </view>
        </view>
      </view>
      <view class="module3">
        <view class="item">
          <view class="left">
            <image src="../../static/icon/发芽图标（关于我们）_画板 1.png"></image>
          </view>
          <view class="middle">
            <text>关于我们</text>
          </view>
          <view class="right">
            <image src="../../static/icon/箭头.png"></image>
          </view>
        </view>
        <view class="item">
          <view class="left">
            <image src="../../static/icon/发芽图标（反馈）_画板 1.png"></image>
          </view>
          <view class="middle">
            <text>意见反馈</text>
          </view>
          <view class="right">
            <image src="../../static/icon/箭头.png"></image>
          </view>
        </view>
        <view class="item">
          <view class="left">
            <image src="../../static/icon/发芽图标（注销账户）_画板 1.png"></image>
          </view>
          <view class="middle">
            <text>注销账户</text>
          </view>
          <view class="right">
            <image src="../../static/icon/箭头.png"></image>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data(){
    return{
      data:{},
      name:'未登录用户',
      photo:''
    }
  },
  onShow(){
    // 跳转到授权登录页面
    var that=this
    uni.getStorage({
      key: 'userInfo',
      success: function (res) {
        that.data=res.data.data
        that.name=that.data.memberEntity.nickname
        that.photo=that.data.memberEntity.avatarUrl
      },
      fail: function (res) {
      }
    });
  },
  methods:{
    go(){
      uni.navigateTo({
        url:"/pages/index/index"
      })
    }
  }
}
</script>

<style lang="less" scoped>
.wrap{
  width: 100vw;
  height: 100vh;
  .wrap_top{
    width: 100%;
    height: 120rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    .top{
      width: 90%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      image{
        width: 60rpx;
        height: 60rpx;
        margin-left: 20rpx;
      }
    }
  }
  .wrap_module{
    width: 100%;
    height: calc(100vh - 120rpx);
    .module1{
      width: 90%;
      margin: 0 5% 70rpx 5%;
      background-color: #fff;
      border-radius: 15px;
      .info{
        width: 100%;
        height: 165rpx;
        padding: 15rpx 0 10rpx 0;
        display: flex;
        align-items: center;
        justify-content: center;
        .info_left{
          width: 140rpx;
          height: 140rpx;
          // background-color: rgb(204,204,204);
          border-radius: 70rpx;
          margin: 0 30rpx;
          display: flex;
          align-items: center;
          overflow: hidden;
          image{
            width: 100%;
            height: 100%;
          }
        }
        .info_middle{
          width: calc(100% - 280rpx);
          height: 100%;
          display: flex;
          flex-wrap: wrap;
          align-content: center;
          text{
            width: 100%;
          }
          .name{
              font-size: 36rpx;
              font-weight: 700;
              margin: 5rpx 0;
            }
            .type{
              font-size: 24rpx;
              color:rgb(128,128,128);
              margin: 5rpx 0;
            }
        }
        .info_right{
          display: flex;
          align-items: center;
          justify-content: center;
          height: 120rpx;
          width: 80rpx;
          image{
            width: 26rpx;
            height: 26rpx;
          }
        }
      }
      .info_bottom{
        height: 115rpx;
        width: 100%;
        padding: 0 0 15rpx 0;
        display: flex;
        align-items: center;
        justify-content: center;
        .info_bottom_small{
          width: 33%;
          height: 100%;
          display: flex;
          align-content: center;
          justify-content: center;
          flex-wrap: wrap;
          text-align: center;
          
          .info_bottom_num{
            width: 100%;
            margin: 5rpx;
            font-weight: 700;
            font-size: 32rpx;
          }
          .info_bottom_type{
            width: 100%;
            margin: 5rpx;
            font-size: 24rpx;
            color:rgb(128,128,128);
            font-weight:700;
          }
        }
      }
    }
    .module2{
      width: 90%;
      margin: 0 5% 70rpx 5%;
      background-color: #fff;
      border-radius: 15px;
    }
    .module3{
      width: 90%;
      margin: 0 5% 70rpx 5%;
      background-color: #fff;
      border-radius: 15px;
    }
  }
}
.item{
  width: 100%;
  height: 120rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  .left{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 120rpx;
    width: 110rpx;
    image{
      width: 60rpx;
      height: 60rpx;
    }
  }
  .middle{
    width:calc(100% - 190rpx);
    height: 120rpx;
    line-height: 120rpx;
    font-size: 32rpx;
  }
  .right{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 120rpx;
    width: 80rpx;
    image{
      width: 26rpx;
      height: 26rpx;
    }
  }
}
</style>
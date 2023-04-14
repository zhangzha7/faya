<template>
  <view class="wrap">
    <!-- 顶部栏 -->
    <view class="top">
      <view class="top_left">
        <image src="../../static/icon/发芽图标（扫一扫）_画板 1.png" @click="scan"></image>
        <input type="text">
      </view>
      <view class="top_btn" @click="search">
        <text>ss</text>
      </view>
      <view class="top_right" @click="audio">
        <image src="../../static/icon/发芽图标（语音输入）_画板 1.png"></image>
      </view>
    </view>

    <!-- 内容 -->
    <view class="content_wrap">
      
      <!-- 轮播图 -->
      <view class="banner_wrap">
        <!--
          swiper
          1、自动轮播 autoplay
          2、指示器 indicator-dots
          3、衔接轮播 circular
        -->
        <swiper autoplay circular>
          <swiper-item
          v-for="item in banner"
          :key="item.id"
          @click="gobanner"
          style="overflow:hidden;transform:translateY(0)"
          >
            <image :src="item.thumb" style="height:100%;width:100%"></image>
          </swiper-item>
        </swiper>
      </view>

      <!-- 功能按钮组 -->
      <view class="btn_wrap">
        <navigator class="btn_small" url="/pages/shouye/ceping/addInfo">
          <view class="btn_top">
            <view class="btn_img">
              <image src="../../static/icon/发芽图标（测评）_画板 1.png"></image>
            </view>
          </view>
          <text>测 评</text>
        </navigator>
        <navigator class="btn_small" url="/pages/shouye/hangyeku/hangyeku">
          <view class="btn_top">
            <view class="btn_img">
              <image src="../../static/icon/发芽图标（行业库）_画板 1.png"></image>
            </view>
          </view>
          <text>行 业 库</text>
        </navigator>
        <navigator class="btn_small" url="/pages/shouye/zhuanyeku/zhuanyeku">
          <view class="btn_top">
            <view class="btn_img">
              <image src="../../static/icon/发芽图标（专业库）_画板 1.png"></image>
            </view>
          </view>
          <text>专 业 库</text>
        </navigator>
      </view>

      <!-- 讨论区 -->
      <view class="dis_wrap">
        <dis></dis>
      </view>

      <!-- 推荐区 -->
      <tuijian></tuijian>
    </view>
  </view>
</template>

<script>
import tuijian from '../../components/shouye_tuijian.vue'
import dis from '../../components/shouye_dis'
export default {
  data(){
    return{
      openId:'',
      banner:[{thumb:'http://43.139.27.78/img/banner.jpg'}]
    }
  },
  onLoad() {
    // 跳转到授权登录页面
    var that=this
    uni.getStorage({
      key: 'userInfo',
      success: function (res) {
        that.openId=res.data.data.memberEntity.openId
      },
      fail: function (res) {
        uni.navigateTo({
          url:"/pages/index/index"
        })
      }
    });
	},
  components:{
    tuijian,
    dis
  },
  methods:{
    // 搜索
    search(){
      wx.showModal({
        title: '该功能未开发',
        content: '这是搜索功能',
        success (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    },
    // 扫描
    scan(){
      wx.showModal({
        title: '该功能未开发',
        content: '这是扫描功能',
        success (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    },
    // 点击轮播图
    gobanner(){
      wx.showModal({
        title: '该功能未开发',
        content: '这是轮播图功能',
        success (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    },
    // 语音输入
    audio(){
      wx.showModal({
        title: '该功能未开发',
        content: '这是语音输入功能',
        success (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.wrap{
  width: 100vw;
  height:100vh;
  .top{
    width: 100%;
    height: 110rpx;
    background-color: #F8F8F8;
    display: flex;
    align-items: center;
    justify-content: center;
    .top_left{
      width: calc(80% - 140rpx);
      border: 6rpx solid #B1E5D5;
      height: 60rpx;
      margin-right: 15rpx;
      border-radius: 15rpx;
      display: flex;
      align-items: center;
      justify-content: center;
      image{
        width: 40rpx;
        height: 40rpx;
        border-right: 1rpx solid gray;
        padding: 0 15rpx;
      }
      input{
        width: calc(100% - 70rpx);
        padding: 0 10rpx;
      }
    }
    .top_btn{
      background-color: #B1E5D5;
      width: 80rpx;
      height: 60rpx;
      line-height: 60rpx;
      text-align: center;
      padding: 5rpx 15rpx;
      border-radius: 15rpx;
      font-size: 28rpx;
      
    }
    .top_right{
      display: flex;
      align-items: center;
      image{
        width: 40rpx;
        height: 40rpx;
        margin-left:15rpx;
      }
    }
  }
  .content_wrap{
    height: calc(100% - 120rpx);
    width: 100%;
    display: flex;
    align-content:flex-start;
    justify-content: center;
    flex-wrap: wrap;
    .banner_wrap{
      width: 90%;
      height: 250rpx;
      background-color: #fff;
      margin: 20rpx 0 0 0;
      border-radius: 15px;
      overflow:hidden;
      transform:translateY(0);
    }
    .btn_wrap{
      width: 90%;
      height: 140rpx;
      background-color: #fff;
      margin: 20rpx 0 0 0;
      border-radius: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap:nowrap;
      .btn_small{
        height: 140rpx;
        width: 30%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        .btn_top{
          width: 100%;
          height: 94rpx;
          display: flex;
          align-items: center;
          justify-content: center;
          .btn_img{
            width:50%;
            height:0;
            padding-bottom:50%;
            position:relative;
            image{
              width:80%;
              height:80%;
              margin: 15% 8% 5% 12%;
              position:absolute;
              object-fit:cover;
            }
          }
          
        }
        text{
          width: 100%;
          height: 46rpx;
          text-align: center;
          font-size: 20rpx;
          line-height: 46rpx;
        }
        
      }
    }
    .dis_wrap{
      width: 90%;
      height: 280rpx;
      background-color: #fff;
      margin: 20rpx 0 0 0;
      border-radius: 15px;
    }
  }
}
</style>
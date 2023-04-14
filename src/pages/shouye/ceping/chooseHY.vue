<template>
  <view class="wrap">
    <view class="content">
      <view class="question">
        <text class="title">请选择您的行业</text>
        <view class="inputWrap" @click="showSelectList">
          <!-- <input type="select"> -->
          <text class="select">{{select}}</text>
          <image src="../../../static/icon/箭头.png"></image>
        </view>
        <view class="list" v-show="showList">
          <view class="boxWrap">
            <view class="box">
              <text>1</text>
            </view>
            <view class="box">
              <text>1</text>
            </view>
            <view class="box">
              <text>1</text>
            </view>
            <view class="box">
              <text>1</text>
            </view>
            <view class="box">
              <text>1</text>
            </view>
            <view class="box">
              <text>1</text>
            </view>
            <view class="box">
              <text>1</text>
            </view>
            <view class="box">
              <text>1</text>
            </view>
          </view>
          <view class="icon"  @click="showSelectList">
            <image src="../../../static/icon/箭头.png"></image>
          </view>
        </view>
      </view>
      <view class="answer_wrap">
        <view class="answer" @click="go">
          <text>开始测试</text>
        </view>

      </view>
    </view>
  </view>
</template>

<script>
export default {
  data(){
    return{
      select:'',
      showList:false
    }
  },
  methods:{
    go(){
      uni.redirectTo({
        url:"/pages/shouye/ceping/goToHyOrZy"
      });
    },
    showSelectList(){
      if(this.showList===false){
        // 写方法
        console.log(this.showList)
        this.showList=true
      }else{
        this.showList=false
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .wrap{
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .content{
      width: 100%;
      height: 80%;
      background-color: #fff;
      border-radius:60rpx;
      .question{
        width: 100%;
        padding: 30% 0 0 0;
        text-align: center;
        height: calc(238rpx + 370rpx);
        .title{
          width: 100%;
          font-weight: 700;
          font-size: 46rpx;
        }
        .inputWrap{
          width: 60%;
          margin: 80rpx 20% 0 20%;
          border: 3rpx solid black;
          border-radius: 20rpx;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: nowrap;
          .select{
            width: calc(100% - 110rpx);
          }
          image{
            width: 40rpx;
            height: 40rpx;
            margin: 20rpx;
            transform:rotate(90deg);
          }
        }
        .list{
          width: 60%;
          height: 370rpx;
          background-color: rgb(229,229,229);
          margin: 0 auto;
          border-radius: 5rpx 5rpx 20rpx 20rpx;
          .boxWrap{
            width: 100%;
            max-height: 320rpx;
            overflow: scroll;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            .box{
              height: 80rpx;
              width: 100%;
              text{
                line-height: 80rpx;
                font-size: 32rpx;
              }
            }
          }
          .icon{
            width: 100%;
            height: 50rpx;
            text-align: center;
            background-color: rgb(183,183,183);
            border-radius: 0 0 20rpx 20rpx;
            display: flex;
            align-items: center;
            justify-content: center;
            image{
              width: 30rpx;
              height: 30rpx;
              margin: 20rpx;
              transform:rotate(270deg);
            }
          }
        }

      }
      .answer_wrap{
        width: 100%;
        height: 50%;
        text-align: center;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        align-content:flex-start;
        .answer{
          background-color: rgb(177,229,213);
          border-radius: 30rpx;
          width: 400rpx;
          height: 120rpx;
          margin: 0 0 60rpx 0;

          text{
            line-height: 120rpx;
            font-weight: 700;
            font-size: 40rpx;
          }
        }
      }
    }
  }
</style>
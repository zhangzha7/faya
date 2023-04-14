<template>
  <view class="wrap">
    <view class="titleWrap">
      <text class="title">行业认知测试结果</text>
    </view>
    <view class="contentWrap">
      <text class="content">发芽项目架构
        采用前后端分离模式
        后端服务器架构设计想法：(为什么要使用微服务架构)
        1.发芽小程序可能与后续的一些外部服务，其它模块有关联性
        2.为了便于横向扩展，使用微服务多模块架构，但是多模块部署到同一台服务器又有点吃不消
        3.部署问题看看能不能就打包成一个大包(父包)部署到服务器
        4.存在模块之间调用问题，需统一规范（线上不会有问题）
        5.分为小程序端(需要优化并完善)和后台管理系统端(未开发)，一个服务就负责处理两个端的请求
        6.SpringCloud（已经引入）
        Nacos作为服务注册与发现，以及配置中心
        GateWay作为网关，请求转发路由，鉴权(token校验)
        openFeign服务之间通信，远程调用
        (未引入可能需要引入)
        采用前后端分离模式
        后端服务器架构设计想法：(为什么要使用微服务架构)
        1.发芽小程序可能与后续的一些外部服务，其它模块有关联性
        2.为了便于横向扩展，使用微服务多模块架构，但是多模块部署到同一台服务器又有点吃不消
        3.部署问题看看能不能就打包成一个大包(父包)部署到服务器
        4.存在模块之间调用问题，需统一规范（线上不会有问题）
        5.分为小程序端(需要优化并完善)和后台管理系统端(未开发)，一个服务就负责处理两个端的请求
        6.SpringCloud（已经引入）
        Nacos作为服务注册与发现，以及配置中心
        GateWay作为网关，请求转发路由，鉴权(token校验)
        openFeign服务之间通信，远程调用
        (未引入可能需要引入)
      </text>
    </view>
    <text class="again">重新测试</text>
  </view>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.wrap{
  width: 100vw;
  height: 100vh;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  .titleWrap{
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    .title{
      font-size: 42rpx;
      font-weight: 700;
    }
  }
  .contentWrap{
    height: 70%;
    background-color: #fff;
    width: 80%;
    border-radius: 20rpx;
    margin:2% 10%;
    padding: 20rpx;
    overflow-y: scroll;
    .content{
      white-space:pre-wrap;
    }
  }
  .again{
    font-size: 28rpx;
    color: gray;
    padding: 10rpx;
  }
}
</style>
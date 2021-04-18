## swiper
swiper 有一个默认高度 150rpx
## scroll-view
    enable-flex="true" 
    scroll-x="true"
    横向排列时纵向高度注意
    bindrefresherrefresh = "" 下拉刷新事件 先设置   refresher-enabled
    bindscrolltolower 下拉触底回调
## 阿里 iconfont
## 单行、多行文字超出范围显示 ...
```css
/*单行*/
selector {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

/*多行*/
selector {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical; /*设置对齐模式*/
    -webkit-line-clamp: 2;/*设置显示两行*/
}

```

## node 做中间层 缓解主服务器的压力

## 发请求 
* 域名必须要备案
* 必须是 htts 请求
* 一个接口最多配置20个域名
* 并发上限是10个
* 可以设置不检验请求的合法性 （在开发工具-》详情-》本地设置中设置）

## 列表渲染

## 自定义组件


## 内网穿透 utools 插件

## tabBar
 全局配置 app.json


# 登陆
##  数据 data-key=value 通过 event.currentTarget.dataset.type获取

##  wx.showToast

## 将用户的信息存储至本地
    wx.setStorageSync('userInfo', JSON.stringify(result.profile))

# 视频页面
## scroll-view
 通过id向event传参的时候如果传的是number会自动转换成string
 `>>>0`  右移0位 ：非数字类型转为数字类型
 scroll-into-view :设置滚动项的id，则滚动到开始位置
 scroll-with-animation:带动画滚动

## wx.showLoading() wx.hideLoading()
``` js
wx.showModal({
  content: '确认删除吗?',
  success: (res) => {
    if (res.confirm) {
      // 清空data中historyList
      this.setData({
        historyList: []
      })
      // 移除本地的历史记录缓存
      wx.removeStorageSync('searchHistory');
    }
  }
})
```

## cookie （token、session？）
 登陆成功获取到cookie 存到本地 然后在以后发请求时 携带cookie 信息 （用来权限控制）

## wx.setStorage({key:"",data:""}) wx.getStorageSync()

## video 组件
```html
 <video
          src="{{item.data.urlInfo.url}}"
          bindplay="handlePlay"
          id="{{item.data.vid}}"
          poster="{{item.data.coverUrl}}"   <!-- 视频封面图片 -->
          class="common"
          object-fit="cover" <!--设置视频窗口大小自适应-->
          wx:if='{{videoId === item.data.vid}}'
          bindtimeupdate="handleTimeUpdate"
          bindended="handleEnded"></video>
```
同时一个视频播放

## videoContext
video 标签的实例对象的获取方式 wx.createVideoContext(id,obj) id 为视频标签的id
this.videoContext.seek(videoItem.currentTime);


## video 标签性能优化
性能优化：使用image图片代替video标签


## css 高度计算 cacl(100%-150rpx)
vh vw : 1vh =1% 视口高度 vw = 1% 视口宽度


## 页面下拉刷新 
页面 Json 文件中设置  "enablePullDownRefresh": true
``` js
/**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('页面的下拉刷新');
  },
```



## 转发 按钮 button
 open-type="share"

 ## 点击右上角转发
 ```js

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function ({from}) {
    console.log(from);
    if(from === 'button'){
      return {
        title: '来自button的转发',
        page: '/pages/video/video',
        imageUrl: '/static/images/nvsheng.jpg'
      }
    }else {
      return {
        title: '来自menu的转发',
        page: '/pages/video/video',
        imageUrl: '/static/images/nvsheng.jpg'
      }
    }
    
  }
 ```


 ## 参数接受

```js
 wx.navigateTo({
      // 不能直接将song对象作为参数传递，长度过长，会被自动截取掉
      // url: '/pages/songDetail/songDetail?songPackage=' + JSON.stringify(songPackage)
      url: '/pages/songDetail/songDetail?musicId=' + song.id
    })
```
options: 用于接收路由跳转的query参数
原生小程序中路由传参，对参数的长度有限制，如果参数长度过长会自动截取掉
console.log(JSON.parse(options.songPackage));



## 动态修改窗口标题
对应于 json文件中的`"navigationBarTitleText": "云音乐"` 字段
```js 
// 动态修改窗口标题
  wx.setNavigationBarTitle({
    title: this.data.song.name
  })
```


## 音乐播放及控制
 wx.getBackgroundAudioManager
```js
// 这样就可以自动播放音乐
this.backgroundAudioManager = wx.getBackgroundAudioManager();
this.backgroundAudioManager.src = musicLink;
this.backgroundAudioManager.title = this.data.song.name;
```


 ## 后台播放 
 在 app.json 中配置  "requiredBackgroundModes":["audio"]



## 
``` js
let {recommendList, index} = this.data;
      if(type === 'pre'){ // 上一首
        (index === 0) && (index = recommendList.length);
        index -= 1;
      }else { // 下一首
        (index === recommendList.length - 1) && (index = -1);
        index += 1;
      }
```

## npm  包 使用 => pubsub monment
先安装 再点击 构建npm
 ```js
 PubSub.subscribe("name",(msg,type)=>{

 })
 PubSub.publish('name', type)

 ```


## 模板
使用方式
``` xml
定义模板 mytemplate.wxml
<template name="myTmp">
  <view>
    <view class="title">摸板内容{{id}}:{{data}}</view>
  </view>
</template>


使用模板 不同文件
页面结构引入
<import src="/template/mytemplate/mytemplate.wxml" />
<view>
     <view >测试模板</view>
     <template is="myTmp" data="{{...msg}}"/>
</view>
  
```
``` css
/*样式的映入*/ 和less 相似
@import '/template/mytemplate/mytemplate.wxss'
```


# wx.login(Obj obj)


# flyIo


# [小程序分包](https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages.html)
小程序过大没发过审核 就需要分成小包
先加载主包

## 独立分包 
不依赖主包 所有资源自己有一套
与主页关联不大的页面适用 广告业 活动页等

# 包的预加载
app.json 中配置 preloadRule
```json
"preloadRule": {
    "pages/index/index": {
      "packages": [
        "songPackage",
        "other"
      ]
    },
    /* 独立分包 时可以设置预加载主包*/
    "pages/index/index":{
      "pakages":["__APP__"]
    }
  }

  
```
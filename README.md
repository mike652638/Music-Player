# QQ 音乐 WebApp

![Progress](http://progressed.io/bar/80?title=completed)

## 介绍

该项目来源[HuangYi](https://github.com/ustbhuangyi)，并在基础上改造为 QQ 音乐 UI 和多端同构，并打包成IOS，运行在 iphone 真机上，结尾有我的一些截图。

因为自己一直想搞移动端所以衍生了一系列的学习欲望，同时也为巩固 Vue 开发经验

数据来源QQ音乐JSONP，部分接口存在http header的限制所以用到了node，托管于VPS，PM2 部署，Nginx代理，

[演示地址](http://45.77.79.163/Music)

[备用：项目演示地址 GitHub Pages](https://forzeny.github.io/Music-Player/music/#/recommend)

## 耗时

20171013 - 至今

## 平台

* macOS High Sierra
* vscode

## 相关

* Vue @2.3.3, vue-router, vuex, axios
* less
* ES6
* Express
* ~~~lib-flexbile~~~ amfe-flexible@2.0,  px2rem

* Vultr PM2 Nginx

## 分支

* master
* lib-flex
* ssr

## 组件

* 基础组件：确认对话框，加载状态，进度条，开关切换，搜索框，滚动组件，消息提示组件等
* 业务组件：添加歌曲到列表，歌单详情，播放内核，搜索页面，用户中心，顶部导航，排行榜等组件
* 上拉刷新，函数防抖动搜索，消除点击延迟，异步路由

## 已完成部分

* [x] /recommand 推荐页：轮播图，推荐歌单列表，loading 组件
* [x] /singer 歌手页列表：歌手列表展示，左右联动，快速入口，类似通讯录
* [x] /singer/:id 歌手详情页 , 局部滚动，视差，音乐播放器有的功能都有
* [x] /rank/:id 排行页
* [x] /search 搜索，搜索结果，热门搜索，结果播放
* [ ] 用户中心页，搜索历史页 

## 调试工具

* vConsole
* Charles

## 注意事项

* animation-play-state: paused ios 不支持[解决方案](https://codepen.io/HaoyCn/pen/BZZrLd)
* min-player [进度条实现](https://codepen.io/xgad/post/svg-radial-progress-meters)
* vue@2.5+  [ios 不能播放问题](https://github.com/DDFE/DDFE-blog/issues/24)

## 本地预览

```bash
git clone hhttps://github.com/forzeny/Music-Player.git
$ cd Music-Player
$ yarn install
$ yarn run dev
```

## 适配

适配这部分主要是IOS的Safari浏览器和微信webview以及打包后兼容性，和样式上的问题，此应用未调用设备API

以下图片为打包后软件运行图，不能后台播放需要IOSER帮助，真机上动画流畅

### IOS 适配

* iphoneX 真机截图 上下有留白

<img src="./static/WechatIMG505.png" width="40%"><img src="./static/WechatIMG506.png" width="40%">

* iphone7 Plus 模拟器正常

<img src="./static/WechatIMG508.png">

* 适配列表中iPhone，iPad系列，其中X有留白

![适配iphone 系列，X的刘海暂未处理](./static/WechatIMG507.jpeg)

### Andriod 适配

试了下腾讯的[weTest](http://wetest.qq.com/product/cloudphone?from=default_automail_new) 收费，没继续用

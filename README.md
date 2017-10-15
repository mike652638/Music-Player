
# 移动端音乐 WebApp

[参考](https://github.com/yxuecheng/vue-music-webapp)
[项目演示地址:](https://yxuecheng.github.io/vue-music/dist/)

## 技术栈

- Vue
- vue-router
- vuex
- vue-lazyload
- better-scroll
- less
- ES6
- Express
- jsonp
- axios

## 组件

- 基础组件：确认对话框，加载状态，进度条，开关切换，搜索框，滚动组件，消息提示组件等
- 业务组件：添加歌曲到列表，歌单详情，播放内核，搜索页面，用户中心，顶部导航，排行榜等组件
- 上拉刷新，函数节流搜索哦，消除点击延迟，异步路由

## 已完成

- 推荐页：轮播图，推荐歌单列表，loading状态，页面滚动，图片懒加载（better-scroll，vue-lazyload，jsonp，axios）

## 调试工具 

- vConsole
- Charles

## 注意事项

- better-scroll 在轮播图中使用会多拷贝俩图片以便loop

## 预览

``` bash
$ git clone hhttps://github.com/yxuecheng/vue-music.git
$ npm install
$ npm run dev
```
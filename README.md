# QQ 音乐 WebApp

[项目演示地址 :](https://forzeny.github.io/Music-Player/dist/#/recommend)

## 耗时

20171013 - 至今

## 平台

* macOS High Sierra
* vscode

## 技术栈

* Vue
* vue-router
* vuex
* vue-lazyload
* better-scroll
* less
* ES6
* Express
* jsonp
* svg
* axios

## 组件

* 基础组件：确认对话框，加载状态，进度条，开关切换，搜索框，滚动组件，消息提示组
	件等
* 业务组件：添加歌曲到列表，歌单详情，播放内核，搜索页面，用户中心，顶部导航，排
	行榜等组件
* 上拉刷新，函数防抖动搜索，消除点击延迟，异步路由

## 已完成部分

* [x] /recommand 推荐页：轮播图，推荐歌单列表，loading 组件，图片懒加载（使用
		better-scroll 处理局部滚动和轮播图 ， vue-lazyload 处理懒加载）
* [x] /singer 歌手页列表：歌手列表展示，左右联动，快速入口，类似通讯录（使用
		better-scroll 处理局部滚动，使用原生 touch 事件处理右侧姓氏滑动）
* [x] /singer/:id 歌手详情页 , 局部滚动，视差，音乐播放器有的功能都有（迷你播放
		器使 用了 svg 模拟播放进度，播放器核心为 audio 标签，详情查看 mdn 文档，原
		生 touch 事件处理歌词和头像左右滑动）
- [x] /rank/:id 排行页
- [x] /search 搜索，搜索结果，热门搜索，结果播放

## 调试工具

* vConsole
* Charles

## 数据来源

QQ 音乐

## 注意事项

* 使用 vue mixin 适配 min 播放器占位导致滚动高度问题

## 预览

```bash
$ git clone hhttps://github.com/forzeny/Music-Player.git
$ npm install
$ npm run dev
```

# 移动端音乐 WebApp

[项目演示地址 :](https://yxuecheng.github.io/vueMusic/dist/)

最近晚上还有周末都加班，先放一放没完成 ~

## 平台

* Macos High sieera
* vscode

## 技术栈

* Vue
* vue-router
* vuex 使用场景，多个组件之间的数据共享，路由间复杂数据传递
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
* 上拉刷新，函数节流搜索哦，消除点击延迟，异步路由

## 已完成

* /recommand 推荐页：轮播图，推荐歌单列表（局部滚动）， loading 组件，图片懒加载
	（better-scroll ， vue-lazyload，jsonp ， axios）
* /singer 歌手页列表：歌手列表展示，左右联动，快速入口（类似通讯录）
* /singer/singerdetail 歌手详情页 , 局部滚动，视差，音乐播放器有的功能都有（迷你
	播放器使用了 svg 模拟播放进度）

## 调试工具

* vConsole
* Charles

## 注意事项

## 预览

```bash
$ git clone hhttps://github.com/yxuecheng/vue-music.git
$ npm install
$ npm run dev
```

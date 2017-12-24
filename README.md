# QQ 音乐 WebApp

## 介绍
该项目来源[HuangYi](https://github.com/ustbhuangyi)，并在基础上改造为QQ音乐UI和多端同构的适配方式

旨在学习巩固Vue开发经验，移动端踩坑，并对原理学习有一定的帮助

[项目演示地址](https://forzeny.github.io/Music-Player/dist/#/recommend)

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
* svg
* axios
* jsonp

* flex
* ~~~lib-flexbile~~~ amfe-flexible

* px2rem

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

## 调试工具

* vConsole
* Charles

## 数据来源

QQ 音乐

## 注意事项

- animation-play-state: paused ios 不支持[解决方案](https://segmentfault.com/q/1010000009884033/a-1020000009892091)
## 预览

```bash
git clone hhttps://github.com/forzeny/Music-Player.git
$ cd Music-Player
$ yarn install
$ yarn run dev
```

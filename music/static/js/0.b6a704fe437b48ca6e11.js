webpackJsonp([0],{"+c/A":function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"search-box"},[r("i",{staticClass:"icon-search"}),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],ref:"queryRef",staticClass:"box",attrs:{type:"text",placeholder:e.placeholder},domProps:{value:e.query},on:{input:function(t){t.target.composing||(e.query=t.target.value)}}}),e._v(" "),r("i",{directives:[{name:"show",rawName:"v-show",value:e.query,expression:"query"}],staticClass:"icon-dismiss",on:{click:e.clear}})])},staticRenderFns:[]}},"0aAL":function(e,t,r){"use strict";var a=r("Zrlr"),i=r.n(a),n=function e(t){var r=t.id,a=t.name;i()(this,e),this.id=r,this.name=a,this.avatar="https://y.gtimg.cn/music/photo_new/T001R300x300M000"+r+".jpg?max_age=2592000"};t.a=n},"3R3+":function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Scroll",{ref:"scrollWrap",staticClass:"suggest-wrap",attrs:{data:e.result,pullUp:e.pullUp,beforeScroll:e.beforeScroll},on:{scrollToEnd:e.searchMoreData,beforeScroll:e.listScroll}},[r("ul",{staticClass:"suggest-list"},[e._l(e.result,function(t){return r("li",{key:t.id,staticClass:"suggest-item",on:{click:function(r){e.selectItem(t)}}},[r("div",{staticClass:"icon"},[r("i",{class:e.getIconCls(t)})]),e._v(" "),r("div",{staticClass:"name"},[r("p",{staticClass:"text",domProps:{innerHTML:e._s(e.getDisplayName(t))}})])])}),e._v(" "),r("Loading",{attrs:{show:e.loadMore,title:"加载更多"}})],2)])},staticRenderFns:[]}},"58Us":function(e,t,r){var a=r("s1cF");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r("rjj0")("080a0734",a,!0)},"5zde":function(e,t,r){r("zQR9"),r("qyJz"),e.exports=r("FeBl").Array.from},"88xr":function(e,t,r){var a=r("LYBm");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r("rjj0")("1d4ab2ab",a,!0)},"8stH":function(e,t,r){"use strict";function a(){var e=s()({},c.g,{uin:0,needNewCode:1,platform:"h5"});return r.i(o.a)("https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg",e,c.h)}function i(e,t,a,i){var n=s()({},c.g,{w:e,p:t,perpage:i,n:i,catZhida:a?1:0,zhidaqu:1,t:0,flag:1,ie:"utf-8",sem:1,aggr:0,remoteplace:"txt.mqq.all",uin:0,needNewCode:1,platform:"h5"});return r.i(o.a)("https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp",n,c.h)}t.a=a,t.b=i;var n=r("woOf"),s=r.n(n),o=r("Gak4"),c=r("T452")},"9Nno":function(e,t,r){r("GmWH");var a=r("VU/8")(r("d+Lw"),r("rAZQ"),"data-v-b77683d6",null);e.exports=a.exports},C9EA:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"show",rawName:"v-show",value:e.searches.length,expression:"searches.length"}],staticClass:"search-list"},[r("transition-group",{attrs:{name:"list",tag:"ul"}},e._l(e.searches,function(t){return r("li",{key:t,staticClass:"search-item",on:{click:function(r){e.selectItem(t)}}},[r("span",{staticClass:"text"},[e._v(e._s(t))]),e._v(" "),r("span",{staticClass:"icon",on:{click:function(r){r.stopPropagation(),e.deleteOne(t)}}},[r("i",{staticClass:"icon-delete"})])])}))],1)},staticRenderFns:[]}},DXDo:function(e,t,r){r("58Us");var a=r("VU/8")(r("qZJc"),r("zCc6"),"data-v-8362a2ce",null);e.exports=a.exports},DvO7:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("M4fF"),i=r.n(a);t.default={components:{},data:function(){return{query:""}},props:{placeholder:{type:String,default:"搜索歌曲、歌手"}},methods:{clear:function(){this.query=""},setQuery:function(e){this.query=e},blur:function(){this.$refs.queryRef.blur()}},computed:{},created:function(){this.$watch("query",i.a.debounce(function(e){this.$emit("query",e)},500))},mounted:function(){},destroyed:function(){}}},"F4+m":function(e,t,r){"use strict";r.d(t,"a",function(){return s});var a=r("Dd8w"),i=r.n(a),n=r("NYxO"),s={computed:i()({},r.i(n.b)(["playList"])),mounted:function(){this.handlePlayList(this.playList)},activated:function(){this.handlePlayList(this.playList)},watch:{playList:function(e){this.handlePlayList(e)}},methods:{handlePlayList:function(){throw new Error("组件需要使用 handlePlayList")}}}},G7KH:function(e,t,r){r("HW7+");var a=r("VU/8")(r("DvO7"),r("+c/A"),"data-v-5e8e379c",null);e.exports=a.exports},GmWH:function(e,t,r){var a=r("WFpZ");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r("rjj0")("1daa1d5d",a,!0)},Gu7T:function(e,t,r){"use strict";t.__esModule=!0;var a=r("c/Tr"),i=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return(0,i.default)(e)}},"HW7+":function(e,t,r){var a=r("MWZK");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r("rjj0")("58d2aa9a",a,!0)},I00L:function(e,t,r){var a=r("gqNS");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r("rjj0")("7ec4d92d",a,!0)},I9do:function(e,t,r){r("88xr");var a=r("VU/8")(r("u7k+"),r("C9EA"),"data-v-296e2483",null);e.exports=a.exports},LYBm:function(e,t,r){t=e.exports=r("FZ+f")(!1),t.push([e.i,".search-list .search-item[data-v-296e2483]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:.133333rem 0;height:.666667rem;overflow:hidden}.search-list .search-item.list-enter-active[data-v-296e2483],.search-list .search-item.list-leave-active[data-v-296e2483]{transition:all .1s}.search-list .search-item.list-enter[data-v-296e2483],.search-list .search-item.list-leave-to[data-v-296e2483]{height:0}.search-list .search-item .text[data-v-296e2483]{-webkit-box-flex:1;-ms-flex:1;flex:1;color:#000;font-size:.373333rem}.search-list .search-item .icon[data-v-296e2483]{font-size:.373333rem}.search-list .search-item .icon .icon-delete[data-v-296e2483]{color:#000}",""])},Lcvq:function(e,t){e.exports="data:image/gif;base64,R0lGODlhZABkAKIEAN7e3rq6uv///5mZmQAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpBRjA4RUZDMDI3MjA2ODExODA4M0Y1OTQyMzVDRDM3MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCMzE0Rjk3NDdDRTgxMUUzOUJCRjk0NjAxMUE1NzRBMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCMzE0Rjk3MzdDRTgxMUUzOUJCRjk0NjAxMUE1NzRBMCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDVBMTZDQjczOTIwNjgxMTgwODNGNTk0MjM1Q0QzNzMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUYwOEVGQzAyNzIwNjgxMTgwODNGNTk0MjM1Q0QzNzMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+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"},MWZK:function(e,t,r){t=e.exports=r("FZ+f")(!1),t.push([e.i,".search-box[data-v-5e8e379c]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-sizing:border-box;width:100%;padding:0 .266667rem;height:.8rem;background:#fff;border-radius:.08rem}.search-box .icon-search[data-v-5e8e379c]{font-size:.533333rem;color:#222}.search-box .box[data-v-5e8e379c]{-webkit-box-flex:1;-ms-flex:1;flex:1;margin:0 .066667rem;border:0;outline:none;background:#f4f4f4;line-height:1;color:#000;font-size:.4rem}.search-box .box[data-v-5e8e379c]::-webkit-input-placeholder{color:grey}.search-box .box[data-v-5e8e379c]:-ms-input-placeholder{color:grey}.search-box .box[data-v-5e8e379c]::placeholder{color:grey}.search-box .icon-dismiss[data-v-5e8e379c]{font-size:.4rem;color:#222}",""])},MjDi:function(e,t,r){var a=r("eEau");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r("rjj0")("337060d2",a,!0)},PCjn:function(e,t,r){r("I00L");var a=r("VU/8")(r("zv+q"),r("3R3+"),"data-v-41c7db46",null);e.exports=a.exports},PvFA:function(e,t,r){"use strict";function a(e){var t=e.songmid,a="C400"+e.songmid+".m4a";return r.i(d.b)(t,a).then(function(t){if(t.code===f.d){var r=(t.data.items[0].vkey,(new Date).getUTCMilliseconds());Math.round(2147483647*Math.random());return new m({id:e.songid,mid:e.songmid,singer:i(e.singer),name:e.songname,album:e.albumname,duration:e.interval,image:"https://y.gtimg.cn/music/photo_new/T002R300x300M000"+e.albummid+".jpg?max_age=2592000",url:"http://dl.stream.qqmusic.qq.com/C400"+e.songmid+".m4a?guid=9035189320&vkey=F45CF08E99A296E05513E32A93FB60D08AB5BFC9141579AEE02158FA73B176DB7775B506740ED3940F48B51C15FB40FBB1C20F6DBADE946D&uin=&fromtag=999"})}})}function i(e){var t=[];return e?(e.forEach(function(e){t.push(e.name)}),t.join("/")):""}t.a=a;var n=r("//Fk"),s=r.n(n),o=r("Zrlr"),c=r.n(o),l=r("wxAW"),u=r.n(l),d=r("9cIF"),f=r("T452"),h=r("xrTZ"),m=(r.n(h),function(){function e(t){var r=t.id,a=t.mid,i=t.singer,n=t.name,s=t.album,o=t.duration,l=t.image,u=t.url;c()(this,e),this.id=r,this.mid=a,this.singer=i,this.name=n,this.album=s,this.duration=o,this.image=l,this.url=u}return u()(e,[{key:"getLyric",value:function(){var e=this;return this.lyric?s.a.resolve(this.lyric):new s.a(function(t,a){r.i(d.a)(e.mid).then(function(r){r.retcode===f.d?(e.lyric=h.Base64.decode(r.lyric),t(e.lyric)):a("no lyric")})})}}]),e}())},RCo6:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("Gu7T"),i=r.n(a),n=r("Dd8w"),s=r.n(n),o=r("G7KH"),c=r.n(o),l=r("I9do"),u=r.n(l),d=r("DXDo"),f=r.n(d),h=r("PCjn"),m=r.n(h),p=r("8stH"),g=r("T452"),v=r("NYxO"),A=r("zu6c"),y=r.n(A),b=r("F4+m");t.default={name:"search",mixins:[b.a],data:function(){return{hotkey:[],queryData:""}},created:function(){this._getHotKey()},computed:s()({},r.i(v.b)(["searchHistory"]),{scrollData:function(){return[].concat(i()(this.hotkey),i()(this.searchHistory))}}),methods:s()({},r.i(v.d)({setSearchHistory:"saveSearchHistory",deleteSearchHistory:"deleteSearchHistory",clearSearchHistory:"clearSearchHistory"}),{_getHotKey:function(){var e=this;r.i(p.a)().then(function(t){t.code===g.d&&(e.hotkey=t.data.hotkey.slice(0,10))})},addQuery:function(e){this.$refs.search.setQuery(e)},query:function(e){var t=this;this.queryData=e,this.saveSearch(e.trim()),this.$nextTick(function(){t.$refs.scrollRef.refresh()})},blurInput:function(){this.$refs.search.blur()},saveSearch:function(e){e&&this.setSearchHistory(e)},deleteItem:function(e){this.deleteSearchHistory(e)},clearAll:function(){this.clearSearchHistory()},showConfirm:function(){this.$refs.confirmRef.show()},confirm:function(){this.clearAll()},cancel:function(){this.$refs.confirmRef.hide()},handlePlayList:function(e){var t=e.length>0?"50px":"";this.$refs.scrollRef.$el.style.bottom=t,this.$refs.scrollRef.refresh()}}),components:{SearchBox:c.a,Suggest:m.a,SearchList:u.a,Confirm:f.a,Scroll:y.a}}},T452:function(e,t,r){"use strict";r.d(t,"a",function(){return a}),r.d(t,"b",function(){return i}),r.d(t,"c",function(){return n}),r.d(t,"e",function(){return s}),r.d(t,"f",function(){return o}),r.d(t,"l",function(){return c}),r.d(t,"m",function(){return l}),r.d(t,"n",function(){return u}),r.d(t,"j",function(){return d}),r.d(t,"i",function(){return f}),r.d(t,"k",function(){return h}),r.d(t,"g",function(){return m}),r.d(t,"h",function(){return p}),r.d(t,"d",function(){return g});var a="https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",i={g_tk:5381,inCharset:"utf-8",outCharset:"utf-8",notice:0,format:"jsonp"},n={param:"jsonpCallback"},s="/api/getMusicList",o={rnd:Math.random(),g_tk:1928093487,format:"json",inCharset:"utf-8",outCharset:"utf-8",notice:0,hostUin:0,platform:"yqq",needNewCode:0,categoryId:1e7,sortId:5,sin:0,ein:30},c="https://c.y.qq.com/v8/fcg-bin/v8.fcg",l={channel:"singer",page:"list",key:"all_all_all",pagesize:100,pagenum:1,g_tk:5381,jsonpCallback:"",loginUin:0,hostUin:0,format:"jsonp",inCharset:"utf8",outCharset:"utf-8",notice:0,platform:"yqq",needNewCode:0},u={param:"jsonpCallback",prefix:"GetSingerListCallback"},d="https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",f={g_tk:5381,loginUin:0,hostUin:0,format:"jsonp",inCharset:"utf8",outCharset:"utf-8",notice:0,platform:"yqq",needNewCode:0,order:"listen",begin:0,num:30,songstatus:1},h={param:"jsonpCallback",prefix:"MusicJsonCallbacksinger_track"},m={g_tk:1928093487,inCharset:"utf-8",outCharset:"utf-8",notice:0,format:"jsonp"},p={param:"jsonpCallback"},g=0},Vbaa:function(e,t,r){r("MjDi");var a=r("VU/8")(r("RCo6"),r("xR+2"),"data-v-4ec5b87e",null);e.exports=a.exports},WFpZ:function(e,t,r){t=e.exports=r("FZ+f")(!1),t.push([e.i,".loading[data-v-b77683d6]{position:relative;z-index:121212;margin:.133333rem}.loading .loading-wrap[data-v-b77683d6]{width:100%;text-align:center}.loading .loading-wrap img[data-v-b77683d6]{width:.666667rem;height:.666667rem}.loading .loading-wrap .info[data-v-b77683d6]{font-size:.373333rem}",""])},Zrlr:function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},"c/Tr":function(e,t,r){e.exports={default:r("5zde"),__esModule:!0}},"d+Lw":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"loading",props:{show:{type:Boolean,default:!0},title:{type:String,default:"玩命加载中..."}}}},eEau:function(e,t,r){t=e.exports=r("FZ+f")(!1),t.push([e.i,".search[data-v-4ec5b87e]{overflow:hidden;top:1.066667rem;left:0;bottom:0;right:0;position:fixed}.search .scroll-box[data-v-4ec5b87e]{overflow:hidden;position:fixed;top:1.866667rem;bottom:0}.search .hot-search-wrap[data-v-4ec5b87e]{margin:0 .133333rem}.search .hot-search-wrap .title[data-v-4ec5b87e]{margin:.266667rem .133333rem;color:rgba(0,0,0,.6);font-size:.373333rem}.search .hot-search-wrap .hot-key[data-v-4ec5b87e]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.search .hot-search-wrap .hot-key .item[data-v-4ec5b87e]{font-size:.373333rem;padding:.133333rem;margin:.133333rem;background:#fff;border-radius:.066667rem}.search .search-history[data-v-4ec5b87e]{position:relative;margin:.266667rem}.search .search-history .search-history-title[data-v-4ec5b87e]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:.533333rem;font-size:.373333rem;color:#000}.search .search-history .search-history-title .text[data-v-4ec5b87e]{-webkit-box-flex:1;-ms-flex:1;flex:1}.search .search-history .search-history-title .clear .icon-clear[data-v-4ec5b87e]{font-size:.373333rem;color:#000}",""])},fBQ2:function(e,t,r){"use strict";var a=r("evD5"),i=r("X8DO");e.exports=function(e,t,r){t in e?a.f(e,t,i(0,r)):e[t]=r}},gqNS:function(e,t,r){t=e.exports=r("FZ+f")(!1),t.push([e.i,".suggest-wrap[data-v-41c7db46]{position:fixed;overflow:hidden;top:1.066667rem;margin-top:.8rem;left:0;right:0;bottom:0}.suggest-wrap .suggest-list[data-v-41c7db46]{overflow:hidden;padding:0 .266667rem}.suggest-wrap .suggest-list .suggest-item[data-v-41c7db46]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:.266667rem 0}.suggest-wrap .suggest-list .icon[data-v-41c7db46]{width:.666667rem;line-height:1.5;font-size:.373333rem}.suggest-wrap .suggest-list .icon [class^=icon-][data-v-41c7db46]{color:#000}.suggest-wrap .suggest-list .name[data-v-41c7db46]{-webkit-box-flex:1;-ms-flex:1;flex:1;font-size:.373333rem;color:#000;overflow:hidden}.suggest-wrap .suggest-list .result[data-v-41c7db46]{text-align:center;padding:.266667rem}.suggest-wrap .suggest-list .loading-wrap[data-v-41c7db46]{height:.666667rem;margin-bottom:.266667rem}.suggest-wrap .no-result-wrapper[data-v-41c7db46]{position:absolute;width:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}",""])},qZJc:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={components:{},data:function(){return{showFlag:!1}},props:{text:{type:String,default:"确认清空吗"},cancelBtnText:{type:String,default:"取消"},confirmBtnText:{type:String,default:"确定"}},watch:{},methods:{show:function(){this.showFlag=!0},hide:function(){this.showFlag=!1},confirm:function(){this.showFlag=!1,this.$emit("confirm")},cancel:function(){this.showFlag=!1,this.$emit("cancel")}},computed:{},created:function(){},mounted:function(){},destroyed:function(){}}},qyJz:function(e,t,r){"use strict";var a=r("+ZMJ"),i=r("kM2E"),n=r("sB3e"),s=r("msXi"),o=r("Mhyx"),c=r("QRG4"),l=r("fBQ2"),u=r("3fs2");i(i.S+i.F*!r("dY0y")(function(e){Array.from(e)}),"Array",{from:function(e){var t,r,i,d,f=n(e),h="function"==typeof this?this:Array,m=arguments.length,p=m>1?arguments[1]:void 0,g=void 0!==p,v=0,A=u(f);if(g&&(p=a(p,m>2?arguments[2]:void 0,2)),void 0==A||h==Array&&o(A))for(t=c(f.length),r=new h(t);t>v;v++)l(r,v,g?p(f[v],v):f[v]);else for(d=A.call(f),r=new h;!(i=d.next()).done;v++)l(r,v,g?s(d,p,[i.value,v],!0):i.value);return r.length=v,r}})},rAZQ:function(e,t,r){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"loading"},[a("div",{staticClass:"loading-wrap"},[a("img",{attrs:{src:r("Lcvq")}}),e._v(" "),a("div",{staticClass:"info"},[e._v(e._s(e.title))])])])},staticRenderFns:[]}},s1cF:function(e,t,r){t=e.exports=r("FZ+f")(!1),t.push([e.i,".confirm[data-v-8362a2ce]{position:fixed;top:0;left:0;right:0;bottom:0;z-index:998;background-color:rgba(0,0,0,.3)}.confirm.confirm-fade-enter-active[data-v-8362a2ce]{-webkit-animation:confirm-fadein .3s;animation:confirm-fadein .3s}.confirm.confirm-fade-enter-active .confirm-content[data-v-8362a2ce]{-webkit-animation:confirm-zoom .3s;animation:confirm-zoom .3s}.confirm .confirm-wrapper[data-v-8362a2ce]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:999}.confirm .confirm-wrapper .confirm-content[data-v-8362a2ce]{width:6.666667rem;border-radius:.173333rem;background:#fff}.confirm .confirm-wrapper .confirm-content .text[data-v-8362a2ce]{padding:.253333rem .2rem;line-height:1.5;text-align:center;font-size:.373333rem;color:#000}.confirm .confirm-wrapper .confirm-content .operate[data-v-8362a2ce]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;font-size:.373333rem}.confirm .confirm-wrapper .confirm-content .operate .operate-btn[data-v-8362a2ce]{-webkit-box-flex:1;-ms-flex:1;flex:1;line-height:2;padding:.133333rem 0;border-top:.013333rem solid rgba(0,0,0,.3);color:#000}.confirm .confirm-wrapper .confirm-content .operate .operate-btn.left[data-v-8362a2ce]{border-right:.013333rem solid rgba(0,0,0,.3)}@-webkit-keyframes confirm-fadein{0%{opacity:0}to{opacity:1}}@keyframes confirm-fadein{0%{opacity:0}to{opacity:1}}@-webkit-keyframes confirm-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.1);transform:scale(1.1)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.1);transform:scale(1.1)}to{-webkit-transform:scale(1);transform:scale(1)}}",""])},"u7k+":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"search-list",data:function(){return{}},props:{searches:{type:Array,default:[]}},watch:{},methods:{selectItem:function(e){this.$emit("select",e)},deleteOne:function(e){this.$emit("delete",e)}}}},wxAW:function(e,t,r){"use strict";t.__esModule=!0;var a=r("C4MV"),i=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,i.default)(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}()},"xR+2":function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"search"},[r("div",{staticClass:"search-box-wrap"},[r("search-box",{ref:"search",on:{query:e.query}})],1),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.queryData,expression:"queryData"}],staticClass:"suggest-wrap"},[r("Suggest",{attrs:{query:e.queryData},on:{listScroll:e.blurInput}})],1),e._v(" "),r("scroll",{ref:"scrollRef",staticClass:"scroll-box",attrs:{data:e.scrollData}},[r("div",{directives:[{name:"show",rawName:"v-show",value:!e.queryData,expression:"!queryData"}],staticClass:"hot-search-wrap"},[r("p",{staticClass:"title"},[e._v("热门搜索")]),e._v(" "),r("ul",{staticClass:"hot-key"},e._l(e.hotkey,function(t){return r("li",{key:t.id,staticClass:"item",on:{click:function(r){r.stopPropagation(),e.addQuery(t.k)}}},[e._v(e._s(t.k))])})),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.searchHistory.length,expression:"searchHistory.length"}],staticClass:"search-history"},[r("h1",{staticClass:"search-history-title"},[r("span",{staticClass:"text"},[e._v("搜索历史")]),e._v(" "),r("span",{staticClass:"clear"},[r("i",{staticClass:"icon-clear",on:{click:e.showConfirm}})])]),e._v(" "),r("search-list",{attrs:{searches:e.searchHistory},on:{select:e.addQuery,delete:e.deleteItem}})],1)])])],1),e._v(" "),r("confirm",{ref:"confirmRef",on:{confirm:e.confirm,cancel:e.cancel}}),e._v(" "),r("router-view")],1)},staticRenderFns:[]}},zCc6:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition",{attrs:{name:"confirm-fade"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.showFlag,expression:"showFlag"}],staticClass:"confirm",on:{click:function(e){e.stopPropagation()}}},[r("div",{staticClass:"confirm-wrapper"},[r("div",{staticClass:"confirm-content"},[r("p",{staticClass:"text"},[e._v(e._s(e.text))]),e._v(" "),r("div",{staticClass:"operate"},[r("div",{staticClass:"operate-btn left",on:{click:e.confirm}},[e._v(e._s(e.confirmBtnText))]),e._v(" "),r("div",{staticClass:"operate-btn",on:{click:e.cancel}},[e._v(e._s(e.cancelBtnText))])])])])])])},staticRenderFns:[]}},"zv+q":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("Gu7T"),i=r.n(a),n=r("Dd8w"),s=r.n(n),o=r("NYxO"),c=r("8stH"),l=r("T452"),u=r("PvFA"),d=r("0aAL"),f=r("zu6c"),h=r.n(f),m=r("F4+m"),p=r("9Nno"),g=r.n(p);t.default={mixins:[m.a],data:function(){return{page:1,perpage:20,result:[],pullUp:!0,loadMore:!0,loadEnd:!0,beforeScroll:!0}},props:{query:{type:String,default:""},showSinger:{type:Boolean,default:!0}},watch:{query:function(e){this.resetQuery(),e&&this.search()}},methods:s()({},r.i(o.c)({setSinger:"SET_SINGER"}),r.i(o.d)(["insertSong"]),{search:function(){var e=this;r.i(c.b)(this.query,this.page,this.showSinger,this.perpage).then(function(t){t.code===l.d&&(e.sloveResult(t.data).length,e.result=[].concat(i()(e.result),i()(e.sloveResult(t.data))),e.page++)})},searchMoreData:function(){this.search()},resetQuery:function(){this.result=[],this.page=1},sloveResult:function(e){var t=[];return e.zhida&&e.zhida.singerid&&t.push(s()({},e.zhida,{type:"singer"})),e.song&&(t=t.concat(this._normalizeSongs(e.song.list))),t},_normalizeSongs:function(e){var t=[];return e.forEach(function(e){e.songid&&e.albummid&&r.i(u.a)(e).then(function(e){t.push(e)})}),t},getIconCls:function(e){return"singer"===e.type?"icon-mine":"icon-music"},getDisplayName:function(e){return"singer"===e.type?e.singername:e.name+"-"+e.singer},selectItem:function(e){if("singer"===e.type){var t=new d.a({id:e.singermid,name:e.singername});this.setSinger(t),this.$router.push({path:"/search/"+t.id})}else this.insertSong(e);this.$emit("select",e)},handlePlayList:function(e){var t=document.getElementsByClassName("mini-player")[0],r=getComputedStyle(t).height,a=e.length>0?r:"";this.$refs.scrollWrap.$el.style.bottom=a,this.$refs.scrollWrap.refresh()},listScroll:function(){this.$emit("listScroll")}}),computed:{},components:{Scroll:h.a,Loading:g.a}}}});
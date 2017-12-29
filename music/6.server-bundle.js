exports.ids = [6];
exports.modules = {

/***/ 468:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(520)

var Component = __webpack_require__(34)(
  /* script */
  __webpack_require__(499),
  /* template */
  __webpack_require__(535),
  /* scopeId */
  "data-v-5756dcc5",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return recommendUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return commonParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return recommendCptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return musicListUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return musicListParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return singerListUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return singerListParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return singetListOpts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return singerDetailUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return singerDetailParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return singetDetailOpts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return commonParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ERR_OK; });
// 轮播图
var recommendUrl = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';
var commonParam = {
	g_tk: 5381,
	inCharset: 'utf-8',
	outCharset: 'utf-8',
	notice: 0,
	format: 'jsonp'
};
var recommendCptions = {
	param: 'jsonpCallback'

	// 推荐歌单
};var musicListUrl = '/api/getMusicList';
var musicListParam = {
	rnd: Math.random(),
	g_tk: 1928093487,
	format: 'json',
	inCharset: 'utf-8',
	outCharset: 'utf-8',
	notice: 0,
	hostUin: 0,
	platform: 'yqq',
	needNewCode: 0,
	categoryId: 10000000,
	sortId: 5,
	sin: 0,
	ein: 30

	// 歌手列表
};var singerListUrl = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg';
var singerListParam = {
	channel: 'singer',
	page: 'list',
	key: 'all_all_all',
	pagesize: 100,
	pagenum: 1,
	g_tk: 5381,
	jsonpCallback: '',
	loginUin: 0,
	hostUin: 0,
	format: 'jsonp',
	inCharset: 'utf8',
	outCharset: 'utf-8',
	notice: 0,
	platform: 'yqq',
	needNewCode: 0
};
var singetListOpts = {
	param: 'jsonpCallback',
	prefix: 'GetSingerListCallback'

	// singerDetail
};var singerDetailUrl = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg';
var singerDetailParam = {
	g_tk: 5381,
	loginUin: 0,
	hostUin: 0,
	format: 'jsonp',
	inCharset: 'utf8',
	outCharset: 'utf-8',
	notice: 0,
	platform: 'yqq',
	needNewCode: 0,
	order: 'listen',
	begin: 0,
	num: 30,
	songstatus: 1
};

var singetDetailOpts = {
	param: 'jsonpCallback',
	prefix: 'MusicJsonCallbacksinger_track'
};

var commonParams = {
	g_tk: 1928093487,
	inCharset: 'utf-8',
	outCharset: 'utf-8',
	notice: 0,
	format: 'jsonp'
};
var options = {
	param: 'jsonpCallback'
	// 成功状态码
};var ERR_OK = 0;

/***/ }),

/***/ 475:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(479)

var Component = __webpack_require__(34)(
  /* script */
  __webpack_require__(476),
  /* template */
  __webpack_require__(481),
  /* scopeId */
  "data-v-b77683d6",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'loading',
  props: {
    show: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: '\u73A9\u547D\u52A0\u8F7D\u4E2D...'
    }
  }
});

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = jsonp;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jsonp__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jsonp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jsonp__);


function jsonp(url, data, opts) {
	url = url.indexOf('?') !== -1 ? url : url + '?' + param(data);
	return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
		__WEBPACK_IMPORTED_MODULE_1_jsonp___default()(url, opts, function (error, data) {
			if (!error) {
				resolve(data);
			} else {
				reject(error);
			}
		});
	});
}
function param(data) {
	if (!data) return '';
	var url = '';
	for (var k in data) {
		url += '&' + k + '=' + data[k];
	}
	return url.substring(1);
}

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return playlistMixin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuex__);


var playlistMixin = {
	computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["mapGetters"])(['playList'])),
	mounted: function mounted() {
		this.handlePlayList(this.playList);
	},
	activated: function activated() {
		this.handlePlayList(this.playList);
	},

	watch: {
		playList: function playList(newVal) {
			this.handlePlayList(newVal);
		}
	},
	methods: {
		handlePlayList: function handlePlayList() {
			throw new Error('组件需要使用 handlePlayList');
		}
	}
};

/***/ }),

/***/ 479:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: \"extract-text-webpack-plugin\" loader is used without the corresponding plugin, refer to https://github.com/webpack/extract-text-webpack-plugin for the usage example\n    at Object.module.exports.pitch (C:\\Users\\ff\\code\\Music-Player\\node_modules\\extract-text-webpack-plugin\\loader.js:25:9)");

/***/ }),

/***/ 480:
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,R0lGODlhZABkAKIEAN7e3rq6uv///5mZmQAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpBRjA4RUZDMDI3MjA2ODExODA4M0Y1OTQyMzVDRDM3MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCMzE0Rjk3NDdDRTgxMUUzOUJCRjk0NjAxMUE1NzRBMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCMzE0Rjk3MzdDRTgxMUUzOUJCRjk0NjAxMUE1NzRBMCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDVBMTZDQjczOTIwNjgxMTgwODNGNTk0MjM1Q0QzNzMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUYwOEVGQzAyNzIwNjgxMTgwODNGNTk0MjM1Q0QzNzMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+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"

/***/ }),

/***/ 481:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    staticClass: "loading"
  }, [_c('div', {
    staticClass: "loading-wrap"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(480)
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_vm._v(_vm._s(_vm.title))])])])
},staticRenderFns: []}

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = getTopList;
/* harmony export (immutable) */ __webpack_exports__["a"] = getMusicList;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_common_js_jsonp__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(474);




function getTopList() {
  var url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg';

  var data = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, __WEBPACK_IMPORTED_MODULE_2__config__["g" /* commonParams */], {
    uin: 0,
    needNewCode: 1,
    platform: 'h5'
  });

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_common_js_jsonp__["a" /* default */])(url, data, __WEBPACK_IMPORTED_MODULE_2__config__["h" /* options */]);
}

function getMusicList(topid) {
  var url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg';

  var data = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, __WEBPACK_IMPORTED_MODULE_2__config__["g" /* commonParams */], {
    topid: topid,
    needNewCode: 1,
    uin: 0,
    tpl: 3,
    page: 'detail',
    type: 'top',
    platform: 'h5'
  });

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_common_js_jsonp__["a" /* default */])(url, data, __WEBPACK_IMPORTED_MODULE_2__config__["h" /* options */]);
}

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_api_rank__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_containers_Loading__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_containers_Loading___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_containers_Loading__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_containers_Scroll__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_containers_Scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_containers_Scroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_api_config__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_common_js_mixin__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vuex__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_vuex__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_5_common_js_mixin__["a" /* playlistMixin */]],
  components: {
    Scroll: __WEBPACK_IMPORTED_MODULE_3_containers_Scroll___default.a,
    Loading: __WEBPACK_IMPORTED_MODULE_2_containers_Loading___default.a
  },
  data: function data() {
    return {
      toplist: []
    };
  },

  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
    _getTopList: function _getTopList() {
      var _this = this;

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_api_rank__["b" /* getTopList */])().then(function (res) {
        if (res.code === __WEBPACK_IMPORTED_MODULE_4_api_config__["d" /* ERR_OK */]) {
          _this.toplist = res.data.topList;
        }
      });
    },
    loadImg: function loadImg() {},
    handlePlayList: function handlePlayList(playList) {
      var dom = document.getElementsByClassName('mini-player')[0];
      var height = getComputedStyle(dom)['height'];
      var bottom = playList.length > 0 ? height : '';
      this.$refs.rankRef.style.bottom = bottom;
      this.$refs.scroll.refresh();
    },
    selectItem: function selectItem(item) {
      this.$router.push('/rank/' + item.id);
      this.setTopList(item);
    }
  }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_vuex__["mapMutations"])({
    setTopList: 'SET_TOP_LIST'
  })),
  created: function created() {
    this._getTopList();
  }
});

/***/ }),

/***/ 520:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: \"extract-text-webpack-plugin\" loader is used without the corresponding plugin, refer to https://github.com/webpack/extract-text-webpack-plugin for the usage example\n    at Object.module.exports.pitch (C:\\Users\\ff\\code\\Music-Player\\node_modules\\extract-text-webpack-plugin\\loader.js:25:9)");

/***/ }),

/***/ 535:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "rankRef",
    staticClass: "rank"
  }, [_c('scroll', {
    ref: "scroll",
    staticClass: "toplist",
    attrs: {
      "data": _vm.toplist
    }
  }, [_c('ul', _vm._l((_vm.toplist), function(item) {
    return _c('li', {
      key: item.id,
      staticClass: "item",
      on: {
        "click": function($event) {
          _vm.selectItem(item)
        }
      }
    }, [_c('div', {
      staticClass: "icon"
    }, [_c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: (item.picUrl),
        expression: "item.picUrl"
      }],
      on: {
        "load": _vm.loadImg
      }
    })]), _vm._v(" "), _c('ul', {
      staticClass: "songlist"
    }, _vm._l((item.songList), function(song, index) {
      return _c('li', {
        key: song.id,
        staticClass: "song"
      }, [_c('span', [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c('span', [_vm._v(_vm._s(song.songname))]), _vm._v(" "), _c('span', {
        staticClass: "singername"
      }, [_vm._v(" - " + _vm._s(song.singername))])])
    }))])
  }))]), _vm._v(" "), _c('loading', {
    attrs: {
      "show": !_vm.toplist.length
    }
  }), _vm._v(" "), _c('router-view')], 1)
},staticRenderFns: []}

/***/ })

};;
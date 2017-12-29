exports.ids = [4];
exports.modules = {

/***/ 469:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(515)

var Component = __webpack_require__(34)(
  /* script */
  __webpack_require__(500),
  /* template */
  __webpack_require__(530),
  /* scopeId */
  "data-v-113deb19",
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

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getRecommend;
/* harmony export (immutable) */ __webpack_exports__["b"] = getMusicList;
/* harmony export (immutable) */ __webpack_exports__["c"] = getSongList;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_common_js_jsonp__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(474);




function getRecommend(url, data, opts) {
	return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_common_js_jsonp__["a" /* default */])(url, data, opts);
}
function getMusicList(url, data, opts) {
	return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get(url, {
		params: data
	});
}
function getSongList(url, disstid, opt) {
	var data = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, __WEBPACK_IMPORTED_MODULE_3__config__["g" /* commonParams */], {
		disstid: disstid,
		type: 1,
		json: 1,
		utf8: 1,
		onlysong: 0,
		platform: 'yqq',
		hostUin: 0,
		needNewCode: 0,
		format: 'jsonp'
	});
	return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get(url, {
		params: data
	});
}

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_api_recommend__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_api_config__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_containers_Slider__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_containers_Slider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_containers_Slider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_containers_Loading__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_containers_Loading___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_containers_Loading__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_containers_Scroll__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_containers_Scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_containers_Scroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_better_scroll__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_better_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_better_scroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_axios__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_common_js_mixin__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_vuex__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_vuex__);

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
  name: 'recommend',
  mixins: [__WEBPACK_IMPORTED_MODULE_8_common_js_mixin__["a" /* playlistMixin */]],
  data: function data() {
    return {
      picData: [],
      songList: []
    };
  },

  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
    handlePlayList: function handlePlayList(playList) {
      var dom = document.getElementsByClassName('mini-player')[0];
      var height = getComputedStyle(dom)['height'];
      var bottom = playList.length > 0 ? height : '';
      this.$refs.scrollWrap.$el.style.bottom = bottom;
      this.$refs.scrollWrap.refresh();
    },
    loadImage: function loadImage() {
      if (!this.checkLoad) {
        this.checkLoad = true;
      } else {
        return;
      }
      this.$refs.scrollWrap.refresh();
    },
    selectItem: function selectItem(item) {
      this.$router.push({
        path: '/recommend/' + item.dissid
      });
      this.setDisc(item);
    }
  }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_vuex__["mapMutations"])({
    setDisc: 'SET_DISC'
  })),
  preFetch: function preFetch() {
    var _this = this;

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_api_recommend__["a" /* getRecommend */])(__WEBPACK_IMPORTED_MODULE_2_api_config__["a" /* recommendUrl */], __WEBPACK_IMPORTED_MODULE_2_api_config__["b" /* commonParam */], __WEBPACK_IMPORTED_MODULE_2_api_config__["c" /* recommendCptions */]).then(function (res) {
      if (res.code === __WEBPACK_IMPORTED_MODULE_2_api_config__["d" /* ERR_OK */]) {
        _this.picData = res.data.slider;
      }
    });
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_api_recommend__["b" /* getMusicList */])(__WEBPACK_IMPORTED_MODULE_2_api_config__["e" /* musicListUrl */], __WEBPACK_IMPORTED_MODULE_2_api_config__["f" /* musicListParam */]).then(function (res) {
      if (res.data.code === __WEBPACK_IMPORTED_MODULE_2_api_config__["d" /* ERR_OK */]) {
        _this.songList = res.data.data.list;
      }
    }).catch(function (error) {
      console.log('代理失败，请求假数据');
      setTimeout(function () {
        _this.songList = __webpack_require__(541).data.list;
      }, 2000);
    });
  },

  components: {
    Slider: __WEBPACK_IMPORTED_MODULE_3_containers_Slider___default.a,
    Loading: __WEBPACK_IMPORTED_MODULE_4_containers_Loading___default.a,
    Scroll: __WEBPACK_IMPORTED_MODULE_5_containers_Scroll___default.a
  }
});

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_better_scroll__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_better_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_better_scroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_common_js_dom__ = __webpack_require__(117);
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



var COMPONENT_NAME = 'slide';
/* harmony default export */ __webpack_exports__["default"] = ({
  name: COMPONENT_NAME,
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 1000
    },
    showDot: {
      type: Boolean,
      default: true
    },
    click: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      dots: [],
      currentIndex: 0
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.update();
    window.addEventListener('resize', function () {
      if (!_this.slide || !_this.slide.enabled) {
        return;
      }
      clearTimeout(_this.resizeTimer);
      _this.resizeTimer = setTimeout(function () {
        if (_this.slide.isInTransition) {
          _this._onScrollEnd();
        } else {
          if (_this.autoPlay) {
            _this._play();
          }
        }
        _this.refresh();
      }, 60);
    });
  },
  activated: function activated() {
    if (!this.slide) {
      return;
    }
    this.slide.enable();
    var pageIndex = this.slide.getCurrentPage().pageX;
    this.slide.goToPage(pageIndex, 0, 0);
    this.currentIndex = pageIndex;
    if (this.autoPlay) {
      this._play();
    }
  },
  deactivated: function deactivated() {
    this.slide.disable();
    clearTimeout(this.timer);
  },
  beforeDestroy: function beforeDestroy() {
    this.slide.disable();
    clearTimeout(this.timer);
  },

  methods: {
    update: function update() {
      var _this2 = this;

      if (this.slide) {
        this.slide.destroy();
      }
      this.$nextTick(function () {
        _this2.init();
      });
    },
    refresh: function refresh() {
      this._setSlideWidth(true);
      this.slide.refresh();
    },
    next: function next() {
      this.slide.next();
    },
    init: function init() {
      clearTimeout(this.timer);
      this.currentIndex = 0;
      this._setSlideWidth();
      if (this.showDot) {
        this._initDots();
      }
      this._initSlide();
      if (this.autoPlay) {
        this._play();
      }
    },
    _setSlideWidth: function _setSlideWidth(isResize) {
      this.children = this.$refs.sliderGroup.children;
      var width = 0;
      var slideWidth = this.$refs.slider.clientWidth;
      for (var i = 0; i < this.children.length; i++) {
        var child = this.children[i];
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_common_js_dom__["b" /* addClass */])(child, 'slide-item');
        child.style.width = slideWidth + 'px';
        width += slideWidth;
      }
      if (this.loop && !isResize) {
        width += 2 * slideWidth;
      }
      this.$refs.sliderGroup.style.width = width + 'px';
    },
    _initSlide: function _initSlide() {
      var _this3 = this;

      this.slide = new __WEBPACK_IMPORTED_MODULE_0_better_scroll___default.a(this.$refs.slider, {
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: {
          loop: this.loop,
          threshold: 0.3,
          speed: 400
        },
        bounce: false,
        click: this.click
      });
      this.slide.on('scrollEnd', this._onScrollEnd);
      this.slide.on('touchend', function () {
        if (_this3.autoPlay) {
          _this3._play();
        }
      });
      this.slide.on('beforeScrollStart', function () {
        if (_this3.autoPlay) {
          clearTimeout(_this3.timer);
        }
      });
    },
    _onScrollEnd: function _onScrollEnd() {
      var pageIndex = this.slide.getCurrentPage().pageX;
      this.currentIndex = pageIndex;
      if (this.autoPlay) {
        this._play();
      }
    },
    _initDots: function _initDots() {
      this.dots = new Array(this.children.length);
    },
    _play: function _play() {
      var _this4 = this;

      clearTimeout(this.timer);
      this.timer = setTimeout(function () {
        _this4.slide.next();
      }, this.interval);
    }
  }
});

/***/ }),

/***/ 515:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: \"extract-text-webpack-plugin\" loader is used without the corresponding plugin, refer to https://github.com/webpack/extract-text-webpack-plugin for the usage example\n    at Object.module.exports.pitch (C:\\Users\\ff\\code\\Music-Player\\node_modules\\extract-text-webpack-plugin\\loader.js:25:9)");

/***/ }),

/***/ 524:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: \"extract-text-webpack-plugin\" loader is used without the corresponding plugin, refer to https://github.com/webpack/extract-text-webpack-plugin for the usage example\n    at Object.module.exports.pitch (C:\\Users\\ff\\code\\Music-Player\\node_modules\\extract-text-webpack-plugin\\loader.js:25:9)");

/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(524)

var Component = __webpack_require__(34)(
  /* script */
  __webpack_require__(507),
  /* template */
  __webpack_require__(539),
  /* scopeId */
  "data-v-b01bcb84",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 530:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "recommend"
  }, [_c('scroll', {
    ref: "scrollWrap",
    staticClass: "scroll-wrapper",
    attrs: {
      "data": _vm.songList
    }
  }, [_c('div', [_c('div', {
    staticClass: "slider-wrap"
  }, [(_vm.picData.length) ? _c('slider', _vm._l((_vm.picData), function(i) {
    return _c('div', {
      key: i.id,
      staticClass: "pic-list"
    }, [_c('a', {
      attrs: {
        "href": i.linkUrl
      }
    }, [_c('img', {
      attrs: {
        "src": i.picUrl,
        "alt": ""
      },
      on: {
        "load": _vm.loadImage
      }
    })])])
  })) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "recommend-list"
  }, [_c('div', {
    staticClass: "list-wrap"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("热门歌单推荐")]), _vm._v(" "), _c('ul', {
    ref: "content",
    staticClass: "content"
  }, _vm._l((_vm.songList), function(i) {
    return _c('li', {
      key: i.id,
      staticClass: "content-item",
      on: {
        "click": function($event) {
          _vm.selectItem(i)
        }
      }
    }, [_c('div', {
      staticClass: "list-pic"
    }, [_c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: (i.imgurl),
        expression: "i.imgurl"
      }],
      attrs: {
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "list-content"
    }, [_c('h2', {
      staticClass: "name"
    }, [_vm._v(_vm._s(i.creator.name))]), _vm._v(" "), _c('p', {
      staticClass: "dissname"
    }, [_vm._v(_vm._s(i.dissname))])])])
  }))]), _vm._v(" "), _c('div', {
    staticClass: "content-loading-wrap"
  }, [_c('loading', {
    attrs: {
      "show": !_vm.songList.length
    }
  })], 1)])])]), _vm._v(" "), _c('router-view')], 1)
},staticRenderFns: []}

/***/ }),

/***/ 539:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "slider",
    staticClass: "slider"
  }, [_c('div', {
    ref: "sliderGroup",
    staticClass: "slider-group clearfix"
  }, [_vm._t("default")], 2), _vm._v(" "), _c('div', {
    staticClass: "dots"
  }, _vm._l((_vm.dots), function(i, index) {
    return _c('span', {
      key: i,
      staticClass: "dots-item",
      class: {
        'active': _vm.currentIndex === index
      }
    })
  }))])
},staticRenderFns: []}

/***/ }),

/***/ 541:
/***/ (function(module, exports) {

module.exports = {"code":0,"subcode":0,"message":"","default":0,"data":{"uin":0,"categoryId":10000000,"sortId":5,"sum":24354,"sin":0,"ein":30,"list":[{"dissid":"2977288849","createtime":"2017-09-06","commit_time":"2017-09-06","dissname":"给男/女朋友的惊喜小视频专用可爱BGM","imgurl":"http://p.qpic.cn/music_cover/WQluEbVjuA26qnfdbicpYcOeXnJI8TjJuKIlibYt1Mp8VMiaTSVYlibZyg/600?n=1","introduction":"","listennum":377763,"score":0,"version":0,"creator":{"type":0,"qq":2766689457,"encrypt_uin":"owSs7wCFNKvk7z**","name":"one day","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"1172888559","createtime":"2017-10-12","commit_time":"2017-10-12","dissname":"[钢琴独奏]精选钢琴大师的指尖艺术作品","imgurl":"http://p.qpic.cn/music_cover/zUda023LKyhbpRQOOK2yY8fxEiaAVQabIN9BibP8fCT5C5icBC5O7hNWA/600?n=1","introduction":"","listennum":49012,"score":0,"version":0,"creator":{"type":0,"qq":872386391,"encrypt_uin":"NeSAoicsoiE5","name":"良","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"878357702","createtime":"2017-08-01","commit_time":"2017-08-01","dissname":"乡村入门精选：踏进流行的热情乡土","imgurl":"http://p.qpic.cn/music_cover/Xh9w3XT51TT9sbShMd8OrDR6QoDJFzucDWx7CvaqowsnSzZflpVrGg/600?n=1","introduction":"","listennum":39156,"score":0,"version":0,"creator":{"type":0,"qq":3313854020,"encrypt_uin":"oio5oick7enAon**","name":"万利达李宗盛","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"2074769161","createtime":"2017-08-31","commit_time":"2017-08-31","dissname":"200位古风歌手：繁华落尽，悠悠吟唱千年梦","imgurl":"http://p.qpic.cn/music_cover/zvTEv4nf24OhibNkHicltqWB6oVM8QVJic3htycJnR2fTyWic35QLriaQ8Q/600?n=1","introduction":"","listennum":424881,"score":0,"version":0,"creator":{"type":0,"qq":1134746874,"encrypt_uin":"oK6i7eSP7wcl7n**","name":"鹿泺","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"3578895250","createtime":"2017-08-30","commit_time":"2017-08-30","dissname":"经典舞曲手机铃声：90后的复刻回忆","imgurl":"http://p.qpic.cn/music_cover/YEqzCcJKAOwd4o0ib8yGnjl1EhRBC75PcRiam5qzqZGEww9ApDVhXiahA/600?n=1","introduction":"","listennum":1748948,"score":0,"version":0,"creator":{"type":0,"qq":2791489219,"encrypt_uin":"owSqoKvFNK-5Nv**","name":"Apple","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"2380523292","createtime":"2017-09-02","commit_time":"2017-09-02","dissname":"『游戏必备v5』跟着节奏风骚走位","imgurl":"http://p.qpic.cn/music_cover/0GgOOrIBQ14wNzmVraZQ5S4iakHX2RvAyr3MQfSlw5mze9Kywgu0zqw/600?n=1","introduction":"","listennum":326448,"score":0,"version":0,"creator":{"type":0,"qq":1209430845,"encrypt_uin":"oK-zNKvioecP7v**","name":"DesTiny","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"3277030317","createtime":"2017-09-01","commit_time":"2017-09-01","dissname":"迷幻妖异，融合传统的日式和风电子","imgurl":"http://p.qpic.cn/music_cover/rbKoTQdkPFC5FFC95YibQLw8jd4O8mPnjX3SM2geCLZlAHrwG3LxO8Q/600?n=1","introduction":"","listennum":63223,"score":0,"version":0,"creator":{"type":0,"qq":2523668458,"encrypt_uin":"ow4AoiCsNevkNn**","name":"我是个讲道理的人","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"2385292311","createtime":"2017-10-08","commit_time":"2017-10-08","dissname":"『国产ACGN』助力国漫二次元","imgurl":"http://p.qpic.cn/music_cover/y0Elj3m25QhKsCrLguvkxz6G2lWc4sZpAibubicmqvaD1AFr7t5csKVQ/600?n=1","introduction":"","listennum":12288,"score":0,"version":0,"creator":{"type":0,"qq":3013409005,"encrypt_uin":"oin5oivzNKnz7v**","name":"經歷而後悟","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"2077631092","createtime":"2017-09-25","commit_time":"2017-09-25","dissname":"明明是三个人的电影，我却始终不能有姓名","imgurl":"http://p.qpic.cn/music_cover/MmYVUgTeVyHFpPno1OPGpj6iaicqiaKrr0vBiby6QUEXbTHPpEr8PzYnjw/600?n=1","introduction":"","listennum":59370,"score":0,"version":0,"creator":{"type":0,"qq":3440241624,"encrypt_uin":"oivPoe-PoKCA7n**","name":"青栀","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"3272834275","createtime":"2017-08-02","commit_time":"2017-08-02","dissname":"α脑波音乐：我爱读书这事Q音都知道了？","imgurl":"http://p.qpic.cn/music_cover/KZXhqWFleib6haUmPFZXatWEEH6hvtsMp7yoOCticm6QCNL1zxkiaOw5g/600?n=1","introduction":"","listennum":762988,"score":0,"version":0,"creator":{"type":0,"qq":2366812118,"encrypt_uin":"owos7wc5ow65Nn**","name":"幸福的小麻花","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"872916104","createtime":"2017-10-14","commit_time":"2017-10-14","dissname":"「古风守护」眉间深情万种，为你将痴情奉送","imgurl":"http://p.qpic.cn/music_cover/Msn9lVmRosDqBMvdKxgdYFJC9fEicwX5KIQFaEKwDLMxiaAbiaN1Pdn3g/600?n=1","introduction":"","listennum":122260,"score":0,"version":0,"creator":{"type":0,"qq":3148193570,"encrypt_uin":"oi6PNe6qoi4lon**","name":"羁札ღ","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"887986281","createtime":"2017-10-13","commit_time":"2017-10-13","dissname":"欧美|人声电音的迷幻结合，飘浮于自由意境","imgurl":"http://p.qpic.cn/music_cover/Yl4VsPAa0ueibgdH8YtWgUua9SWHuh5xdqzYrA2u0M8RicHa8HHOH0YA/600?n=1","introduction":"","listennum":233276,"score":0,"version":0,"creator":{"type":0,"qq":1240284880,"encrypt_uin":"oK-Poe-F7ecFon**","name":"_","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"3584372898","createtime":"2017-10-12","commit_time":"2017-10-12","dissname":"「日系」ACG小姐姐萌哒哒的声音。","imgurl":"http://p.qpic.cn/music_cover/icBIujFBncERIicrBZpEdWhKGZIjiaSgpDiak7YxiajhK9BstnKficicloXWg/600?n=1","introduction":"","listennum":135165,"score":0,"version":0,"creator":{"type":0,"qq":3318434389,"encrypt_uin":"oio5Nevi7eoFNv**","name":"沐沐°","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"860849241","createtime":"2017-10-11","commit_time":"2017-10-11","dissname":"女嗓恣意媚骨，缠绕在你身体每个部位","imgurl":"http://p.qpic.cn/music_cover/2Y3WKQAztZTdYHa8tvOVibUIPiaHGglAhuWPAicHBZics0auYVt8Q0RD7A/600?n=1","introduction":"","listennum":359222,"score":0,"version":0,"creator":{"type":0,"qq":2043655150,"encrypt_uin":"ownPoiCk7K6kon**","name":"笑望.","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"2347287250","createtime":"2017-10-11","commit_time":"2017-10-11","dissname":"『电音』神级Remix版本背后的优质原作","imgurl":"http://p.qpic.cn/music_cover/iblmVOrNLjCZ0JrmZ8lbbY1ZzicOEjyZmQtgibdXF16HQdU0SaQIEQnicQ/600?n=1","introduction":"","listennum":230670,"score":0,"version":0,"creator":{"type":0,"qq":349787325,"encrypt_uin":"oivq7icloi-k","name":"                                   W","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"1484805318","createtime":"2017-10-11","commit_time":"2017-10-11","dissname":"陶笛精选：笛声悠扬入耳，如清风拂面","imgurl":"http://p.qpic.cn/music_cover/z6iaBQ7jDmibXhEAlvTSQvn2zmeGRc5ricfvfGU0AdEhGysbiaLsbsCUIg/600?n=1","introduction":"","listennum":65340,"score":0,"version":0,"creator":{"type":0,"qq":2507798282,"encrypt_uin":"ow4z7iSqNe-Foc**","name":"尐爷的小妹","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"1484774011","createtime":"2017-10-10","commit_time":"2017-10-10","dissname":"感受现代主义音乐的不协和之美","imgurl":"http://p.qpic.cn/music_cover/3HrmXoaia0gZ82OfbGzYRMVPJs7q8kYVdYfAPhEicC3cVUFiaibtTPAenA/600?n=1","introduction":"","listennum":32860,"score":0,"version":0,"creator":{"type":0,"qq":3448297852,"encrypt_uin":"oivPNe-q7ickoc**","name":"逆境荒野","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"1483145148","createtime":"2017-10-10","commit_time":"2017-10-10","dissname":"记忆辗转成歌，翻阅起曾打动我心的画面","imgurl":"http://p.qpic.cn/music_cover/z6iaBQ7jDmibXhEAlvTSQvn2zmeGRc5ricf2MaeC71b2NurGC1a0o5viaA/600?n=1","introduction":"","listennum":218565,"score":0,"version":0,"creator":{"type":0,"qq":2507798282,"encrypt_uin":"ow4z7iSqNe-Foc**","name":"尐爷的小妹","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"2981709257","createtime":"2017-10-09","commit_time":"2017-10-09","dissname":"湖南卫视《亲爱的·客栈》EPI歌单","imgurl":"http://p.qpic.cn/music_cover/4GmqsNW5RLs5OkaBKCuUkuGq9UBA0fGRReMTY0QRxekcLnWvnuqyIw/600?n=1","introduction":"","listennum":119981,"score":0,"version":0,"creator":{"type":0,"qq":3393043707,"encrypt_uin":"oioqoinPoiSz7z**","name":"亲爱的·客栈","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"1782706146","createtime":"2017-10-09","commit_time":"2017-10-09","dissname":"轻快欧美小曲，放心灵去翱翔","imgurl":"http://p.qpic.cn/music_cover/mys7GjKhFbvuZmDclXhcLDx8gFMYqRnSGicd7DFjVYuqbjDwaIINwyg/600?n=1","introduction":"","listennum":380789,"score":0,"version":0,"creator":{"type":0,"qq":3072661243,"encrypt_uin":"oinlowCsoK-Poz**","name":"倾殇","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"2684054952","createtime":"2017-10-06","commit_time":"2017-10-06","dissname":"永安二胡：传统与流行的碰撞","imgurl":"http://p.qpic.cn/music_cover/x18WZws6trBjMbOiafuKJ1Iq5bUib4Ncto4xFquneUmNoyrAlUJsyWiaw/600?n=1","introduction":"","listennum":31714,"score":0,"version":0,"creator":{"type":0,"qq":761645586,"encrypt_uin":"7iC57wvk7Kcs","name":"。。。","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"2981347512","createtime":"2017-10-06","commit_time":"2017-10-06","dissname":"黑化洛天依:暗黑风格的歌曲忍不住单曲循环!","imgurl":"http://p.qpic.cn/music_cover/GvTlZPtgKT2kHbicm3pM9I65CicEeJsnavDAuO7MnJPXF1SPjunVwLHw/600?n=1","introduction":"","listennum":76644,"score":0,"version":0,"creator":{"type":0,"qq":1147466497,"encrypt_uin":"oK6P7ivs7wvq7z**","name":"✘关于罂粟✘","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"3580031325","createtime":"2017-10-05","commit_time":"2017-10-05","dissname":"愚蠢的地球人，看我用这些歌征服你们！","imgurl":"http://p.qpic.cn/music_cover/r9vkibE8HA9SANiafMrF8aBD0nmahrj2UWibhfst2pK1yYGe84lVuUdeQ/600?n=1","introduction":"","listennum":92721,"score":0,"version":0,"creator":{"type":0,"qq":641995739,"encrypt_uin":"7wv5NKEk7ioq","name":"Mental,","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"886861035","createtime":"2017-10-04","commit_time":"2017-10-04","dissname":"华语绿辑：你还能怎样？当然是选择原谅Ta啊","imgurl":"http://p.qpic.cn/music_cover/2Y3WKQAztZTdYHa8tvOVibUIPiaHGglAhuYD4OVbNIgGib5INI1ltfnOA/600?n=1","introduction":"","listennum":434515,"score":0,"version":0,"creator":{"type":0,"qq":2043655150,"encrypt_uin":"ownPoiCk7K6kon**","name":"笑望.","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"2378265174","createtime":"2017-09-30","commit_time":"2017-09-30","dissname":"Moombahto｜飞行于云端的雷鬼电子","imgurl":"http://p.qpic.cn/music_cover/ZOOOnz3oPT4xraH9DG34rrsXfTBPMzOLcIZmGpa1Mn00zAHsp7y59w/600?n=1","introduction":"","listennum":43703,"score":0,"version":0,"creator":{"type":0,"qq":1550319575,"encrypt_uin":"oK4koeo5NK4l7v**","name":"Chilia Waterhouse","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"1781033639","createtime":"2017-09-30","commit_time":"2017-09-30","dissname":"10月8日|德国长笛演奏家库仑特·雷德尔诞辰","imgurl":"http://p.qpic.cn/music_cover/YtJmdzgRRzMfbpCjYGk3R3hFYsBR26n1Ywp7uDIJziboibbbIpf4h8PQ/600?n=1","introduction":"","listennum":115134,"score":0,"version":0,"creator":{"type":0,"qq":3515059093,"encrypt_uin":"oi457KnkNKnqoz**","name":"古典音乐日历","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"862546123","createtime":"2017-10-10","commit_time":"2017-10-10","dissname":"重低音电子：这些旋律玩的就是心跳","imgurl":"http://p.qpic.cn/music_cover/2Y3WKQAztZTdYHa8tvOVibUIPiaHGglAhu7UBoloko72gMGclRhxNg4A/600?n=1","introduction":"","listennum":409305,"score":0,"version":0,"creator":{"type":0,"qq":2043655150,"encrypt_uin":"ownPoiCk7K6kon**","name":"笑望.","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"1778837129","createtime":"2017-09-29","commit_time":"2017-09-29","dissname":"《实况足球2017》游戏原声大碟","imgurl":"http://p.qpic.cn/music_cover/lxPlsc8V23TCJJthzBJpz0Cl4B53gvHDbLiafAKsThjibJyzZIoib20MA/600?n=1","introduction":"","listennum":19460,"score":0,"version":0,"creator":{"type":0,"qq":781972483,"encrypt_uin":"7ic5NKSA7eci","name":"神似的飞扬","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"1766386139","createtime":"2017-06-15","commit_time":"2017-06-15","dissname":"99位唱见歌手 ：一人一首代表曲","imgurl":"http://p.qpic.cn/music_cover/qH8rLHHhL8O8Iibm56uPzJ9vpPJ9icaI58TuHk6jZia3oAPLqqXJ2zsLA/600?n=1","introduction":"","listennum":5006033,"score":0,"version":0,"creator":{"type":0,"qq":1812948313,"encrypt_uin":"oKc5owEPNeo5oz**","name":"           私に闻いて风i","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"861218535","createtime":"2017-03-31","commit_time":"2017-03-31","dissname":"400位华语民谣歌手，一人一首入耳曲","imgurl":"http://p.qpic.cn/music_cover/Biax4WTSMic4N0bgPWDwUCsx1rlEp4KZOZQrPRJVvVXHsdc9rhPBGh9w/600?n=1","introduction":"","listennum":8902763,"score":0,"version":0,"creator":{"type":0,"qq":1245280330,"encrypt_uin":"oK-P7K-Foeoion**","name":"Aliens","isVip":0,"avatarUrl":"","followflag":0}},{"dissid":"3280389085","createtime":"2017-09-29","commit_time":"2017-09-29","dissname":"听Q音伤感情歌，触碰泪腺，哭干眼泪","imgurl":"http://p.qpic.cn/music_cover/MhQ4bJBPt3Yt5icXyBGNhyLUGsHApnWXXR0wxmHljFmdVJWYa6M8YQg/600?n=1","introduction":"","listennum":2544304,"score":0,"version":0,"creator":{"type":0,"qq":452775188,"encrypt_uin":"7e4A7iSkoKcF","name":"还不是因为你长得不好看","isVip":0,"avatarUrl":"","followflag":0}}]}}

/***/ })

};;
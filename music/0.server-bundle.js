exports.ids = [0];
exports.modules = {

/***/ 470:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(519)

var Component = __webpack_require__(34)(
  /* script */
  __webpack_require__(501),
  /* template */
  __webpack_require__(534),
  /* scopeId */
  "data-v-4ec5b87e",
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

/***/ 482:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createSong;
/* unused harmony export filterSinger */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_api_song__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_api_config__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_js_base64__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_js_base64___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_js_base64__);



// import { getLyric } from '../../api/song'
// import { ERR_OK } from '../../api/config'
// import { Base64 } from 'js-base64'

// export default class Song {
// 	constructor({ id, mid, singer, name, album, duration, image, url }) {
// 		this.id = id
// 		this.mid = mid
// 		this.singer = singer
// 		this.name = name
// 		this.album = album
// 		this.duration = duration
// 		this.image = image
// 		this.url = url
// 	}
// 	getLyric() {
// 		if (this.lyric) {
// 			return Promise.resolve(this.lyric)
// 		}
// 		return new Promise((resolve, reject) => {
// 			getLyric(this.mid).then(res => {
// 				if (res.retcode === ERR_OK) {
// 					resolve((this.lyric = Base64.decode(res.lyric)))
// 				} else {
// 					reject(`no lyric`)
// 				}
// 			})
// 		})
// 	}
// }
// export function createSong({ musicData }) {
// 	return new Song({
// 		image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${
// 			musicData.singer_mid
// 		}.jpg?max_age=2592000`
// 	})
// }




var Song = function () {
  function Song(_ref) {
    var id = _ref.id,
        mid = _ref.mid,
        singer = _ref.singer,
        name = _ref.name,
        album = _ref.album,
        duration = _ref.duration,
        image = _ref.image,
        url = _ref.url;

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Song);

    this.id = id;
    this.mid = mid;
    this.singer = singer;
    this.name = name;
    this.album = album;
    this.duration = duration;
    this.image = image;
    this.url = url;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Song, [{
    key: 'getLyric',
    value: function getLyric() {
      var _this = this;

      if (this.lyric) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve(this.lyric);
      }

      return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_api_song__["a" /* getLyric */])(_this.mid).then(function (res) {
          if (res.retcode === __WEBPACK_IMPORTED_MODULE_4_api_config__["d" /* ERR_OK */]) {
            _this.lyric = __WEBPACK_IMPORTED_MODULE_5_js_base64__["Base64"].decode(res.lyric);
            resolve(_this.lyric);
          } else {
            reject('no lyric');
          }
        });
      });
    }
  }]);

  return Song;
}();

/* unused harmony default export */ var _unused_webpack_default_export = (Song);


function createSong(musicData) {
  return new Song({
    id: musicData.songid,
    mid: musicData.songmid,
    singer: filterSinger(musicData.singer),
    name: musicData.songname,
    album: musicData.albumname,
    duration: musicData.interval,
    image: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000' + musicData.albummid + '.jpg?max_age=2592000',
    url: 'http://ws.stream.qqmusic.qq.com/' + musicData.songid + '.m4a?fromtag=46'
  });
}

function filterSinger(singer) {
  var ret = [];
  if (!singer) {
    return '';
  }
  singer.forEach(function (s) {
    ret.push(s.name);
  });
  return ret.join('/');
}

/***/ }),

/***/ 484:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(176);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getHotKey;
/* harmony export (immutable) */ __webpack_exports__["b"] = search;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_common_js_jsonp__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(474);




function getHotKey() {
	var url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg';

	var data = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, __WEBPACK_IMPORTED_MODULE_2__config__["g" /* commonParams */], {
		uin: 0,
		needNewCode: 1,
		platform: 'h5'
	});

	return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_common_js_jsonp__["a" /* default */])(url, data, __WEBPACK_IMPORTED_MODULE_2__config__["h" /* options */]);
}

function search(query, page, zhida, perpage) {
	var url = 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp';

	var data = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, __WEBPACK_IMPORTED_MODULE_2__config__["g" /* commonParams */], {
		w: query,
		p: page,
		perpage: perpage,
		n: perpage,
		catZhida: zhida ? 1 : 0,
		zhidaqu: 1,
		t: 0,
		flag: 1,
		ie: 'utf-8',
		sem: 1,
		aggr: 0,
		remoteplace: 'txt.mqq.all',
		uin: 0,
		needNewCode: 1,
		platform: 'h5'
	});

	return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_common_js_jsonp__["a" /* default */])(url, data, __WEBPACK_IMPORTED_MODULE_2__config__["h" /* options */]);
}

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_containers_SearchBox__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_containers_SearchBox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_containers_SearchBox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_containers_Suggest__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_containers_Suggest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_containers_Suggest__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_api_search__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_api_config__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuex__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vuex__);

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
  name: 'search',
  data: function data() {
    return {
      hotkey: [],
      queryData: ''
    };
  },
  created: function created() {
    this._getHotKey();
  },

  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_vuex__["mapActions"])({
    setSearchHistory: 'saveSearchHistory'
  }), {
    _getHotKey: function _getHotKey() {
      var _this = this;

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_api_search__["a" /* getHotKey */])().then(function (res) {
        if (res.code === __WEBPACK_IMPORTED_MODULE_4_api_config__["d" /* ERR_OK */]) {
          _this.hotkey = res.data.hotkey.slice(0, 10);
        }
      });
    },
    addQuery: function addQuery(query) {
      this.$refs.search.setQuery(query);
    },
    query: function query(_query) {
      this.queryData = _query;
    },
    blurInput: function blurInput() {
      this.$refs.search.blur();
    },
    saveSearch: function saveSearch() {
      this.setSearchHistory(this.queryData);
    }
  }),
  components: {
    SearchBox: __WEBPACK_IMPORTED_MODULE_1_containers_SearchBox___default.a,
    Suggest: __WEBPACK_IMPORTED_MODULE_2_containers_Suggest___default.a
  }
});

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
	components: {},
	data: function data() {
		return {
			query: ''
		};
	},

	props: {
		placeholder: {
			type: String,
			default: '搜索歌曲、歌手'
		}
	},
	methods: {
		clear: function clear() {
			this.query = '';
		},
		setQuery: function setQuery(query) {
			this.query = query;
		},
		blur: function blur() {
			this.$refs.queryRef.blur();
		}
	},
	computed: {},
	created: function created() {
		this.$watch('query', __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.debounce(function (newQuery) {
			this.$emit('query', newQuery);
		}, 500));
	},
	mounted: function mounted() {},
	destroyed: function destroyed() {}
});

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vuex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_api_search__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_api_config__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_common_js_song__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_common_js_singer__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_containers_Scroll__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_containers_Scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_containers_Scroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_common_js_mixin__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_containers_Loading__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_containers_Loading___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_containers_Loading__);


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









var TYPE_SINGER = 'singer';

/* harmony default export */ __webpack_exports__["default"] = ({
	mixins: [__WEBPACK_IMPORTED_MODULE_8_common_js_mixin__["a" /* playlistMixin */]],
	data: function data() {
		return {
			page: 1,
			perpage: 20,
			result: [],
			pullUp: true,
			loadMore: true,
			loadEnd: true,
			beforeScroll: true
		};
	},

	props: {
		query: {
			type: String,
			default: ''
		},
		showSinger: {
			type: Boolean,
			default: true
		}
	},
	watch: {
		query: function query(val) {
			this.resetQuery();
			!val ? '' : this.search();
		}
	},
	methods: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_vuex__["mapMutations"])({
		setSinger: 'SET_SINGER'
	}), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_vuex__["mapActions"])(['insertSong']), {
		search: function search() {
			var _this = this;

			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_api_search__["b" /* search */])(this.query, this.page, this.showSinger, this.perpage).then(function (res) {
				if (res.code === __WEBPACK_IMPORTED_MODULE_4_api_config__["d" /* ERR_OK */]) {
					if (!_this.sloveResult(res.data).length) {}
					_this.result = [].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(_this.result), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(_this.sloveResult(res.data)));
					_this.page++;
				}
			});
		},
		searchMoreData: function searchMoreData() {
			this.search();
		},
		resetQuery: function resetQuery() {
			this.result = [];
			this.page = 1;
		},
		sloveResult: function sloveResult(data) {
			var ret = [];
			if (data.zhida && data.zhida.singerid) {
				ret.push(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, data.zhida, { type: TYPE_SINGER }));
			}
			if (data.song) {
				ret = ret.concat(this._normalizeSongs(data.song.list));
			}
			return ret;
		},
		_normalizeSongs: function _normalizeSongs(list) {
			var ret = [];
			list.forEach(function (musicData) {
				if (musicData.songid && musicData.albummid) {
					ret.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_common_js_song__["a" /* createSong */])(musicData));
				}
			});
			return ret;
		},
		getIconCls: function getIconCls(item) {
			if (item.type === TYPE_SINGER) {
				return 'icon-mine';
			} else {
				return 'icon-music';
			}
		},
		getDisplayName: function getDisplayName(item) {
			if (item.type === TYPE_SINGER) {
				return item.singername;
			} else {
				return item.name + '-' + item.singer;
			}
		},
		selectItem: function selectItem(item) {
			if (item.type === TYPE_SINGER) {
				var singer = new __WEBPACK_IMPORTED_MODULE_6_common_js_singer__["a" /* default */]({
					id: item.singermid,
					name: item.singername
				});
				this.setSinger(singer);
				this.$router.push({
					path: '/search/' + singer.id
				});
			} else {
				this.insertSong(item);
			}
			this.$emit('select', item);
		},
		handlePlayList: function handlePlayList(playList) {
			var dom = document.getElementsByClassName('mini-player')[0];
			var height = getComputedStyle(dom)['height'];
			var bottom = playList.length > 0 ? height : '';
			this.$refs.scrollWrap.$el.style.bottom = bottom;
			this.$refs.scrollWrap.refresh();
		},
		listScroll: function listScroll() {
			this.$emit('listScroll');
		}
	}),
	computed: {},
	components: {
		Scroll: __WEBPACK_IMPORTED_MODULE_7_containers_Scroll___default.a,
		Loading: __WEBPACK_IMPORTED_MODULE_9_containers_Loading___default.a
	}
});

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);


var Singer = function Singer(_ref) {
  var id = _ref.id,
      name = _ref.name;

  __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Singer);

  this.id = id;
  this.name = name;
  this.avatar = "https://y.gtimg.cn/music/photo_new/T001R300x300M000" + id + ".jpg?max_age=2592000";
};

/* harmony default export */ __webpack_exports__["a"] = (Singer);

/***/ }),

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(512), __esModule: true };

/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(510);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(184);
__webpack_require__(514);
module.exports = __webpack_require__(31).Array.from;


/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(54);
var createDesc = __webpack_require__(118);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(60);
var $export = __webpack_require__(47);
var toObject = __webpack_require__(120);
var call = __webpack_require__(181);
var isArrayIter = __webpack_require__(180);
var toLength = __webpack_require__(119);
var createProperty = __webpack_require__(513);
var getIterFn = __webpack_require__(183);

$export($export.S + $export.F * !__webpack_require__(182)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ 518:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: \"extract-text-webpack-plugin\" loader is used without the corresponding plugin, refer to https://github.com/webpack/extract-text-webpack-plugin for the usage example\n    at Object.module.exports.pitch (C:\\Users\\ff\\code\\Music-Player\\node_modules\\extract-text-webpack-plugin\\loader.js:25:9)");

/***/ }),

/***/ 519:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: \"extract-text-webpack-plugin\" loader is used without the corresponding plugin, refer to https://github.com/webpack/extract-text-webpack-plugin for the usage example\n    at Object.module.exports.pitch (C:\\Users\\ff\\code\\Music-Player\\node_modules\\extract-text-webpack-plugin\\loader.js:25:9)");

/***/ }),

/***/ 522:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: \"extract-text-webpack-plugin\" loader is used without the corresponding plugin, refer to https://github.com/webpack/extract-text-webpack-plugin for the usage example\n    at Object.module.exports.pitch (C:\\Users\\ff\\code\\Music-Player\\node_modules\\extract-text-webpack-plugin\\loader.js:25:9)");

/***/ }),

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(522)

var Component = __webpack_require__(34)(
  /* script */
  __webpack_require__(506),
  /* template */
  __webpack_require__(537),
  /* scopeId */
  "data-v-5e8e379c",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(518)

var Component = __webpack_require__(34)(
  /* script */
  __webpack_require__(508),
  /* template */
  __webpack_require__(533),
  /* scopeId */
  "data-v-41c7db46",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 533:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('Scroll', {
    ref: "scrollWrap",
    staticClass: "suggest-wrap",
    attrs: {
      "data": _vm.result,
      "pullUp": _vm.pullUp,
      "beforeScroll": _vm.beforeScroll
    },
    on: {
      "scrollToEnd": _vm.searchMoreData,
      "beforeScroll": _vm.listScroll
    }
  }, [_c('ul', {
    staticClass: "suggest-list"
  }, [_vm._l((_vm.result), function(item) {
    return _c('li', {
      key: item.id,
      staticClass: "suggest-item",
      on: {
        "click": function($event) {
          _vm.selectItem(item)
        }
      }
    }, [_c('div', {
      staticClass: "icon"
    }, [_c('i', {
      class: _vm.getIconCls(item)
    })]), _vm._v(" "), _c('div', {
      staticClass: "name"
    }, [_c('p', {
      staticClass: "text",
      domProps: {
        "innerHTML": _vm._s(_vm.getDisplayName(item))
      }
    })])])
  }), _vm._v(" "), _c('Loading', {
    attrs: {
      "show": _vm.loadMore,
      "title": "加载更多"
    }
  })], 2)])
},staticRenderFns: []}

/***/ }),

/***/ 534:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "search"
  }, [_c('div', {
    staticClass: "search-box-wrap"
  }, [_c('search-box', {
    ref: "search",
    on: {
      "query": _vm.query
    }
  })], 1), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.queryData),
      expression: "queryData"
    }],
    staticClass: "suggest-wrap"
  }, [_c('Suggest', {
    attrs: {
      "query": _vm.queryData
    },
    on: {
      "select": _vm.saveSearch,
      "listScroll": _vm.blurInput
    }
  })], 1), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.queryData),
      expression: "!queryData"
    }],
    staticClass: "hot-search-wrap"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("热门搜索")]), _vm._v(" "), _c('ul', {
    staticClass: "hot-key"
  }, _vm._l((_vm.hotkey), function(i) {
    return _c('li', {
      key: i.id,
      staticClass: "item",
      on: {
        "click": function($event) {
          _vm.addQuery(i.k)
        }
      }
    }, [_vm._v(_vm._s(i.k))])
  }))]), _vm._v(" "), _c('router-view')], 1)
},staticRenderFns: []}

/***/ }),

/***/ 537:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "search-box"
  }, [_c('i', {
    staticClass: "icon-search"
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.query),
      expression: "query"
    }],
    ref: "queryRef",
    staticClass: "box",
    attrs: {
      "type": "text",
      "placeholder": _vm.placeholder
    },
    domProps: {
      "value": (_vm.query)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.query = $event.target.value
      }
    }
  }), _vm._v(" "), _c('i', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.query),
      expression: "query"
    }],
    staticClass: "icon-dismiss",
    on: {
      "click": _vm.clear
    }
  })])
},staticRenderFns: []}

/***/ })

};;
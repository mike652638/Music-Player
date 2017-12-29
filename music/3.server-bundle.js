exports.ids = [3];
exports.modules = {

/***/ 467:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(516)

var Component = __webpack_require__(34)(
  /* script */
  __webpack_require__(498),
  /* template */
  __webpack_require__(531),
  /* scopeId */
  "data-v-1ebea224",
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

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_containers_Scroll__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_containers_Scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_containers_Scroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_containers_Loading__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_containers_Loading___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_containers_Loading__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_containers_SongList__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_containers_SongList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_containers_SongList__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_common_js_dom__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuex__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vuex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_common_js_mixin__ = __webpack_require__(478);

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







var transform = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_common_js_dom__["a" /* prefixStyle */])('transform');
var RESERVE_HEIGHT = 100;
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "MusicList",
  mixins: [__WEBPACK_IMPORTED_MODULE_6_common_js_mixin__["a" /* playlistMixin */]],
  props: {
    songs: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    bgImage: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    rank: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      scrollY: 0,
      showLoading: true,
      topFixed: false
    };
  },

  computed: {
    bgStyle: function bgStyle() {
      return "background-image:url(" + this.bgImage + ")";
    }
  },
  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
    goBack: function goBack() {
      this.$router.back();
    },
    scroll: function scroll(pos) {
      this.scrollY = pos.y;
    },
    playSongs: function playSongs() {
      this.randomPlay({
        list: this.songs
      });
    },
    selectItem: function selectItem(item, index) {
      this.selectPlay({
        list: this.songs,
        index: index
      });
    }
  }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_vuex__["mapActions"])(['selectPlay', 'randomPlay']), {
    handlePlayList: function handlePlayList(playList) {
      var dom = document.getElementsByClassName('mini-player')[0];
      var height = getComputedStyle(dom)['height'];
      var bottom = playList.length > 0 ? height : '';
      this.$refs.Scroll.$el.style.bottom = bottom;
      this.$refs.Scroll.refresh();
    }
  }),
  watch: {
    songs: function songs(val) {
      var _this = this;

      if (val.length) {
        this.$nextTick(function () {
          _this.$refs.Scroll.refresh();
          _this.showLoading = false;
        });
      }
    },
    scrollY: function scrollY(newY) {
      if (newY > 0) {
        this.$refs.bgImage.style[transform] = "scale(" + (newY + this.imageHeight) / this.imageHeight + ")";
        this.$refs.bgImage.style.zIndex = 101;
      } else if ("" + (newY + this.imageHeight) / this.imageHeight <= 1) {
        this.$refs.bgImage.style.zIndex = 0;
      }
      var translateHeight = -newY;
      if (translateHeight > this.height) {
        translateHeight = this.height;
        this.$refs.bgImage.style.zIndex = 111;
        this.topFixed = true;
      } else {
        this.topFixed = false;
      }

      this.$refs.bgLayer.style[transform] = "translate3d(0, " + -translateHeight + "px, 0)";
    }
  },
  mounted: function mounted() {
    this.imageHeight = this.$refs.bgImage.clientHeight;
    this.height = this.imageHeight * 0.9;
    this.$refs.Scroll.$el.style.top = this.imageHeight + "px";
  },

  components: {
    SongList: __WEBPACK_IMPORTED_MODULE_3_containers_SongList___default.a,
    Scroll: __WEBPACK_IMPORTED_MODULE_1_containers_Scroll___default.a,
    Loading: __WEBPACK_IMPORTED_MODULE_2_containers_Loading___default.a
  }
});

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_containers_Loading__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_containers_Loading___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_containers_Loading__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuex__);
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
	name: "SongList",
	props: {
		songs: {
			type: Array,
			default: function _default() {
				return [];
			}
		},
		rank: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		selectItem: function selectItem(i, index) {
			this.$emit('select', i, index);
		},
		getRank: function getRank(index) {
			switch (+index) {
				case 0:
					return "rank-1";
					break;
				case 1:
					return "rank-2";
					break;
				case 2:
					return "rank-3";
					break;
				default:
					return "";
			}
		}
	},
	components: {
		Loading: __WEBPACK_IMPORTED_MODULE_0_containers_Loading___default.a
	}
});

/***/ }),

/***/ 488:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: \"extract-text-webpack-plugin\" loader is used without the corresponding plugin, refer to https://github.com/webpack/extract-text-webpack-plugin for the usage example\n    at Object.module.exports.pitch (C:\\Users\\ff\\code\\Music-Player\\node_modules\\extract-text-webpack-plugin\\loader.js:25:9)");

/***/ }),

/***/ 489:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: \"extract-text-webpack-plugin\" loader is used without the corresponding plugin, refer to https://github.com/webpack/extract-text-webpack-plugin for the usage example\n    at Object.module.exports.pitch (C:\\Users\\ff\\code\\Music-Player\\node_modules\\extract-text-webpack-plugin\\loader.js:25:9)");

/***/ }),

/***/ 490:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(488)

var Component = __webpack_require__(34)(
  /* script */
  __webpack_require__(486),
  /* template */
  __webpack_require__(492),
  /* scopeId */
  "data-v-b43da400",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 491:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(489)

var Component = __webpack_require__(34)(
  /* script */
  __webpack_require__(487),
  /* template */
  __webpack_require__(493),
  /* scopeId */
  "data-v-f5f52ca0",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 492:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "music-list"
  }, [_c('div', {
    staticClass: "back",
    on: {
      "click": _vm.goBack
    }
  }, [_c('i', {
    staticClass: "icon-back"
  })]), _vm._v(" "), _c('h2', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('div', {
    ref: "bgImage",
    staticClass: "bg-image",
    class: {
      'active': _vm.topFixed
    },
    style: (_vm.bgStyle)
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.topFixed),
      expression: "!topFixed"
    }],
    ref: "playRef",
    staticClass: "play-wrapper"
  }, [_c('div', {
    staticClass: "play",
    on: {
      "click": _vm.playSongs
    }
  }, [_c('i', {
    staticClass: "icon-play"
  }), _vm._v(" "), _c('span', {
    staticClass: "text"
  }, [_vm._v("随机播放全部")])])]), _vm._v(" "), _c('div', {
    staticClass: "filter"
  })]), _vm._v(" "), _c('loading', {
    attrs: {
      "show": _vm.showLoading
    }
  }), _vm._v(" "), _c('div', {
    ref: "bgLayer",
    staticClass: "bg-layer"
  }), _vm._v(" "), _c('Scroll', {
    ref: "Scroll",
    staticClass: "scroll-wrap",
    attrs: {
      "listen-scroll": true,
      "probe-type": 3
    },
    on: {
      "scroll": _vm.scroll
    }
  }, [_c('song-list', {
    attrs: {
      "songs": _vm.songs,
      "rank": _vm.rank
    },
    on: {
      "select": _vm.selectItem
    }
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 493:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "song-list"
  }, [_c('ul', {
    staticClass: "songs-wrap"
  }, _vm._l((_vm.songs), function(i, index) {
    return _c('li', {
      key: i.id,
      staticClass: "item",
      class: {
        'rank-wrap': _vm.rank
      },
      on: {
        "click": function($event) {
          _vm.selectItem(i, index)
        }
      }
    }, [_c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.rank),
        expression: "rank"
      }],
      staticClass: "rank",
      class: _vm.getRank(index)
    }, [_c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (index >= 3),
        expression: "index>=3"
      }],
      staticClass: "icon"
    }, [_vm._v(_vm._s(index + 1))])]), _vm._v(" "), _c('div', {
      staticClass: "content"
    }, [_c('p', {
      staticClass: "name"
    }, [_vm._v(_vm._s(i.name))]), _vm._v(" "), _c('p', {
      staticClass: "desc"
    }, [_vm._v(_vm._s(i.singer) + " - " + _vm._s(i.album))])])])
  }))])
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

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_MusicList__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_MusicList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_components_MusicList__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vuex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_api_recommend__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_api_config__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_common_js_song__ = __webpack_require__(483);

//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      songs: []
    };
  },
  created: function created() {
    this._getSongList();
  },

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
    title: function title() {
      return this.disc.dissname;
    },
    bgImage: function bgImage() {
      return this.disc.imgurl;
    }
  }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_vuex__["mapGetters"])(['disc'])),
  methods: {
    _getSongList: function _getSongList() {
      var _this = this;

      if (!this.disc.dissid) {
        this.$router.push('/recommend');
        return;
      }
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_api_recommend__["c" /* getSongList */])('api/getDisc', this.disc.dissid, {}).then(function (res) {
        if (res.data.code === __WEBPACK_IMPORTED_MODULE_4_api_config__["d" /* ERR_OK */]) {
          _this.songs = _this._normalizeSongs(res.data.cdlist[0].songlist);
        }
      });
    },
    _normalizeSongs: function _normalizeSongs(list) {
      var ret = [];
      list.forEach(function (musicData) {
        if (musicData.songid && musicData.albummid) {
          ret.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_common_js_song__["a" /* createSong */])(musicData));
        }
      });
      return ret;
    }
  },
  watch: {},
  components: {
    MusicList: __WEBPACK_IMPORTED_MODULE_1_components_MusicList___default.a
  }
});

/***/ }),

/***/ 516:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: \"extract-text-webpack-plugin\" loader is used without the corresponding plugin, refer to https://github.com/webpack/extract-text-webpack-plugin for the usage example\n    at Object.module.exports.pitch (C:\\Users\\ff\\code\\Music-Player\\node_modules\\extract-text-webpack-plugin\\loader.js:25:9)");

/***/ }),

/***/ 531:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "slide"
    }
  }, [_c('music-list', {
    attrs: {
      "bgImage": _vm.bgImage,
      "title": _vm.title,
      "songs": _vm.songs
    }
  })], 1)
},staticRenderFns: []}

/***/ })

};;
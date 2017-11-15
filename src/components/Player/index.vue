<template>
	<div class="player" v-show="playList.length > 0">
		<transition name="normal" @enter="enter" @after-enter="afterEnter" @leave="leave" @after-leave="afterLeave">
			>
			<div class="normal-player" v-show="fullScreen">
				<div class="background">
					<img :src="bgImg" width="100%" height="100%">
				</div>
				<div class="top">
					<div class="back" @click="back">
						<i class="icon-back"></i>
					</div>
					<p class="title" v-if="currentSong">{{currentSong.musicData.songname}}</p>
					<p class="subtitle" v-if="currentSong">{{currentSong.musicData.singer[0].name}}</p>
				</div>
				<div class="middle">
					<div class="middle-l" ref="middleL">
						<div class="cd-wrapper" ref="cdWrapper">
							<div class="cd">
								<img class="image" :src="bgImg">
							</div>
						</div>
						<div class="playing-lyric-wrapper">
							<div class="playing-lyric"></div>
						</div>
					</div>
					<scroll class="middle-r" ref="lyricList">
						<div class="lyric-wrapper">
							<div>
								<p></p>
							</div>
						</div>
					</scroll>
				</div>
				<div class="bottom">
					<div class="dot-wrapper">
						<span class="dot"></span>
						<span class="dot"></span>
					</div>
					<div class="progress-wrapper">
						<span class="time time-l">{{formate(currentTime)}}</span>
						<div class="progress-bar-wrapper">
							<process :percent="percent" @percentChange="percentChange"></process>
						</div>
						<span class="time time-r" v-if="currentSong">{{formate(currentSong.musicData.interval)}}</span>
					</div>
					<div class="operators">
						<div class="icon i-left">
							<i class="icon-sequence"></i>
						</div>
						<div class="icon i-left" @click="prev">
							<i class="icon-prev"></i>
						</div>
						<div @click="togglePlay" class="icon i-center">
							<i :class="playIcon"></i>
						</div>
						<div class="icon i-right" @click="next">
							<i class="icon-next"></i>
						</div>
						<div class="icon i-right">
							<i class="icon icon-not-favorite"></i>
						</div>
					</div>
				</div>
			</div>
		</transition>
		<transition name="min">
			<div @click="open" v-show="!fullScreen" class="mini-player">
				<div class="icon">
					<img :src="bgImg" width="40" height="40">
				</div>
				<div class="text">
					<p class="name" v-if="currentSong">{{currentSong.musicData.songname}}</p>
					<p class="desc" v-if="currentSong">{{currentSong.musicData.singer[0].name}}</p>
				</div>
				<div class="control">
					<progress-circle :percent="percent" :radius="32">
						<i @click.stop="togglePlay" :class="playing ? 'icon-pause-mini' : 'icon-play-mini'" class="icon-mini"></i>
					</progress-circle>
				</div>
				<div class="control">
					<i class="icon-playlist"></i>
				</div>
			</div>
		</transition>
		<audio ref="audio" v-if="currentSong" @timeupdate="updatetime" @error="error" @canplay="ready" :src="`http://ws.stream.qqmusic.qq.com/${currentSong.musicData.songid}.m4a?fromtag=46`"></audio>
	</div>

</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import Scroll from 'containers/Scroll'
import Process from 'containers/Process'
import ProgressCircle from 'containers/ProgressCircle'
import animations from 'create-keyframe-animation'
import { prefixStyle } from 'common/js/dom'
let transform = prefixStyle('transform')
export default {
	name: 'player',
	data() {
		return {
			songReady: false,
			currentTime: 0
		}
	},
	computed: {
		playIcon() {
			return this.playing ? 'icon-pause' : 'icon-play'
		},
		...mapGetters([
			'fullScreen',
			'playList',
			'currentSong',
			'playing',
			'currentIndex'
		]),
		bgImg() {
			if (this.currentSong) {
				return `https://y.gtimg.cn/music/photo_new/T002R300x300M000${this.currentSong.musicData.albummid}.jpg?max_age=2592000`
			}
		},
		percent() {
			if (!this.currentSong) {
				return
			}
			return this.currentTime / this.currentSong.musicData.interval
		}
	},
	methods: {
		...mapMutations({
			setFullScreen: 'SET_FULL_SCREEN',
			setPlayState: 'SET_PLAYING_STATE',
			setCurrentIndex: 'SET_CURRENT_INDEX'
		}),
		back() {
			this.setFullScreen(false)
		},
		open() {
			this.setFullScreen(true)
		},
		togglePlay() {
			this.setPlayState(!this.playing)
		},
		prev() {
			if (!this.songReady) {
				return
			}
			let playListLength = this.playList.length
			this.setPlayState(false)
			let index = this.currentIndex - 1
			if (index < 0) {
				index = playListLength - 1
			}
			this.setCurrentIndex(index)
			this.setPlayState(true)
			this.songReady = false
		},
		next() {
			if (!this.songReady) {
				return
			}
			let playListLength = this.playList.length
			this.setPlayState(false)
			let index = this.currentIndex + 1
			if (index >= playListLength) {
				index = 0
			}
			this.setCurrentIndex(index)
			this.setPlayState(true)
			this.songReady = false
		},
		ready() {
			this.songReady = true
		},
		error() {
			this.songReady = true
		},
		updatetime(e) {
			this.currentTime = e.target.currentTime
		},
		formate(interval) {
			// 向下取整
			interval = interval | 0
			const minute = this._pad(interval / 60 | 0)
			const second = this._pad(interval % 60)
			return `${minute}:${second}`
		},
		_pad(num, n = 2){
			let len = num.toString().length
			while(len < n) {
				num = '0' + num
				len ++
			}
			return num
		},
		enter(el, done) {
			const { x, y, scale } = this._getPosAndScale()
			let animation = {
				0: {
					transform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`
				},
				60: {
					transform: `translate3d(0, 0, 0) scale(1.1)`
				},
				100: {
					transform: `translate3d(0, 0, 0) scale(1)`
				}
			}
			animations.registerAnimation({
				name: 'move',
				animation,
				presets: {
					duration: 400,
					easing: 'linear',
					delay: 100
				}
			})
			animations.runAnimation(this.$refs.cdWrapper, 'move', done)
		},
		afterEnter() {
			animations.unregisterAnimation('move')
			this.$refs.cdWrapper.style.animation = ''
		},
		leave(el, done) {
			this.$refs.cdWrapper.style.transition = 'all 0.4s ease'
			const { x, y, scale } = this._getPosAndScale()
			this.$refs.cdWrapper.style[transform] = `translate3d(${x}px, ${y}px, 0) scale(${scale})`
			this.$refs.cdWrapper.addEventListener('transitionend', done)
		},
		afterLeave() {
			this.$refs.cdWrapper.style[transform] = ''
			this.$refs.cdWrapper.style.transition = ''
		},
		_getPosAndScale() {
			const targetWidth = 40
			const paddingLeft = 40
			const paddingBottom = 30
			const paddingTop = 80
			const width = window.innerWidth * 0.8
			const scale = targetWidth / width
			const x = - (window.innerWidth / 2 - paddingLeft)
			const y = window.innerHeight - paddingTop - width / 2 - paddingBottom
			return {
				x, y, scale
			}
		},
		percentChange(percent) {
			this.$refs.audio.currentTime = this.currentSong.musicData.interval * percent
		}
	},
	filters: {
		// formatTime(interval) {
		// 	this.formate(interval)
		// }
	},
	watch: {
		currentSong() {
			this.$nextTick(() => {
				this.$refs.audio.play()
			})
		},
		playing(newPlay) {
			this.$nextTick(() => {
				let audio = this.$refs.audio
				newPlay ? audio.play() : audio.pause()
			})
		}
	},
	components: {
		Scroll,
		Process,
		ProgressCircle
	}
}
</script>
<style lang="less" scoped>
@import '~common/less/const.less';
.player {
	.normal-player {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: 100;
		background: #222;
		.background {
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: -1;
			opacity: 0.6;
			filter: blur(20px);
		}
		.top {
			.back {
				position: absolute;
				top: 0;
				left: 6px;
				z-index: 50;
				.icon-back {
					display: block;
					padding: 9px;
					font-size: 22px;
					color: #ffcd32;
					-webkit-transform: rotate(-90deg);
					transform: rotate(-90deg);
				}
			}
			.title {
				width: 70%;
				margin: 0 auto;
				line-height: 40px;
				text-align: center;
				-ms-text-overflow: ellipsis;
				text-overflow: ellipsis;
				overflow: hidden;
				white-space: nowrap;
				font-size: 18px;
				color: #fff;
			}
			.subtitle {
				line-height: 20px;
				text-align: center;
				font-size: 14px;
				color: #fff;
			}
		}
		.middle {
			position: fixed;
			width: 100%;
			top: 80px;
			bottom: 170px;
			white-space: nowrap;
			font-size: 0;
			.middle-l {
				display: inline-block;
				vertical-align: top;
				position: relative;
				width: 100%;
				height: 0;
				padding-top: 80%;
				.cd-wrapper {
					position: absolute;
					left: 10%;
					top: 0;
					width: 80%;
					height: 100%;
					.cd {
						width: 100%;
						height: 100%;
						box-sizing: border-box;
						border: 10px solid rgba(255, 255, 255, 0.1);
						border-radius: 50%;
						&.play {
							animation: rotate 20s linear infinite;
						}
						&.pause {
							animation-play-state: paused;
							-webkit-animation-play-state: paused;
						}
						.image {
							position: absolute;
							left: 0;
							top: 0;
							width: 100%;
							height: 100%;
							border-radius: 50%;
						}
					}
				}
				.playing-lyric-wrapper {
					width: 80%;
					margin: 30px auto 0 auto;
					overflow: hidden;
					text-align: center;
					.playing-lyric {
						height: 20px;
						line-height: 20px;
						font-size: @font-size-medium;
						color: @color-text-l;
					}
				}
			}
			.middle-r {
				display: inline-block;
				vertical-align: top;
				width: 100%;
				height: 100%;
				overflow: hidden;
				.lyric-wrapper {
					width: 80%;
					margin: 0 auto;
					overflow: hidden;
					text-align: center;
					.text {
						line-height: 32px;
						color: @color-text-l;
						font-size: @font-size-medium;
						&.current {
							color: @color-text;
						}
					}
				}
			}
		}
		.bottom {
			position: absolute;
			bottom: 50px;
			width: 100%;
			.dot-wrapper {
				text-align: center;
				font-size: 0;
				.dot {
					display: inline-block;
					vertical-align: middle;
					margin: 0 4px;
					width: 8px;
					height: 8px;
					border-radius: 50%;
					background: @color-text-l;
					&.active {
						width: 20px;
						border-radius: 5px;
						background: @color-text-ll;
					}
				}
			}
			.progress-wrapper {
				display: flex;
				align-items: center;
				width: 80%;
				margin: 0px auto;
				padding: 10px 0;
				.time {
					color: @color-text;
					font-size: @font-size-small;
					flex: 0 0 30px;
					line-height: 30px;
					width: 30px;
					&.time-l {
						text-align: left;
						margin-right: 5px;
					}
					&.time-r {
						text-align: right;
						margin-left: 5px;
					}
				}
				.progress-bar-wrapper {
					flex: 1;
				}
			}
			.operators {
				display: flex;
				align-items: center;
				.icon {
					flex: 1;
					color: @color-theme;
					&.disable {
						color: @color-theme-d;
					}
					i {
						font-size: 30px;
					}
				}
				.i-left {
					text-align: right;
				}
				.i-center {
					padding: 0 20px;
					text-align: center;
					i {
						font-size: 40px;
					}
				}
				.i-right {
					text-align: left;
				}
				.icon-favorite {
					color: @color-sub-theme;
				}
			}
		}
		&.normal-enter-active,
		&.normal-leave-active {
			transition: all 0.3s;
		}
		&.normal-enter,
		&.normal-leave-to {
			opacity: 0;
			transform: translate3d(0, 100%, 0);
		}
	}
	.mini-player {
		display: flex;
		align-items: center;
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 180;
		width: 100%;
		height: 60px;
		background: @color-highlight-background;
		&.mini-enter-active,
		&.mini-leave-active {
			transition: all 0.4s;
		}
		&.mini-enter,
		&.mini-leave-to {
			opacity: 0;
		}
		.icon {
			flex: 0 0 40px;
			width: 40px;
			padding: 0 10px 0 20px;
			img {
				border-radius: 50%;
				&.play {
					animation: rotate 10s linear infinite;
				}
				&.pause {
					animation-play-state: paused;
				}
			}
		}
		.text {
			display: flex;
			flex-direction: column;
			justify-content: center;
			flex: 1;
			line-height: 20px;
			overflow: hidden;
			.name {
				margin-bottom: 2px;
				font-size: @font-size-medium;
				color: @color-text;
			}
			.desc {
				font-size: @font-size-small;
				color: @color-text-d;
			}
		}
		.control {
			flex: 0 0 30px;
			width: 30px;
			padding: 0 10px;
			position: relative;
			.icon-play-mini,
			.icon-pause-mini,
			.icon-playlist {
				font-size: 30px;
				color: @color-theme-d;
			}
			.icon-mini {
				font-size: 32px;
				position: absolute;
				left: 0;
				top: 0;
			}
		}
	}
}
</style>

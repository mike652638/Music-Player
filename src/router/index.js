import Vue from 'vue'
import Router from 'vue-router'

import Recommend from 'components/Recommend'
import Singer from 'components/Singer'
import Rank from 'components/Rank'
import Search from 'components/Search'
import SingerDetail from 'components/SingerDetail'
import Disc from 'components/Disc'
import TopList from 'components/TopList'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			redirect: '/recommend'
		},
		{
			path: '/recommend',
			name: 'recommend',
			component: Recommend,
			children: [
				{
					path: ':id',
					component: Disc
				}
			]
		},
		{
			path: '/singer',
			name: 'singer',
			component: Singer,
			children: [
				{
					path: ':id',
					component: SingerDetail
				}
			]
		},
		{
			path: '/rank',
			name: 'rank',
			component: Rank,
			children: [
				{
					path: ':id',
					component: TopList
				}
			]
		},
		{
			path: '/search',
			name: 'search',
			component: Search,
			children: [
				{
					path: ':id',
					component: SingerDetail
				}
			]
		}
	]
})

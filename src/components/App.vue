<template>
	<div>
		<channel v-for="channel in channels" :channel-title="channelTitleMap[channel.name]" :channel-name="channel.name">
			<ul>
				<li v-for="item in channel.lists">
					<p class="title">{{ item.name }}</p>
					<p class="description">{{ item.description }}</p>
				</li>
			</ul>
		</channel>

		<header ref="header">im header in App</header>
		<div class="main">
			im content in App
			<ul>
				<li>
					<a href="#one">One</a>
				</li>
				<li>
					<a href="#two">Two</a>
				</li>
				<li>
					<a href="#three">Three</a>
				</li>
			</ul>

			<div class="wrap">
				<a name="one">text 1</a>
				<a name="two">text 2</a>
				<a name="three" class="box">text 3</a>
			</div>
		</div>
	</div>
</template>

<script>
	import { channelTitleMap } from 'constant';
	import Vue from 'vue';
	import Vuex from 'vuex';

	Vue.use(Vuex);
	const store = new Vuex.Store({
		state: {
			channels: [{
				name: 'lianxuju',
				lists: [{
					name: '隧道',
					description: '崔振赫穿越時空破案'
				}]
			}, {
				name: 'yule',
				lists: [{
					name: '吃光全宇宙：哈爾濱 上',
					description: '五月天集體現身助陣師弟鼓鼓 曹雲金談感情自曝女友'
				}]
			}],
			channelTitleMap,
		}
	});

	export default {
		mounted: () => {
			// console.log('=============refs:', this);
			console.log('=======App Component');
		},
		computed: {
			channels() {
				return store.state.channels;
			},
			channelTitleMap() {
				return store.state.channelTitleMap;
			}
		}
	}
</script>

<style>
	.wrap a {
		display: block;
		height: 800px;
	}
</style>

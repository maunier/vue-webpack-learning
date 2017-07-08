<template>
	<div>
		<p>
			<h3>{{ channelTitle }}</h3>
			<router-link :to="{ name: 'channelPage', params: { channelName: channelName }}">更多</router-link>
		</p>
		<hr />
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: 'channel',
		props: ['channelTitle', 'channelName'],
	}
</script>

<style>
	h3 {
		display: inline-block;
		margin-right: 10px;
	}

	a {
		font-size: 12px;
	}
</style>
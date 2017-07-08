<template>
	<div>
		<header>Channel: {{ channelTitle }}</header>
		<div>
			im content in channel page
		</div>
	</div>
</template>

<script type="text/javascript">
	import { channelTitleMap } from 'constant';

	export default {
		data() {
			return {
				channelTitle: ''
			}
		},
		created() {
			this.getChannelName()
		},
		methods: {
			getChannelName() {
				this.channelTitle = channelTitleMap[this.$route.params.channelName];
			}
		}
	}
</script>

<style type="text/css">
	
</style>
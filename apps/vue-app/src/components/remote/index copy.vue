<template>
	<div ref="root">Loading...</div>
</template>

<script>
import { getRemoteScript } from "@repe/remote-utils";
export default {
	name: "RemoteComp",
	data() {
		return {
			loading: false,
		};
	},
	props: {
		mfName: {
			type: String,
			required: true,
		},
		module: {
			type: String,
			required: true,
		},
	},
	async mounted() {
		const REMOTE_URL = process.env.VUE_APP_REMOTE_PATH;
		// import 远程挂载vue组件的方法
		const ReactInVueUtils = await getRemoteScript(
			`${REMOTE_URL}/remoteEntry.js`,
			this.mfName,
			"./ReactInVueUtils",
		);
		console.log(ReactInVueUtils);
		const result = await getRemoteScript(
			`${REMOTE_URL}/remoteEntry.js`,
			this.mfName,
			this.module,
		);
		ReactInVueUtils(result, this.$refs.root, {
			...this.$props,
			...this.$listeners,
			...this.$attrs,
		});
	},
};
</script>

<style></style>

<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png" />
		<remote mfName="ReactApp" module="./ReactButton" @click="hello" />
		<remote mfName="ReactApp" module="./ReactDiv" />
	</div>
</template>

<script>
import Remote from "@/components/remote";
import getRemoteScript from "@repe/remote-utils";

export default {
	name: "App",
	components: {
		Remote,
	},
	data() {
		return {};
	},
	methods: {
		hello() {
			console.log("12334");
			this.hello1();
		},
		async hello1() {
			const REMOTE_URL = process.env.VUE_APP_REMOTE_PATH;
			const result = await getRemoteScript(
				`${REMOTE_URL}/remoteEntry.js`,
				"ReactApp",
				"./ReactUtils",
			);
			console.log(result);
			result.greet("666");
		},
	},
};
</script>

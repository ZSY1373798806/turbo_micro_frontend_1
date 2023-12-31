const { defineConfig } = require("@vue/cli-service");
const { ModuleFederationPlugin } = require("webpack").container;
module.exports = defineConfig({
	transpileDependencies: true,
	publicPath: process.env.VUE_APP_PUBLIC_PATH,
	css: {
		extract: process.env.NODE_ENV !== "development",
	},
	chainWebpack: (config) => {
		config.plugin("html").tap((args) => {
			args[0].title = "vue-app";
			return args;
		});
	},
	configureWebpack: (config) => {
		if (process.env.NODE_ENV !== "development") {
			config.mode = "production";
		}
		if (process.env.NODE_ENV === "development") {
			config.devtool = "source-map";
		}
		config.externals = {};
		config.plugins.push(
			new ModuleFederationPlugin({
				name: "VueApp",
				filename: "remoteEntry.js",
				exposes: {
					"./Sidebar": "./src/components/Sidebar/index.vue",
					"./Footer": "./src/components/Footer/index.vue",
				},
				remotes: {
					ReactApp: `ReactApp@${process.env.VUE_APP_REMOTE_PATH}/remoteEntry.js`,
				},
			}),
		);
		// important
		delete config.optimization.splitChunks;
	},
	devServer: {
		port: 8889,
		open: false,
		proxy: {},
	},
});

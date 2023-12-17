const { defineConfig } = require("@vue/cli-service");
const { ModuleFederationPlugin } = require("webpack").container;
console.log("------------------------", process.env.VUE_APP_REMOTE_PATH);
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
		config.externals = {
			react: "React",
			"react-dom": "ReactDOM",
		};
		config.plugins.push(
			new ModuleFederationPlugin({
				name: "VueApp",
				filename: "remoteEntry.js",
				exposes: {
					"./VueButton": "./src/components/vue-button.vue",
					"./VueUtils": "./src/utils/index.js",
					"./VueMountComponentMain": "./src/utils/vue-in-react-utils.js",
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
		port: 8888,
		open: false,
		proxy: {},
	},
});

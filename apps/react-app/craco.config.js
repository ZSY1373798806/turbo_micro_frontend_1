const path = require("path");
const { ModuleFederationPlugin } = require("webpack").container;
const CracoEnvPlugin = require("craco-plugin-env");
const CracoLessPlugin = require("craco-less");
const dotenv = require("dotenv");
const { cwd } = require("process");

let envPath = ".env.production";
if (process.env.NODE_ENV === "development") {
	envPath = ".env.development";
} else {
	const modeIndex = process.argv.indexOf("--mode");
	const mode = modeIndex !== -1 ? process.argv[modeIndex + 1] : "production";
	envPath = `.env.${mode}`;
}
dotenv.config({
	path: `${cwd()}/${envPath}`,
});

const { dependencies: deps } = require("./package.json");
module.exports = {
	devServer: {
		port: 3333,
		open: false,
	},
	webpack: {
		alias: {
			"@": path.resolve(__dirname, "src/"),
		},
		plugins: {
			add: [
				new ModuleFederationPlugin({
					name: "ReactApp",
					filename: "remoteEntry.js",
					exposes: {
						"./ReactUtils": "./src/utils/index.ts",
						"./ReactHeader": "./src/components/Header/index.tsx",
						"./ReactUserInfo": "./src/components/UserInfo/index.tsx",
					},
					remotes: {
						VueApp: `VueApp@${process.env.REACT_APP_REMOTE_URL}/remoteEntry.js`,
					},
					// 无效
					// shared: {
					// 	...deps,
					// 	react: {
					//     eager: true,
					// 		singleton: true,
					// 		requiredVersion: deps['react'],
					// 	},
					// 	"react-dom": {
					//     eager: true,
					// 		singleton: true,
					// 		requiredVersion: deps["react-dom"],
					// 	},
					// },
				}),
			],
		},
		configure: (webpackConfig) => {
			webpackConfig.output = {
				...webpackConfig.output,
				publicPath: process.env.REACT_APP_PUBLIC_PATH,
			};
			webpackConfig.externals = {
				react: "React",
				"react-dom": "ReactDOM",
			};
			return webpackConfig;
		},
	},
	plugins: [
		{
			// 配置less
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						modifyVars: {},
						javascriptEnabled: true,
					},
				},
			},
		},
		{
			// 配置环境变量
			plugin: CracoEnvPlugin,
			options: {
				variables: {},
			},
		},
	],
};

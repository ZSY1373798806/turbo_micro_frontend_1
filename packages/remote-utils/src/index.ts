import React from "react";
import ReactDOM from "react-dom/client";
import Vue from "vue";

/**
 * @param remoteUrl http://localhost:3333/remoteEntry.js
 * @param mfName ReactApp
 * @param module ReactButton
 * @returns
 */
export const getRemoteScript = (
	remoteUrl: string,
	mfName: string,
	module: string,
) => {
	const script = document.createElement("script");
	script.src = remoteUrl;
	script.async = true;
	document.head.appendChild(script);
	return new Promise((resolve, reject) => {
		script.onload = async () => {
			const result = await (window as any)[mfName].get(module);
			const remoteModule = result();
			resolve(remoteModule.default);
		};
		script.onerror = () => {
			reject(new Error("加载远程地址： 失败"));
		};
	});
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const reactInVue = (compName: any, targetEl: any, attrs: any) => {
	const root = ReactDOM.createRoot(targetEl);
	root.render(React.createElement(compName, attrs));
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const vueInReact = (compName: any, targetEl: any, attrs: any) => {
	new Vue({
		render: (h: any) => h(compName, attrs),
		computed: {},
	}).$mount(targetEl);
};

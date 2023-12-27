import React, { Attributes, ComponentClass, FunctionComponent } from "react";
import ReactDOM from "react-dom/client";
import Vue, {
	Component as VueComponent,
	CreateElement as VueCreateElement,
} from "vue";

/**
 * @param remoteUrl http://localhost:3333/remoteEntry.js
 * @param mfName ReactApp
 * @param module ReactButton
 * @returns
 */

export const getRemoteScript = async (
	remoteUrl: string,
	mfName: string,
	module: string,
): Promise<string> => {
	let scope = (window as any)[mfName];
	if (scope?.get(module)) {
		const result = await scope.get(module);
		const remoteModule = result();
		return Promise.resolve(remoteModule.default);
	}

	const script = document.createElement("script");
	script.src = remoteUrl;
	script.async = true;
	document.head.appendChild(script);
	return new Promise((resolve, reject) => {
		script.onload = async () => {
			scope = (window as any)[mfName];
			const result = await scope.get(module);
			const remoteModule = result();
			resolve(remoteModule.default);
		};
		script.onerror = () => {
			reject(new Error("加载远程地址失败"));
		};
	});
};

export const reactInVue = (
	compName: string,
	targetEl: Element | DocumentFragment,
	attrs: Attributes,
) => {
	const root = ReactDOM.createRoot(targetEl);
	root.render(React.createElement(compName, attrs));
};

export const vueInReact = (
	compName: string,
	targetEl: string | Element | undefined,
	attrs: Object,
) => {
	new Vue({
		render: (h: VueCreateElement) => h(compName, attrs),
		computed: {},
	}).$mount(targetEl);
};

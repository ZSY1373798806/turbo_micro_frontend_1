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
export const getRemoteScript = (
	remoteUrl: string,
	mfName: string,
	module: string,
): Promise<string> => {
	const script = document.createElement("script");
	script.src = remoteUrl;
	script.async = true;
	document.head.appendChild(script);
	return new Promise((resolve, reject) => {
		script.onload = async () => {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const result = await (window as any)[mfName].get(module);
			const remoteModule = result();
			resolve(remoteModule.default);
		};
		script.onerror = () => {
			reject(new Error("加载远程地址： 失败"));
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

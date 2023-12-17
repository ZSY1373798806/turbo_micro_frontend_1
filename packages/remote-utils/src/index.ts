/**
 * @param remoteUrl http://localhost:3333/remoteEntry.js
 * @param mfName ReactApp
 * @param module ReactButton
 * @returns
 */
export default function getRemoteScript(
	remoteUrl: string,
	mfName: string,
	module: string,
) {
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
}

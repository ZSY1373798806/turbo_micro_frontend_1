import React from "react";
import { useState } from "react";
import { useEffect } from "react";

// 远程vue component
const VueButton = React.lazy(() => import("VueApp/VueButton"));

// 远程vue utils
const loadRemoteVueUtils = async () => {
	return (await import("VueApp/VueUtils")).default;
};

const VueComp = () => {
	const [remoteModule, setRemoteModule] = useState<{
		greet?: (msg: string) => void;
	}>({});
	const handleClickRemote = () => {
		alert("本地alert");
		remoteModule.greet?.("调用远程组件");
	};

	useEffect(() => {
		const loadModule = async () => {
			const module = await loadRemoteVueUtils();
			setRemoteModule(module);
		};

		loadModule();
	}, []);

	useEffect(() => {
		console.log(VueButton);
	}, [VueButton]);

	return (
		<div>
			<h2>vue 调用 react</h2>
			<VueButton click={handleClickRemote} />
		</div>
	);
};

export default VueComp;

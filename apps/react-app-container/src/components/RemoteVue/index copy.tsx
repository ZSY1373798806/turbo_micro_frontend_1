import { getRemoteScript } from "@repe/remote-utils";
import { useEffect, useRef } from "react";

interface VueSidebarProps {
	mfName: "VueApp";
	module: "./Sidebar";
	attrs: {
		props: {
			title: string;
		};
		on: {
			click: () => void;
		};
	};
}

interface VueFooterProps {
	mfName: "VueApp";
	module: "./Footer";
	attrs: {
		props: { title: string; year: number; bgColor: string };
		on?: {};
	};
}

type IProps = VueSidebarProps | VueFooterProps;

const RemoteVue = (props: IProps) => {
	const ref = useRef(null);
	const { mfName, module, attrs } = props;

	const getRemoteComp = async () => {
		const REMOTE_URL = process.env.REACT_APP_VUE_REMOTE_URL;
		// import 远程挂载vue组件的方法
		const VueInReactUtils = (await getRemoteScript(
			`${REMOTE_URL}/remoteEntry.js`,
			mfName,
			"./VueInReactUtils",
		)) as unknown as (compName: any, targetEl: any, attrs: any) => void;
		// import 远程组件
		const result = await getRemoteScript(
			`${REMOTE_URL}/remoteEntry.js`,
			mfName,
			module,
		);

		VueInReactUtils(result, ref.current, {
			props: attrs.props,
			on: attrs.on,
		});
	};
	useEffect(() => {
		getRemoteComp();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <div ref={ref}>Loading...</div>;
};

export default RemoteVue;

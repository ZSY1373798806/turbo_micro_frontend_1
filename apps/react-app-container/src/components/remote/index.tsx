import getRemoteScript from "@repe/remote-utils";
import { useEffect, useRef } from "react";

interface Attrs {
	name: string;
	hello: () => void;
}

interface IProps {
	mfName: string;
	module: string;
	attrs: Attrs;
}

const RemoteComp = (props: IProps) => {
	const ref = useRef(null);
	const { mfName, module, attrs } = props;

	const getComp = async () => {
		const REMOTE_URL = process.env.REACT_APP_VUE_REMOTE_URL;
		// import 远程挂载vue组件的方法
		const { mountComponentMain } = (await getRemoteScript(
			`${REMOTE_URL}/remoteEntry.js`,
			mfName,
			"./VueMountComponentMain",
		)) as unknown as {
			mountComponentMain: (compName: any, targetEl: any, attrs: any) => void;
		};
		// import 远程组件
		const result = await getRemoteScript(
			`${REMOTE_URL}/remoteEntry.js`,
			mfName,
			module,
		);

		mountComponentMain(result, ref.current, {
			props: {
				name: attrs.name,
			},
			on: {
				hello: attrs.hello,
			},
		});
	};
	useEffect(() => {
		getComp();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <div ref={ref}>RemoteComp</div>;
};

export default RemoteComp;

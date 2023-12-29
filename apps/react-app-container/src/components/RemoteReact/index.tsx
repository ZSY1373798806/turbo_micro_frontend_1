import { getRemoteScript, reactInVue } from "@repe/remote-utils";
import { useEffect, useRef } from "react";

interface ReactHeaderProps {
	mfName: "ReactApp";
	module: "./ReactHeader";
	attrs: {
		title: string;
	};
}

type IProps = ReactHeaderProps;

const RemoteReact = (props: IProps) => {
	const ref = useRef(null);
	const { mfName, module, attrs } = props;

	const getRemoteComp = async () => {
		const REMOTE_URL = process.env.REACT_APP_REACT_REMOTE_URL;
		// import 远程组件
		const result = await getRemoteScript(
			`${REMOTE_URL}/remoteEntry.js`,
			mfName,
			module,
		);
		if (ref.current) {
			reactInVue(result, ref.current, attrs);
		}
	};
	useEffect(() => {
		getRemoteComp();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <div ref={ref}>Loading...</div>;
};

export default RemoteReact;

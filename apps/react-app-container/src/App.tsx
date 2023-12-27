import React from "react";
import style from "./App.module.css";

import RemoteVue from "./components/RemoteVue";
import RemoteReact from "./components/RemoteReact";
import { getRemoteScript } from "@repe/remote-utils";
const ReactHeader = React.lazy(() => import("ReactApp/ReactHeader"));

function App() {
	const handleClick = async () => {
		const REMOTE_URL = process.env.REACT_APP_REACT_REMOTE_URL as string;
		const module = (await getRemoteScript(
			`${REMOTE_URL}/remoteEntry.js`,
			"ReactApp",
			"./ReactUtils",
		)) as unknown as ReactAppUtils;
		module.print("zsy");
	};
	return (
		<div className="App">
			<div className={style.header}>
				<ReactHeader title="this is remote react header" />
				<RemoteReact
					mfName="ReactApp"
					module="./ReactHeader"
					attrs={{ title: "this is remote react header" }}
				/>
				<button onClick={handleClick}>调用react remote alert</button>
			</div>
			<div className={style.body}>
				<div className={style.sidebar}>
					<RemoteVue
						mfName="VueApp"
						module="./Sidebar"
						attrs={{
							props: {
								title: "this is sidebar title",
							},
							on: {
								click: () => {
									console.log("hello");
								},
							},
						}}
					/>
				</div>
				<div className={style.body}>body</div>
			</div>
			<div className={style.footer}>
				<RemoteVue
					mfName="VueApp"
					module="./Footer"
					attrs={{
						props: {
							bgColor: "yellow",
							title: "this is sidebar title",
							year: 2023,
						},
					}}
				/>
			</div>
		</div>
	);
}

export default App;

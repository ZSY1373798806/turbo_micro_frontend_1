import React from "react";
import style from "./App.module.css";

import RemoteVue from "./components/RemoteVue";
import RemoteReact from "./components/RemoteReact";
const ReactHeader = React.lazy(() => import("ReactApp/ReactHeader"));

function App() {
	return (
		<div className="App">
			<div className={style.header}>
				<ReactHeader title="this is remote react header" />
				<RemoteReact
					mfName="ReactApp"
					module="./ReactHeader"
					attrs={{ title: "this is remote react header" }}
				/>
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

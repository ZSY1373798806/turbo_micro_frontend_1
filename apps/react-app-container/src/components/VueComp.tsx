import React from "react";
import RemoteComp from "./remote";

const VueComp = () => {
	return (
		<div>
			<h2>vue 调用 react</h2>
			<RemoteComp
				mfName="VueApp"
				module="./VueButton"
				attrs={{
					name: "nihao",
					hello: () => {
						console.log("hello");
					},
				}}
			/>
		</div>
	);
};

export default VueComp;

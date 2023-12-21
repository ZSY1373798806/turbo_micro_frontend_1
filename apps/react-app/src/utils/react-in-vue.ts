import React from "react";
import ReactDOM from "react-dom/client";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default (compName: any, targetEl: Element, attrs: any) => {
	const root = ReactDOM.createRoot(targetEl);
	root.render(React.createElement(compName, attrs));
};

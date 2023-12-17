import React from "react";
import "./App.css";
import ReactButton from "./components/react-button";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<ReactButton
					click={() => {
						alert("react app page");
					}}
				></ReactButton>
			</header>
		</div>
	);
}

export default App;

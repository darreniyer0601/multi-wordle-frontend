import React from "react";
import "./App.css";
import Attempt from "./components/attempt";

import Grid from "./components/grid";
import ContextState from "./context/ContextState";

function App() {
	return (
		<div className="App">
			<ContextState>
        <h2>Hello</h2>
				<Grid />
        <Attempt />
			</ContextState>
		</div>
	);
}

export default App;

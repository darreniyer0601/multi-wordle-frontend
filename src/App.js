import React from "react";
import "./App.css";
import Attempt from "./components/attempt";

import Grid from "./components/grid";
import ContextState from "./context/ContextState";

function App() {
	return (
		<div className="App">
			<ContextState>
        <h2>Screw NFTs! Let's make some words!</h2>
				<Grid />
        <br></br>
        <h3>Shoot your shot soldier!</h3>
        <Attempt />
			</ContextState>
		</div>
	);
}

export default App;

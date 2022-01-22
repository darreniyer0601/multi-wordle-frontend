import React from "react";
import "./App.css";
import Attempt from "./components/attempt";

import Grid from "./components/grid";
import Timer from "./components/timer";
import ContextState from "./context/ContextState";

function App() {
	return (
		<div className="App">
			<ContextState>
        <h2>Wordly</h2>
        <Timer />
				<Grid />
        <br></br>
        <h3>Shoot your shot soldier!</h3>
        <Attempt />
			</ContextState>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Comic+Neue"></link>
		</div>
	);
}

export default App;

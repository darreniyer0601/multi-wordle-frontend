import React from "react";

// Components
import Attempt from "../components/attempt";
import Grid from "../components/grid";
import Timer from "../components/timer";

const Single = () => {
	return (
		<div className="App">
			<h2>Single Player</h2>
			<Timer />
			<Grid />
			<br></br>
			<Attempt />
		</div>
	);
};

export default Single;

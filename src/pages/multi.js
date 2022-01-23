import React, { useEffect, useContext } from "react";
import Timer from "../components/timer";
import Grid from "../components/grid";
import Attempt from "../components/attempt";

import ContextObject from "../context/ContextObject";

const Multi = () => {
	const ctx = useContext(ContextObject);

	useEffect(() => {
		ctx.getWord();
		// eslint-disable-next-line
	}, []);

	function disappear() {
		document.getElementById("rectangle1").style.display = "none";
		document.getElementById("rectangle2").style.display = "none";
	}

	disappear();
	return (
		<div>
			<h2>Multiplayer</h2>
			<Timer />
			<div id="ourgrid">
				<Grid userGrid={true} />
				<Attempt />
			</div>
			<div id="oponentgrid">
				<Grid userGrid={false} />
			</div>
		</div>
	);
};

export default Multi;

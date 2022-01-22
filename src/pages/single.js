import React, { useEffect, useContext } from "react";
import ContextObject from "../context/ContextObject";

// Components
import Attempt from "../components/attempt";
import Grid from "../components/grid";
import Timer from "../components/timer";

const Single = () => {
	const ctx = useContext(ContextObject);

	useEffect(() => {
		ctx.getWord();
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		if (ctx.win) {
			alert('You have completed the challenge!');
		} else {
			if (ctx.attempt >= 6) {
				alert('Sorry! Try again next time!');
			}
		}
	}, [ctx]);

	return (
		<div className="App">
			<h2>Single Player</h2>
			<Timer />
			<Grid userGrid={true} />
			<br></br>
			<Attempt />
		</div>
	);
};

export default Single;

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

	useEffect(() => {
		if (ctx.win) {
			alert('You have completed the challenge!');
		} else {
			if (ctx.attempt >= 6) {
				alert('Sorry! Try again next time!');
			} else {
				if (ctx.oppWin) {
					alert("Sorry! The opponent won!");
				} else {
					if (ctx.opponentAttempt >= 6) {
						alert("You won due to your opponent's loss!");
					}
				}
			}
		}
	}, [ctx]);

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

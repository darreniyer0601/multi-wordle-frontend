import React, { useEffect, useContext } from "react";

import Node from "./node";
import ContextObject from "../context/ContextObject";

const Grid = () => {
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

	const grid = [0, 1, 2, 3, 4, 5];
	const row = [0, 1, 2, 3, 4];

	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			{grid.map((rowNum) => (
                <div key={rowNum} id={rowNum} style={{ display: "flex", justifyContent: "center" }}>
					{row.map((colNum) => (
						<Node id={rowNum * 10 + colNum} />
					))}
				</div>
			))}
		</div>
	);
};

export default Grid;

import React from "react";

import Node from "./node";

const Grid = () => {
	const grid = [1, 2, 3, 4, 5, 6];
	const row = [1, 2, 3, 4, 5];

	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			{grid.map((rowNum) => (
                <div id={rowNum} style={{ display: "flex", justifyContent: "center" }}>
					{row.map((colNum) => (
						<Node id={rowNum * 10 + colNum} />
					))}
				</div>
			))}
		</div>
	);
};

export default Grid;

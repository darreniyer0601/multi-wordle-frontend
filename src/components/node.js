import React, { useContext } from "react";

import ContextObject from "../context/ContextObject";

const Node = (props) => {
	const ctx = useContext(ContextObject);

	const { gridState, gridAttempt } = ctx;

	const row = Math.round(props.id / 10);
	const col = props.id % 10;

	return (
		<div id={props.id} key={props.id}>
			{gridState && gridState[row] && gridState[row][col] ? (
				<div className={`node col-${gridState[row][col]}`}>
					{gridAttempt && gridAttempt[row] && gridAttempt[row][col]
						? gridAttempt[row][col]
						: ""}
				</div>
			) : (
				<div className="node">
					{gridAttempt && gridAttempt[row] && gridAttempt[row][col]
						? gridAttempt[row][col]
						: ""}
				</div>
			)}
		</div>
	);
};

export default Node;

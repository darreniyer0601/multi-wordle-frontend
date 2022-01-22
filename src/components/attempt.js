import React, { useState, useContext } from "react";

import ContextObject from "../context/ContextObject";

const Attempt = () => {
	const [state, setState] = useState("");
	const ctx = useContext(ContextObject);

	const handleChange = (e) => {
		setState(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		ctx.userAttempt(state);
		setState("");
	};

	const resetGame = () => {
		ctx.getWord();
	};

	return (
		<form onSubmit={handleSubmit}>
			{ctx.win
				? null
				: ctx.attempt < 6 && (
						<input
							type="text"
							onChange={handleChange}
							value={state}
							minLength={5}
							maxLength={5}
						/>
				  )}
			<br></br>
			{ctx.win ? (
				<button type="button" onClick={resetGame}>
					Play Again?
				</button>
			) : (
				ctx.attempt >= 6 && (
					<button type="button" onClick={resetGame}>
						Play Again?
					</button>
				)
			)}
		</form>
	);
};

export default Attempt;

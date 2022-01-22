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
					Put 'er there soldier! Give it another shot!
				</button>
			) : (
				ctx.attempt >= 6 && (
					<button type="button" onClick={resetGame}>
						Don't give up soldier! Try that again!
					</button>
				)
			)}
		</form>
	);
};

export default Attempt;

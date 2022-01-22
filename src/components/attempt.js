import React, { useState, useContext } from "react";

import ContextObject from "../context/ContextObject";

const Attempt = () => {
	const [state, setState] = useState("");
    const ctx = useContext(ContextObject);

    const handleChange = (e) => {
        setState(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        ctx.userAttempt(state);
        setState('');
    }

    const resetGame = () => {
        ctx.getWord();
    }

	return <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} value={state} maxLength={5} />
        <br></br>
        {
            !ctx.win && ctx.attempt >= 6 && (
                <button type="button" onClick={resetGame}>Don't give up soldier! Try that again!</button>
            )
        }
    </form>;
};

export default Attempt;

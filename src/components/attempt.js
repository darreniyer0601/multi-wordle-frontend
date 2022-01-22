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
    }

	return <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} />
    </form>;
};

export default Attempt;

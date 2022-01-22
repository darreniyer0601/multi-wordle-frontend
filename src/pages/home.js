import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="App">
			<h2>Wordly</h2>
			<h4>Welcome to Wordly</h4>
            <p><small>This is totally not a ripoff of Wordle</small></p>
			<div className="d-flex flex-column text-align-center align-items-center">
				<strong>Now choose between single and multiplayer!</strong>
				<Link className="btn btn-dark w-25 m-2" to="/single">Single</Link>
				<Link className="btn btn-light w-25 m-2" to="/multi">Multiplayer</Link>
			</div>
		</div>
	);
};

export default Home;

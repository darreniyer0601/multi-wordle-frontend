import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="App">
			<h2>Wordly</h2>
			<h4>Welcome to Wordly</h4>
            <p><small>This is totally not a ripoff of Wordle</small></p>
			<div className="d-flex flex-column text-align-center">
				<strong>Now choose between single and multiplayer!</strong>
				<Link className="btn btn-light" to="/single">Single</Link>
				<Link className="btn btn-light" to="/multi">Multiplayer</Link>
			</div>
		</div>
	);
};

export default Home;

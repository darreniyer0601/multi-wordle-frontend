import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="App">
			<h2>Wordly</h2>
			<h4>Welcome to Wordly</h4>
            <p><small>A word-based game to test your vocabulary.</small></p>
            <p><small>Enter 5 letter words and receive hints.</small></p>
            <p><small>Use the hints to get closer to the correct answer.</small></p>
			<div className="d-flex flex-column align-items-center">
				<strong>Now choose between single and multiplayer!</strong>
				<Link className="btn btn-light" to="/single">Single</Link>
				<Link className="btn btn-light" to="/rooms">Multiplayer</Link>
			</div>
		</div>
	);
};

export default Home;

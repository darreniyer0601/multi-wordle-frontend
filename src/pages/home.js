import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ContextObject from "../context/ContextObject";

const Home = () => {
	const ctx = useContext(ContextObject);

	useEffect(() => {
		ctx.getWord();
		// eslint-disable-next-line
	}, []);

	function appear() {
		if (document.getElementById("rectangle1") === null) {
			return;
		}
		document.getElementById("rectangle1").style.display = "block"
		document.getElementById("rectangle2").style.display = "block"
	}
	appear();
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

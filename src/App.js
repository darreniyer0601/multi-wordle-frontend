import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";

// Pages
import Home from "./pages/home";
import Single from "./pages/single";
import Multi from "./pages/multi";

import ContextState from "./context/ContextState";

function App() {
	return (
		<div className="App">
			<ContextState>
				<nav>
					<ul className="horizontal gray">
						<li>
							<Link className="nav-link" to='/' >Home</Link>
						</li>
					</ul>
				</nav>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path='/single' element={<Single />} />
					<Route path='/multi' element={<Multi />} />
				</Routes>
			</ContextState>
		</div>
	);
}

export default App;

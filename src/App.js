import React from "react";

import "./App.css";

import Timer from "./Timer";
import "./Timer.css";

export default function App() {
	return (
		<div className="App">
			<h1>Pomodoro Timer App</h1>
			<Timer />
		</div>
	);
}

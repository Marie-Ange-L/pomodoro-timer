import React, { useState } from "react";
import Timer from "./Timer";

import "./App.css";
import "./Timer.css";

export default function App() {
	const [sessionType, setSessionType] = useState("Focus");
	const [defaultTime, setDefaultTime] = useState(1500);

	const handleSessionChange = (type) => {
		setSessionType(type);
		switch (type) {
			case "Focus":
				setDefaultTime(1500);
				break;
			case "Short Break":
				setDefaultTime(300);
				break;
			case "Long Break":
				setDefaultTime(1800);
				break;
			default:
				setDefaultTime(1500);
		}
	};

	return (
		<div className="App">
			<h1>Pomodoro Timer App</h1>
			<div className="SessionButtons">
				<button onClick={() => handleSessionChange("Focus")}>Focus</button>
				<button onClick={() => handleSessionChange("Short Break")}>
					Short Break
				</button>
				<button onClick={() => handleSessionChange("Long Break")}>
					Long Break
				</button>
			</div>
			<Timer sessionType={sessionType} defaultTime={defaultTime} />
		</div>
	);
}

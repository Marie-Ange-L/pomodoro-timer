import React, { useState } from "react";
import Timer from "./Timer";
import SessionButtons from "./SessionButtons";

import "./App.css";
import "./Timer.css";

export default function App() {
	const [sessionType, setSessionType] = useState("Focus");

	const handleSessionChange = (type) => {
		setSessionType(type);
	};

	return (
		<div className="App">
			<h1>Pomodoro Timer App</h1>
			<SessionButtons handleSessionChange={handleSessionChange} />
			<Timer sessionType={sessionType} />
		</div>
	);
}

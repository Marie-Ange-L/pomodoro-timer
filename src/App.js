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
			<div className="container">
				<div>
					<SessionButtons handleSessionChange={handleSessionChange} />
				</div>
				<div>
					<Timer sessionType={sessionType} />
				</div>
			</div>
		</div>
	);
}

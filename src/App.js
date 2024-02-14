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

	const restoreDefaultSettings = () => {
		const confirmed = window.confirm(
			"🍅 Please confirm settings restoration 🍅\n\nAre you sure you want to restore all settings to their default values?\n\n🕒 Focus time: 25 minutes\n🍃 Short break: 5 minutes\n🌿 Long break: 30 minutes"
		);
		if (confirmed) {
			localStorage.clear();
			window.location.reload();
		}
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
			<div className="footer">
				<div className="restore-default-settings">
					<a href="#" onClick={restoreDefaultSettings}>
						Restore Default Settings
					</a>
				</div>
			</div>
		</div>
	);
}

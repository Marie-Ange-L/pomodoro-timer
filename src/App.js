import React, { useState } from "react";
import Timer from "./Timer";
import SessionButtons from "./SessionButtons";
import Modal from "./Modal";

import "./App.css";
import "./Timer.css";

export default function App() {
	const [sessionType, setSessionType] = useState("Focus");
	const [showModal, setShowModal] = useState(false);

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

	const openModal = () => {
		setShowModal(true);
	};

	const closeModal = () => {
		setShowModal(false);
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
			<Modal showModal={showModal} closeModal={closeModal} />
			<div className="footer">
				<div className="pomodoro-info">
					<button onClick={openModal}>About this app</button>
				</div>
				|
				<div className="restore-default-settings">
					<button onClick={restoreDefaultSettings}>
						Restore default settings
					</button>
				</div>
			</div>
		</div>
	);
}

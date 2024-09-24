import React, { useState } from "react";
import Timer from "./Timer";
import SessionButtons from "./SessionButtons";
import Modal from "./Modal";

import "./App.css";
import "./Timer.css";

const DEFAULT_SESSION_TYPE = "Focus";

export default function App() {
	const [sessionType, setSessionType] = useState(DEFAULT_SESSION_TYPE);
	const [showModal, setShowModal] = useState(false);
	const [backgroundUrl, setBackgroundUrl] = useState(
		"https://picsum.photos/1200/800"
	);

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

	const refreshBackgroundImage = () => {
		const img = new Image();
		img.src = `https://picsum.photos/1200/800?_=${Date.now()}`;
		img.onload = () => {
			setBackgroundUrl(img.src);
		};
	};

	return (
		<div className="App" style={{ backgroundImage: `url(${backgroundUrl})` }}>
			<div className="gradient"></div>
			<div className="container">
				<SessionButtons handleSessionChange={handleSessionChange} />
				<Timer sessionType={sessionType} />
			</div>
			<Modal showModal={showModal} closeModal={closeModal} />
			<div className="footer">
				<div className="pomodoro-info">
					<button onClick={openModal}>About this app</button>
				</div>
				|
				<div className="restore-default-settings">
					<button onClick={restoreDefaultSettings}>Reset settings</button>
				</div>
				|
				<div className="refresh-background">
					<button onClick={refreshBackgroundImage}>Update Image</button>
				</div>
			</div>
		</div>
	);
}

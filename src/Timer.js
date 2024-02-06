import React, { useState, useEffect } from "react";

import "./Timer.css";

const DEFAULT_TIME = 1500;

export default function Timer() {
	const [time, setTime] = useState(DEFAULT_TIME);
	const [timerActive, setTimerActive] = useState(false);

	useEffect(() => {
		let interval;

		if (timerActive && time > 0) {
			interval = setInterval(() => {
				setTime((prevTime) => prevTime - 1);
			}, 1000);
		} else {
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	}, [timerActive, time]);

	const startTimer = () => setTimerActive(true);
	const pauseTimer = () => setTimerActive(false);
	const resetTimer = () => setTime(DEFAULT_TIME);

	return (
		<div className="Timer">
			<h2>{formatTime(time)}</h2>
			<button onClick={startTimer}>Start</button>
			<button onClick={pauseTimer}>Pause</button>
			<button onClick={resetTimer}>Reset</button>
		</div>
	);
}

function formatTime(seconds) {
	const minutes = Math.floor(seconds / 60);
	const remainingSeconds = seconds % 60;
	return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
}

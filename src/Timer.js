import React, { useState, useEffect } from "react";

import "./Timer.css";

const DEFAULT_TIMES = {
	Focus: 1500, // 25 minutes
	"Short Break": 300, // 5 minutes
	"Long Break": 1800, // 30 minutes
};

export default function Timer({ sessionType = "Focus" }) {
	const [time, setTime] = useState(DEFAULT_TIMES[sessionType]);
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

	useEffect(() => {
		setTime(DEFAULT_TIMES[sessionType]); // Update time when sessionType changes
	}, [sessionType]);

	const startTimer = () => setTimerActive(true);
	const pauseTimer = () => setTimerActive(false);
	const resetTimer = () => setTime(DEFAULT_TIMES[sessionType]);
	const incrementTime = () => setTime((prevTime) => prevTime + 60); // Increase time by 1 minute
	const decrementTime = () => {
		if (time > 60) {
			setTime((prevTime) => prevTime - 60); // Decrease time by 1 minute
		}
	};

	return (
		<div className="Timer">
			<div className="timer-display">
				<button className="control-button" onClick={decrementTime}>
					&minus;
				</button>
				<h2>{formatTime(time)}</h2>
				<button className="control-button" onClick={incrementTime}>
					+
				</button>
			</div>
			<div className="timer-buttons">
				<button onClick={startTimer}>Start</button>
				<button onClick={pauseTimer}>Pause</button>
				<button onClick={resetTimer}>Reset</button>
			</div>
		</div>
	);
}

function formatTime(seconds) {
	const minutes = Math.floor(seconds / 60);
	const remainingSeconds = seconds % 60;
	return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
}

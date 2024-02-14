import React, { useState, useEffect } from "react";
import {
	FaPlay,
	FaPause,
	FaRedo,
	FaVolumeUp,
	FaVolumeMute,
} from "react-icons/fa"; // Import icons from react-icons library
import "./Timer.css";
import dingSound from "./ding-ding-ding.mp3";

const DEFAULT_TIMES = {
	Focus: 1500, // 25 minutes
	"Short Break": 300, // 5 minutes
	"Long Break": 1800, // 30 minutes
};

export default function Timer({ sessionType = "Focus" }) {
	const [time, setTime] = useState(DEFAULT_TIMES[sessionType]);
	const [timerActive, setTimerActive] = useState(false);
	const [soundOn, setSoundOn] = useState(false);

	useEffect(() => {
		let interval;

		if (timerActive && time > 0) {
			interval = setInterval(() => {
				setTime((prevTime) => prevTime - 1);
			}, 1000);
		} else {
			clearInterval(interval);
			if (time === 0 && soundOn) {
				const audio = new Audio(dingSound);
				audio.play();
			}
		}
		return () => clearInterval(interval);
	}, [timerActive, time, soundOn]);

	useEffect(() => {
		setTime(DEFAULT_TIMES[sessionType]);
	}, [sessionType]);

	const toggleTimer = () => {
		setTimerActive((prevActive) => !prevActive);
	};

	const toggleSound = () => {
		setSoundOn((prevSoundOn) => !prevSoundOn);
	};

	const resetTimer = () => setTime(DEFAULT_TIMES[sessionType]);
	const incrementTime = () => setTime((prevTime) => prevTime + 60);
	const decrementTime = () => {
		if (time > 60) {
			setTime((prevTime) => prevTime - 60);
		}
	};

	return (
		<div className="Timer">
			<div className="timer-display">
				<button onClick={decrementTime}>−</button>
				<h1>{formatTime(time)}</h1>
				<button onClick={incrementTime}>+</button>
			</div>
			<div className="timer-buttons">
				<button className="sound-icon" onClick={toggleSound}>
					{soundOn ? <FaVolumeUp /> : <FaVolumeMute />}
				</button>
				<button className="playpause-icon" onClick={toggleTimer}>
					{timerActive ? <FaPause /> : <FaPlay />}
				</button>
				<button className="reset-icon" onClick={resetTimer}>
					<FaRedo />
				</button>
			</div>
		</div>
	);
}

function formatTime(seconds) {
	const minutes = Math.floor(seconds / 60);
	const remainingSeconds = seconds % 60;
	return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
}

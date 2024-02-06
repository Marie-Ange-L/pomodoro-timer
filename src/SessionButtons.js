import React from "react";
import "./SessionButtons.css";

export default function SessionButtons({ handleSessionChange }) {
	return (
		<div className="SessionButtons">
			<button onClick={() => handleSessionChange("Focus")}>Focus</button>
			<button onClick={() => handleSessionChange("Short Break")}>
				Short Break
			</button>
			<button onClick={() => handleSessionChange("Long Break")}>
				Long Break
			</button>
		</div>
	);
}

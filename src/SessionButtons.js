import React from "react";
import "./SessionButtons.css";

export default function SessionButtons({ handleSessionChange }) {
	return (
		<div className="SessionButtons">
			<div className="break-buttons">
				<button
					className="short-break"
					onClick={() => handleSessionChange("Short Break")}
				>
					Short Break
				</button>
				<button
					className="long-break"
					onClick={() => handleSessionChange("Long Break")}
				>
					Long Break
				</button>
			</div>
			<button className="focus" onClick={() => handleSessionChange("Focus")}>
				Focus
			</button>
		</div>
	);
}

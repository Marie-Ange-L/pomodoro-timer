import React from "react";

export default function TimerSaveLink({
	showSaveLink,
	saveNewDefaultTime,
	time,
}) {
	return (
		<div className="timer-save-link">
			&nbsp;
			{showSaveLink && (
				<button onClick={() => saveNewDefaultTime(time)}>
					Save change for next session
				</button>
			)}
		</div>
	);
}

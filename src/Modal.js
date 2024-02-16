import React from "react";
import "./Modal.css";

export default function Modal({ showModal, closeModal }) {
	return (
		<div className="Modal">
			{showModal && (
				<div className="modal-container">
					<div className="modal-content">
						<span className="modal-close" onClick={closeModal}>
							&times;
						</span>
						<h2>About this app</h2>
						<p>
							This app is a simple Pomodoro timer that helps you focus and
							manage your time effectively!
						</p>
						<p>
							It utilises the Pomodoro Technique, a&nbsp;time management method,
							to improve focus and productivity.
						</p>
						<ul>
							<li>
								🕒 Features customisable timers for focus sessions, short
								breaks, and long breaks.
							</li>
							<li>
								🔊 Provides a&nbsp;sound alert at the end of each session to
								notify you of the completion!
							</li>
							<li>🔧 Allows you to restore default settings.</li>
						</ul>

						<small>
							Learn more about
							<br />
							the Pomodoro Technique
							<br />
							<a
								href="https://en.wikipedia.org/wiki/Pomodoro_Technique"
								title="The Pomodoro Technique page on Wikipedia (opens in new tab)"
								target="_blank"
								rel="noreferrer"
							>
								on Wikipedia
							</a>
							.
						</small>
						<p className="tomato">🍅 🍅 🍅 🍅 🍅 🍅 🍅</p>
						<small>
							Coded by{" "}
							<a
								href="https://www.marieange.dev/"
								title="Marie-Ange's portfolio (opens in new tab)"
								target="_blank"
								rel="noreferrer"
							>
								Marie-Ange L.
							</a>
							<br />
							Random free images from{" "}
							<a
								href="https://unsplash.com/fr/s/photos/landscape%2Cnature?license=free"
								title="Unsplash (opens in new tab)"
								target="_blank"
								rel="noreferrer"
							>
								Unsplash
							</a>
							.
						</small>
					</div>
				</div>
			)}
		</div>
	);
}

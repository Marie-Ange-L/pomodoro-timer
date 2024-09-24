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
							This app is a Pomodoro timer, designed with a&nbsp;minimalist
							approach and essential features to improve focus and boost
							productivity.
						</p>

						<p>
							<strong>How does it work?</strong>
							<br />
							Simply set the timer for 25 minutes, work on a&nbsp;single task
							with full focus, then take a&nbsp;short break before repeating.
							After completing four sessions, take a&nbsp;longer break to
							recharge.
						</p>
						<ul>
							<li>
								⏳ Features a&nbsp;customisable timer that can be saved for your
								next session.
							</li>
							<li>
								🔊 Provides a&nbsp;light "ding" sound alert at the end of each
								session.
							</li>
							<li>
								🌿 Offers calming nature visuals to enhance peace and
								tranquility.
							</li>
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
								href="https://picsum.photos/"
								title="The Lorem Ipsum for photos (opens in new tab)"
								target="_blank"
								rel="noreferrer"
							>
								Lorem Picsum
							</a>
							.
						</small>
					</div>
				</div>
			)}
		</div>
	);
}

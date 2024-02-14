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
						<h2>Pomodoro Technique</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Consectetur consequatur quod nemo esse expedita possimus veritatis
							sunt necessitatibus animi alias, voluptatum quas harum obcaecati
							praesentium, voluptas modi, in dignissimos? Mollitia ex optio
							voluptate delectus magnam modi sunt quam impedit perferendis,
							molestiae aut iste animi id quaerat. Obcaecati nulla dolorum
							velit?
						</p>
					</div>
				</div>
			)}
		</div>
	);
}

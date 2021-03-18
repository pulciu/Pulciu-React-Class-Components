import React, { Component } from "react";
import axios from "axios";
import "./Contact.css";

const API_PATH = "/api/SendEmail.php";

class Contact extends Component {
	state = {
		name: "",
		email: "",
		subject: "",
		message: "",
		error: "",
		mailSent: false,
	};

	checkInputFields = () => {
		if (!this.state.name) return "Please enter your name.";
		else if (!this.state.email || !this.state.email.includes("@") || !this.state.email.includes(".")) return "Please enter a valid e-mail address.";
		else if (!this.state.subject) return "Please enter a subject.";
		else if (!this.state.message) return "Please enter a message.";
		return "";
	};

	handleFormSubmit = (event) => {
		event.preventDefault();

		const result = this.checkInputFields();
		this.setState({ error: result });
		if (result) return;

		axios({
			method: "post",
			url: `${API_PATH}`,
			headers: { "content-type": "application/json" },
			data: { name: this.state.name, email: this.state.email, subject: this.state.subject, message: this.state.message },
		}).then((result) => {
			this.setState({ mailSent: true });
		});
	};

	contactStatus = () => {
		if (this.state.mailSent) {
			return (
				<div className="message-sent">
					<h3>Thank you for reaching out!</h3>
					<br /> We'll get back to you as soon as possible.
				</div>
			);
		} else {
			return (
				<form action="" method="post">
					<input type="text" placeholder="Full Name" name="name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
					<input type="email" placeholder="Email Address" name="email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
					<input type="text" placeholder="Subject" value={this.state.subject} onChange={(e) => this.setState({ subject: e.target.value })} />
					<textarea rows="6" placeholder="Your Message" value={this.state.message} onChange={(e) => this.setState({ message: e.target.value })}></textarea>
					<input type="submit" onClick={(e) => this.handleFormSubmit(e)} value="Send Message" />
				</form>
			);
		}
	};

	render() {
		return (
			<div className="contact rotate-in">
				<div className="contact-form">
					<div className="content copy-format">
						<h2>Get in touch!</h2>
						<h4>To: Stefan and Maia</h4>
						<br />
						<div className={this.state.error === "" ? "status" : "status form-error"}>{this.state.error}</div>

						{this.contactStatus()}
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;

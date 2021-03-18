import React, { Component } from "react";
import "./About.css";

class About extends Component {
	state = {
		imageClass: "",
	};

	render() {
		return (
			<div className="about rotate-in">
				<div className="about-top">
					<div className="content">
						<div className="photo">
							<img src="images/stefan_and_maia_pulciu.png" onLoad={() => this.setState({ imageClass: "loaded" })} className={this.state.imageClass} alt="Stefan and Maia Pulciu" />
						</div>
						<div className="copy">
							<div className="text copy-format">
								<h2>Two of us</h2>
								<h4>We're a married couple that enjoys design and coding projects</h4>
								<p>
									Pulciu is the personal portfolio of Maia and Stefan Pulciu. We are a married couple and we often work together on all sort of projects. It all started as a hobby in 2003 and later transformed into a job and passion at the same time. We love to travel and we currently live in
									Bucharest, Romania.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="about-bottom">
					<div className="expertise-content">
						<div className="content copy-format">
							<h3>Expertise</h3>
							<h5>We're pretty well-rounded</h5>
							<p>
								Here are some key words that might interest you: wireframes, website and app design, html, css, responsive, javascript, react, node, php, mysql, wordpress, drupal, shopify, hubspot, webflow, squarespace, brochures, flyers, presentation decks, video content, logo design, brand guides
								and more!
							</p>
						</div>
					</div>
					<div className="availability-content">
						<div className="content copy-format">
							<h3>Availability</h3>
							<h5>We're very flexible</h5>
							<p>We are available to work both remotely and on-site and are interested in freelance, part time or full time opportunities.</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default About;

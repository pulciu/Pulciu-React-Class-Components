import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
	state = {
		autoplay: true,
		slide: 0,
		slider: null,
	};

	componentDidMount() {
		this.setState({
			slider: setInterval(() => {
				let nextSlide = this.state.slide === 3 ? 0 : this.state.slide + 1;
				if (this.state.autoplay) this.setState({ slide: nextSlide });
				else clearInterval(this.state.slider);
			}, 5000),
		});
	}

	componentWillUnmount() {
		clearInterval(this.state.slider);
	}

	changeSlide = (index) => {
		this.setState({ autoplay: false, slide: index });
	};

	render() {
		return (
			<div className="home rotate-in">
				<div className="home-container">
					<div className="content">
						<h2>How can we help?</h2>
						<ul className="title">
							<li className={this.state.slide === 0 ? "selected" : ""} onClick={() => this.changeSlide(0)}>
								UI/UX
							</li>
							<li className={this.state.slide === 1 ? "selected" : ""} onClick={() => this.changeSlide(1)}>
								Dev
							</li>
							<li className={this.state.slide === 2 ? "selected" : ""} onClick={() => this.changeSlide(2)}>
								Marketing
							</li>
							<li className={this.state.slide === 3 ? "selected" : ""} onClick={() => this.changeSlide(3)}>
								Identity
							</li>
						</ul>
						<ul className="description">
							<li className={this.state.slide === 0 ? "selected" : ""}>Wireframes &gt; Design Style &gt; Final Designs for web and mobile apps.</li>
							<li className={this.state.slide === 1 ? "selected" : ""}>Front-end and back-end development. Experience with both PHP and Javascript based solutions.</li>
							<li className={this.state.slide === 2 ? "selected" : ""}>Print and digital marketing collateral (broshures, flyers, presentation decks, video content and more).</li>
							<li className={this.state.slide === 3 ? "selected" : ""}>Logos, brand guides, style scapes and more.</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;

import React, { Component } from "react";
import "./PickColorScheme.css";

class PickColorScheme extends Component {
	changeColorScheme = (colorScheme) => {
		this.props.hideMobileNav();

		document.body.classList.remove("show-color-schemes", "cs1", "cs2", "cs3");
		document.body.classList.add(colorScheme);
	};

	render() {
		return (
			<div className="color-schemes">
				<div>
					<h2>Please pick a color scheme:</h2>
					<ul>
						<li onClick={() => this.changeColorScheme("cs1")}></li>
						<li onClick={() => this.changeColorScheme("cs2")}></li>
						<li onClick={() => this.changeColorScheme("cs3")}></li>
					</ul>
				</div>
			</div>
		);
	}
}

export default PickColorScheme;

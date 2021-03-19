import React, { Component } from "react";
import "./WorkEntry.css";

class WorkEntry extends Component {
	state = {
		imageClass: "",
	};

	imageLoaded = () => {
		this.setState({ imageClass: "" });
		this.setState({ imageClass: "loaded" });
	};

	showHeartIcon = (portfolioItem) => {
		if (this.props.favorites.includes(portfolioItem)) {
			return (
				<div className="add-favorite icon favorite" onClick={() => this.props.removeFromFavorites(portfolioItem)}>
					<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 509.8 439.6" xmlSpace="preserve">
						<path
							d="M79.5,299.2C65.4,286,53,273.8,44,263.8c-55.8-62-55.2-151.5,1.4-208.2c28-27.9,65.2-43.3,104.8-43.3
                                c39.6,0,76.7,15.4,104.7,43.4C293.4,17.2,348,4.4,397.2,17.2l-145,128.7c-1.5-0.1-3-0.3-4.5-0.6c-7.7-1.3-14.6-4.9-20-10.3
                                l-26.1-26.1c-13.7-13.7-32-21.3-51.5-21.3s-37.8,7.6-51.5,21.3c-27.8,27.8-27.2,72.7,1.4,104.5c8.7,9.7,21.4,22.1,36,35.6
                                L79.5,299.2z M488.5,87.2L429,140c6.6,24.2,0.1,51.9-19.2,73.4c-31.5,35-115.3,105.6-154.9,138.4c-9.1-7.5-20.6-17.1-33.2-27.7
                                l-56.9,50.5c34.9,29.6,63.4,52.8,65.9,54.9c6.7,5.4,15.1,8.4,23.7,8.4h0.3c0.3,0,0.7,0,1,0c8.3,0,16.6-3,23.3-8.4
                                c5.7-4.6,140.1-113.9,186.7-165.7C512.1,212.4,519.6,142,488.5,87.2z M486,13.9L486,13.9c-13.3-15-36.5-16.4-51.5-3.1L80.8,324.8
                                c-15,13.3-16.4,36.5-3.1,51.5h0c13.3,15,36.5,16.4,51.5,3.1L482.9,65.5C497.9,52.1,499.3,29,486,13.9z"
						/>
					</svg>
				</div>
			);
		} else {
			return (
				<div className="add-favorite icon" onClick={() => this.props.addToFavorites(portfolioItem)}>
					<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 509.8 430.7" xmlSpace="preserve">
						<path
							className="st0"
							d="M464.4,45.9L464.4,45.9c-57.8-57.7-151.7-57.8-209.5,0C226.9,17.9,189.8,2.5,150.2,2.5
                                c-39.6,0-76.8,15.4-104.8,43.3C-11.2,102.5-11.8,192,44,254c46.6,51.8,181,161,186.7,165.7c6.7,5.4,15.1,8.4,23.7,8.4l0.3,0
                                c0.3,0,0.7,0,1,0c8.3,0,16.6-3,23.3-8.4c5.7-4.6,140.1-113.9,186.7-165.7C521.6,192,521,102.5,464.4,45.9z M409.8,203.6
                                c-31.5,35-115.3,105.6-154.9,138.4C215.3,309.3,131.6,238.7,100,203.6c-28.6-31.8-29.2-76.7-1.4-104.5c13.7-13.7,32-21.3,51.5-21.3
                                c19.5,0,37.8,7.6,51.5,21.3l26.1,26.1c5.4,5.4,12.3,9,20,10.3c12.4,2.5,25.2-1.3,34.1-10.3l26.1-26.1c28.4-28.4,74.6-28.4,103,0
                                C438.9,126.9,438.3,171.9,409.8,203.6L409.8,203.6z"
						/>
					</svg>
				</div>
			);
		}
	};

	render() {
		return (
			<li>
				<a href={this.props.item.url} target="_blank" rel="noreferrer" aria-label={this.props.item.title}>
					<h4>{this.props.item.title}</h4>
				</a>
				<img src={this.props.item.thumbnail} alt={this.props.item.title} onLoad={this.imageLoaded} className={this.state.imageClass} />
				{this.showHeartIcon(this.props.item)}
			</li>
		);
	}
}

export default WorkEntry;

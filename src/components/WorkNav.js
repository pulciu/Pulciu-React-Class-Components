import React, { Component } from "react";
import { filterByCategory, filterByTitle, getPortfolioItems } from "../api/PortfolioItems";
import "./WorkNav.css";

class WorkNav extends Component {
	state = {
		shareText: "Copy Link",
		searchValue: "",
	};

	changeCategory = (newCategory) => {
		this.props.updateCategory(newCategory);
		if (newCategory !== "search") this.props.updatePortfolio(filterByCategory(newCategory));
		this.setState({ searchValue: "" });
	};

	searchPortfolio = (e) => {
		this.setState({ searchValue: e.target.value });
		this.props.updatePortfolio(filterByTitle(e.target.value));
	};

	favoritesTabClasses = () => {
		let classes = "favorites";
		if (this.props.favorites.length > 0) classes = "favorites visible";
		if (this.props.category === "favorites") classes = "favorites visible selected";
		return classes;
	};

	showFavorites = () => {
		this.props.updateCategory("favorites");
		this.props.updatePortfolio(this.props.favorites);
		this.setState({ searchValue: "" });
	};

	createFavoritesLink = () => {
		let allItems = getPortfolioItems();
		let windowLocation = window.location.href;
		windowLocation = windowLocation.substr(0, windowLocation.lastIndexOf("/work") + 5);

		for (let i = 0; i < this.props.favorites.length; i++) {
			let index = allItems.indexOf(this.props.favorites[i]);
			windowLocation += i > 0 ? "-" + index : "/" + index;
		}

		// Only works on HTTPS or localhost
		navigator.clipboard.writeText(windowLocation);
		this.setState({ shareText: "Copied!" });
		setTimeout(() => {
			this.setState({ shareText: "Copy Link" });
		}, 5000);
	};

	render() {
		return (
			<div className="categories">
				<ul>
					<li className={this.props.category === "search" ? "search selected" : "search"}>
						<div className="tab-label">
							<input name="search" type="text" value={this.state.searchValue} placeholder="Search" onChange={this.searchPortfolio} onClick={() => this.changeCategory("search")} />
						</div>
						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xmlSpace="preserve">
							<g>
								<g>
									<path
										className="st0"
										d="M119.1,320.2c18.2,29.5,43.2,54.5,72.7,72.7L87.7,497c-20.1,20.1-52.6,20.1-72.7,0c0,0,0,0,0,0
												c-20.1-20.1-20.1-52.6,0-72.7L119.1,320.2z M308.1-0.1c112.6,0,204,91.4,204,204s-91.4,204-204,204s-204-91.4-204-204
												S195.6-0.1,308.1-0.1L308.1-0.1z M308.1,70.1c-73.9,0-133.8,60-133.8,133.8c0,73.9,60,133.8,133.8,133.8
												c73.9,0,133.8-60,133.8-133.8C441.9,130,382,70.1,308.1,70.1z"
									/>
								</g>
							</g>
						</svg>
						<div className="bar"></div>
					</li>
					<li className={this.props.category === "uiux" ? "selected" : ""} onClick={() => this.changeCategory("uiux")}>
						<div className="tab-label">UI/ UX</div>
						<div className="bar"></div>
					</li>
					<li className={this.props.category === "marketing" ? "selected" : ""} onClick={() => this.changeCategory("marketing")}>
						<div className="tab-label">Marketing</div>
						<div className="bar"></div>
					</li>
					<li className={this.props.category === "identity" ? "selected" : ""} onClick={() => this.changeCategory("identity")}>
						<div className="tab-label">Identity</div>
						<div className="bar"></div>
					</li>
					<li className={this.props.category === "others" ? "selected" : ""} onClick={() => this.changeCategory("others")}>
						<div className="tab-label">Others</div>
						<div className="bar"></div>
					</li>
					<li className={this.favoritesTabClasses()}>
						<div className="tab-label">
							<div onClick={this.showFavorites}>
								<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 516 430.7" xmlSpace="preserve">
									<g>
										<g>
											<path
												className="st0"
												d="M472.9,44c-55.7-55.7-146.3-55.7-201.9,0L258,56.9L245.1,44C189.4-11.7,98.8-11.7,43.1,44
													c-54.5,54.5-54.9,141-0.8,201.1c49.3,54.8,194.8,173.2,200.9,178.2c4.2,3.4,9.2,5.1,14.2,5.1c0.2,0,0.3,0,0.5,0
													c5.2,0.2,10.4-1.5,14.7-5.1c6.2-5,151.6-123.4,201-178.2C527.8,185,527.4,98.6,472.9,44z M440.1,214.9
													C401.6,257.6,295.9,345.7,258,376.9C220,345.7,114.4,257.6,75.9,214.9C38.2,173,37.9,113.2,75.1,76c19-19,44-28.5,69-28.5
													s50,9.5,69,28.5l28.4,28.4c3.4,3.4,7.6,5.4,12.1,6.1c7.3,1.6,15.1-0.5,20.8-6.1L302.9,76c38.1-38,100-38,138,0
													C478.1,113.2,477.8,173,440.1,214.9z"
											/>
										</g>
									</g>
								</svg>
								Favorites <span>{this.props.favorites.length}</span>
							</div>
							<div className="share" onClick={this.createFavoritesLink}>
								{this.state.shareText}
							</div>
						</div>
						<div className="select-favorites-tab" onClick={this.showFavorites}></div>
						<div className="bar"></div>
					</li>
				</ul>
			</div>
		);
	}
}

export default WorkNav;

import React, { Component } from "react";
import axios from "axios";
import WorkEntry from "./WorkEntry";
import WorkNav from "./WorkNav";
import "./Work.css";

class Work extends Component {
	state = {
		allPortfolioItems: [],
		portfolioDisplayed: [],
		favorites: [],
		category: "uiux",
		transition: "",
		portfolioUpdate: null,
		shareText: "Copy Link",
		searchValue: "",
	};

	componentDidMount() {
		// Get the portfolio items
		axios.get("../resources/portfolio.json").then((response) => {
			this.setState({ allPortfolioItems: response.data.portfolio });

			// If the current URL contains a favorites collection, display those items, else display the UI/UX category
			if (this.props.match.params.favoritesCollection) {
				let favoriteIds = this.props.match.params.favoritesCollection.split("-");
				let favorites = [];

				for (let i = 0; i < favoriteIds.length; i++) {
					favorites.push(response.data.portfolio[parseInt(favoriteIds[i])]);
				}

				this.setState({ portfolioDisplayed: favorites });
				this.setState({ favorites: favorites });
				this.setState({ category: "favorites" });
			} else {
				this.setState({ portfolioDisplayed: response.data.portfolio.filter((p) => p.category === "uiux") });
			}
		});
	}

	// Update the portfolio items that are being displayed via a quick fade in/out animation
	updateDisplayedPortfolio = (portfolioItems) => {
		clearTimeout(this.state.portfolioUpdate);
		this.setState({
			transition: "fadeOut",
			portfolioUpdate: setTimeout(() => {
				this.setState({ portfolioDisplayed: [] });
				this.setState({ portfolioDisplayed: portfolioItems, transition: "" });
			}, 300),
		});
	};

	changeCategory = (newCategory) => {
		this.setState({ category: newCategory });

		if (newCategory !== "search") {
			if (newCategory === "favorites") {
				this.updateDisplayedPortfolio(this.state.favorites);
			} else {
				this.updateDisplayedPortfolio(this.state.allPortfolioItems.filter((p) => p.category === newCategory));
			}
			this.setState({ searchValue: "" });
		}
	};

	searchPortfolio = (e) => {
		this.setState({ searchValue: e.target.value });
		this.updateDisplayedPortfolio(this.state.allPortfolioItems.filter((p) => p.title.toLowerCase().includes(e.target.value.toLowerCase())));
	};

	createFavoritesLink = () => {
		let windowLocation = window.location.href;
		windowLocation = windowLocation.substr(0, windowLocation.lastIndexOf("/work") + 5); // Clean the URL in case it already contains a favorites collection

		for (let i = 0; i < this.state.favorites.length; i++) {
			let index = this.state.allPortfolioItems.indexOf(this.state.favorites[i]);
			windowLocation += i > 0 ? "-" + index : "/" + index;
		}

		// Only works on HTTPS or localhost
		navigator.clipboard.writeText(windowLocation);
		this.setState({ shareText: "Copied!" });
		setTimeout(() => {
			this.setState({ shareText: "Copy Link" });
		}, 5000);
	};

	// Called when the heart icon of a project is clicked
	addToFavorites = (portfolioItem) => {
		let newFavorites = [...this.state.favorites, portfolioItem];
		this.setState({ favorites: newFavorites });
	};

	// Called when the slashed heart icon of a project is clicked
	removeFromFavorites = (portfolioItem) => {
		let newFavorites = this.state.favorites.filter((n) => n !== portfolioItem);
		this.setState({ favorites: newFavorites });
		if (this.state.category === "favorites") this.setState({ portfolioDisplayed: newFavorites });

		if (newFavorites.length === 0) {
			this.setState({ category: "uiux" });
			this.updateDisplayedPortfolio(this.state.allPortfolioItems.filter((p) => p.category === "uiux"));
		}
	};

	render() {
		return (
			<div className="work rotate-in">
				<WorkNav createFavoritesLink={this.createFavoritesLink} searchPortfolio={this.searchPortfolio} changeCategory={this.changeCategory} shareText={this.state.shareText} searchValue={this.state.searchValue} category={this.state.category} favorites={this.state.favorites} />

				<div className="projects-grid">
					<ul className={this.state.transition}>
						{this.state.portfolioDisplayed.map((p) => (
							<WorkEntry key={this.state.portfolioDisplayed.indexOf(p)} item={p} favorites={this.state.favorites} addToFavorites={this.addToFavorites} removeFromFavorites={this.removeFromFavorites} />
						))}
					</ul>
				</div>
			</div>
		);
	}
}

export default Work;

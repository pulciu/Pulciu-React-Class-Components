import React, { Component } from "react";
import { filterByCategory, getFavoritesFromLink } from "../api/PortfolioItems";
import WorkEntry from "./WorkEntry";
import WorkNav from "./WorkNav";
import "./Work.css";

class Work extends Component {
	state = {
		portfolioItems: filterByCategory("uiux"),
		favorites: [],
		category: "uiux",
		transition: "",
		portfolioUpdate: null,
	};

	updatePortfolio = (newPortfolio) => {
		clearTimeout(this.state.portfolioUpdate);
		this.setState({
			transition: "fadeOut",
			portfolioUpdate: setTimeout(() => {
				this.setState({ portfolioItems: [] });
				this.setState({ portfolioItems: newPortfolio, transition: "" });
			}, 300),
		});
	};

	// Gets called by the heart icon in <WorkEntry />
	updateFavorites = (newFavorites) => {
		this.setState({ favorites: newFavorites });
	};

	// Update the favorites tab right away when removing an item, without the fade in / out animation provided by updatePortfolio()
	updateFavoritesTab = (newItems) => {
		this.setState({ portfolioItems: newItems });
	};

	updateCategory = (newCategory) => {
		this.setState({ category: newCategory });
	};

	componentDidMount() {
		if (this.props.match.params.favoritesCollection) {
			const favoritesCollection = getFavoritesFromLink(this.props.match.params.favoritesCollection);
			this.setState({ portfolioItems: favoritesCollection, favorites: favoritesCollection, category: "favorites" });
		}
	}

	render() {
		return (
			<div className="work rotate-in">
				<WorkNav category={this.state.category} updateCategory={this.updateCategory} favorites={this.state.favorites} updatePortfolio={this.updatePortfolio} />

				<div className="projects-grid">
					<ul className={this.state.transition}>
						{this.state.portfolioItems.map((p) => (
							<WorkEntry
								key={this.state.portfolioItems.indexOf(p)}
								item={p}
								category={this.state.category}
								updateCategory={this.updateCategory}
								favorites={this.state.favorites}
								updateFavorites={this.updateFavorites}
								updatePortfolio={this.updatePortfolio}
								updateFavoritesTab={this.updateFavoritesTab}
							/>
						))}
					</ul>
				</div>
			</div>
		);
	}
}

export default Work;

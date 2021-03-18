import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./SideNavLargeLink.css";

class NavItem extends Component {
	render() {
		return (
			<li className="link" onClick={this.props.hideMobileNav}>
				<NavLink exact={this.props.exact} to={this.props.path}>
					<div className="selected">
						<div className="bar"></div>
						{this.props.title}
					</div>
					<div>
						<div className="bar"></div>
						{this.props.title}
					</div>
				</NavLink>
			</li>
		);
	}
}

export default NavItem;

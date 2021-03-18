import React, { Component } from "react";
import SideNavLargeLink from "./SideNavLargeLink";
import { NavLink } from "react-router-dom";
import "./SideNavLarge.css";

class SideNavLarge extends Component {
	showSmallNav = () => {
		document.body.classList.add("small-nav");
		document.body.classList.remove("large-nav");
	};

	colorSchemeMenu = () => {
		document.body.classList.add("show-color-schemes");
	};

	render() {
		return (
			<div className="side-nav-large-container perspective">
				<div className="side-nav-large rotate-in">
					<ul className="nav-content">
						<li className="logo-container">
							<div className="minimize-large-nav icon" onClick={this.showSmallNav}>
								<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 322.7 512" xmlSpace="preserve">
									<g>
										<g>
											<g id="_x37__34_">
												<g>
													<path
														className="st0"
														d="M110.8,256l197-178.7c17.7-17.7,17.7-46.3,0-64s-46.3-17.7-64,0L14.6,221.2C5,230.8,0.8,243.5,1.6,256
																	c-0.8,12.5,3.4,25.3,13,34.8l229.2,207.9c17.7,17.7,46.3,17.7,64,0c17.7-17.7,17.7-46.3,0-64L110.8,256z"
													/>
												</g>
											</g>
										</g>
									</g>
								</svg>
							</div>
							<div className="logo">
								<div className="logo-symbol">
									<NavLink to="/">
										<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 744.7 1065.6" xmlSpace="preserve">
											<g id="pulciu"></g>
											<g id="Rectangle_9_1_" className="st0"></g>
											<g id="Shape_1_copy_20_1_" className="st0"></g>
											<g id="Shape_1_copy_19_1_" className="st0">
												<g>
													<path
														className="st1"
														d="M444.6,229.6c-7.4-19.2-11.5-41.1-11.1-66.6c0.6-8.6,1.1-17.1,1.6-25.9c-31.7-13.9-53.2-30.5-53.2-52.9v98
																C381.9,204.1,407.8,218.1,444.6,229.6z M699.4,292.1c-1.4-23.2-5.7-46.4-12.8-55.3c-18.2-25.1-65.1-42-116.9-57.2
																C614.7,217.4,663.9,253.1,699.4,292.1z M363.9,182.2v-98c0,22.4-21.5,39-53.2,52.9c0.5,8.8,1,17.3,1.6,25.9
																c0.4,25.5-3.7,47.4-11.1,66.6C338,218.1,363.9,204.1,363.9,182.2z M674.9,445.2c-18,65-11,72-6,155c9,108-296,112.4-296,209v-199
																h75.8c83,0,150.2-74.2,150.2-157c0-65.6-42.2-121.4-101-141.8c43,21.9,69,66.8,69,118.7c0,73.4-52,135.1-130.9,135.1h-63.1v-192
																h-45V842c27.3,19.6,45,41.4,45,67.2c0-112,335-149,335-260C707.9,556.1,665.9,570.2,674.9,445.2z M176.1,179.6
																c-51.8,15.3-98.7,32.1-116.9,57.2c-7.1,8.9-11.4,32.1-12.8,55.3C81.9,253.1,131.2,217.4,176.1,179.6z M343.9,348.2h72.4
																c59.8,0,97.6,41.5,97.6,96.8c0,38.3-18.1,71.5-49.1,88.4c43.8-16.5,75.1-60.2,75.1-111.6c0-65.5-50.9-118.6-113.7-118.6h-82.3l0,0
																h-85c0,0-0.4,0-1,0h-51.6c33,0,47.8,11.4,51.6,47V722c-85.4-31.2-186.2-59-181-121.8c5-83,12-90-6-155c9,125-33,110.9-33,204
																c0,78.3,166.8,119.8,265,176.8V348.2H343.9L343.9,348.2z"
													/>
													<path
														className="st2"
														d="M204.1,248.4c0,0,121.1-81.3,83.6-246.2C316,168.8,63.2,240.9,7.5,369.5c-16.2,38.4,13.4,95.3,41,162.7
																C42,326.8,300.4,343.4,297.3,148C273.5,217.2,204.1,248.4,204.1,248.4z M737.3,369.5C681.7,240.9,428.9,168.8,457.2,2.2
																c-37.5,164.9,83.6,246.2,83.6,246.2s-69.4-31.2-93.2-100.5c-3.1,195.4,255.3,178.8,248.8,384.2
																C723.9,464.8,753.5,407.9,737.3,369.5z"
													/>
													<g id="Shape_1_copy_19">
														<g>
															<path
																className="st2"
																d="M596.5,853.4c0,0,147.4-64.4,145.4-218.2C733.7,789.3,489,789.3,402,900.8c-25.4,33.2-23.8,97.9-16.4,164.2
																		c39.5-185.7,291.4-117.5,333-295.7C677.3,830.6,596.5,853.4,596.5,853.4z M2.9,635.2C0.9,789,148.3,853.4,148.3,853.4
																		s-80.8-22.8-122.1-84.1c41.6,178.2,293.5,110,332.9,295.8c7.4-66.3,9-131-16.4-164.2C255.8,789.3,11.1,789.3,2.9,635.2z"
															/>
														</g>
													</g>
												</g>
											</g>
										</svg>
									</NavLink>
								</div>
								<h2>Pulciu</h2>
							</div>
						</li>

						<SideNavLargeLink path="/" exact={true} title="Home" hideMobileNav={this.props.hideMobileNav} />
						<SideNavLargeLink path="/work" exact={false} title="Work" hideMobileNav={this.props.hideMobileNav} />
						<SideNavLargeLink path="/about" exact={false} title="About" hideMobileNav={this.props.hideMobileNav} />
						<SideNavLargeLink path="/contact" exact={false} title="Contact" hideMobileNav={this.props.hideMobileNav} />

						<li className="extras">
							<div className="icons">
								<div className="paint-bucket icon" onClick={this.colorSchemeMenu}>
									<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xmlSpace="preserve">
										<g>
											<path
												className="st0"
												d="M448,473.7H64c-11.8,0-21.3,7.6-21.3,19.3s9.6,19.3,21.3,19.3h384c11.8,0,21.3-7.6,21.3-19.3
															S459.8,473.7,448,473.7z"
											/>
											<path
												className="st0"
												d="M209.8,399.3c16.1,0,32.1-6.1,44.4-18.3l161-162c8.3-8.3,8.3-21.8,0-30.2L239.6,13.2c-8.3-8.3-21.8-8.3-30.2,0
															l-161,161c-24.4,24.4-24.4,64.3,0,88.7L165.5,381C177.7,393.2,193.8,399.3,209.8,399.3L209.8,399.3z M224.5,58.4L370,203.9
															l-2.5,2.5H77.2c0.5-0.6,0.7-1.4,1.3-2L224.5,58.4z"
											/>
											<path
												className="st0"
												d="M374.7,345.2c0,30.4,23.9,55.1,53.3,55.1s53.3-24.7,53.3-55.1c0-24.5-30.6-73.8-40-88c-5.9-9-20.8-9-26.7,0
															C405.3,271.4,374.7,320.7,374.7,345.2L374.7,345.2z"
											/>
										</g>
									</svg>
								</div>
								<div className="resume icon">
									<a href="http://www.pulciu.com/resume.pdf" rel="noreferrer" target="_blank">
										<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 410.7 472.4" xmlSpace="preserve">
											<g>
												<g>
													<path
														className="st0"
														d="M409.7,57.7c0-31.6-25.6-57.2-57.2-57.2H57.3C25.7,0.5,0.1,26.1,0.1,57.7v355.4c0,31.6,25.6,57.2,57.2,57.2
																h295.1c31.6,0,57.2-25.6,57.2-57.2V57.7H409.7z M379.5,413.2c0,15.1-12,27.1-27.1,27.1H57.3c-15.1,0-27.1-12-27.1-27.1V57.7
																c0-15.1,12-27.1,27.1-27.1h295.1c15.1,0,27.1,12,27.1,27.1V413.2z"
													/>
													<path
														className="st0"
														d="M115,285.6h177.7c4.5,0,9-1.6,12-6.3c3-3.2,4.5-7.9,3-12.6c-6-37.9-28.6-68-58.7-82.2
																c9-11.1,15.1-25.3,15.1-42.7c0-34.8-27.1-63.2-60.2-63.2s-60.2,28.5-60.2,63.2c0,15.8,6,30,15.1,42.7
																c-30.1,15.8-54.2,45.9-58.7,82.2c0,4.7,0,9.5,3,12.6C106,284,110.5,285.6,115,285.6L115,285.6z M173.8,143.3
																c0-17.4,13.6-31.6,30.1-31.6s30.1,14.2,30.1,31.6s-13.6,31.6-30.1,31.6S173.8,160.7,173.8,143.3z M203.9,206.5
																c30.1,0,57.2,19,69.3,47.4H134.6C146.7,225.5,173.8,206.5,203.9,206.5z"
													/>
													<path
														className="st0"
														d="M332.4,322.4h-250c-9,0-15.1,5.2-15.1,14.5s6,14.5,15.1,14.5h249.9c9,0,15.1-5.2,15.1-14.5
																S341.4,322.4,332.4,322.4z"
													/>
													<path
														className="st0"
														d="M332.4,380.4h-250c-9,0-15.1,5.2-15.1,14.5s6,14.5,15.1,14.5h249.9c9,0,15.1-5.2,15.1-14.5
																S341.4,380.4,332.4,380.4z"
													/>
												</g>
											</g>
										</svg>
									</a>
								</div>
							</div>
						</li>
						<li className="copyright">
							<span>©</span> 2021 PULCIU
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default SideNavLarge;

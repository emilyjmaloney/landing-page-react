import React from "react";

export function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<a className="navbar-brand" href="#">
				Start Bootstrap
			</a>

			<ul className="navbar-nav flex-row">
				<li className="nav-item mx-1">
					<a className="nav-link active" href="#">
						Home
					</a>
				</li>
				<li className="nav-item mx-1">
					<a className="nav-link" href="#">
						About
					</a>
				</li>
				<li className="nav-item mx-1">
					<a className="nav-link" href="#">
						Services
					</a>
				</li>
				<li className="nav-item mx-1">
					<a className="nav-link" href="#">
						Contact
					</a>
				</li>
			</ul>
		</nav>
	);
}

import React from "react";
import { Navbar } from "./navbar.js";
import { Footer } from "./footer.js";
//include images into your bundle

//create your first component

export function Home() {
	return (
		<div className="webpage-container">
			<div className="container-fluid">
				<Navbar />
			</div>

			<div className="container-fluid">
				<Footer />
			</div>
		</div>
	);
}

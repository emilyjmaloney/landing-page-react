import React from "react";
import { Navbar } from "./navbar.js";
import { Footer } from "./footer.js";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Jumbotron from "./jumbotron";
import Card from "./card";

//create your first component

export function Home() {
	return (
		<div className="webpage-container">
			<div className="container-fluid">
				<Navbar />
			</div>
			<div className="container">
				<Jumbotron />
				<Card />
			</div>
			<div className="container-fluid">
				<Footer />
			</div>
		</div>
	);
}

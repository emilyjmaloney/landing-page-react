import React from "react";

function Card() {
	return (
		<div className="card-deck">
			<div className="card">
				<img
					src="https://i.redd.it/qm2hkwky0wz21.jpg"
					className="card-img-top"
					alt="Hidden Corg"
				/>
				<div className="card-body">
					<h5 className="card-title">Brady bunch</h5>
					<p className="card-text">
						This is a longer card with supporting text below as a
						natural lead-in to additional content. This content is a
						little bit longer.
					</p>
					<p className="card-text">
						<small className="text-muted">
							Last updated 3 mins ago
						</small>
					</p>
				</div>
			</div>
			<div className="card">
				<img
					src="https://free-classifieds-usa.com/oc-content/uploads/1551/171475.jpg"
					className="card-img-top"
					alt="potato"
				/>
				<div className="card-body">
					<h5 className="card-title">Potato</h5>
					<p className="card-text">
						This card has supporting text below as a natural lead-in
						to additional content.
					</p>
					<p className="card-text">
						<small className="text-muted">
							Last updated 3 mins ago
						</small>
					</p>
				</div>
			</div>
			<div className="card">
				<img
					src="https://lh3.googleusercontent.com/proxy/T1QeLY4J0ku5WNKYvEOHp0nRSAD3BC4-x1daHVK6prVXL3Klwo896OvqmlFD36yaVY42f5udgEwAD_uLqJVksJx9ozOylGMAowJEqGWkk-p3Kc5B8RHdBv_TMR9WdaEhYiYc"
					className="card-img-top"
					alt="Corgi at the park"
				/>
				<div className="card-body">
					<h5 className="card-title">Chicken Nugget</h5>
					<p className="card-text">
						This is a wider card with supporting text below as a
						natural lead-in to additional content. This card has
						even longer content than the first to show that equal
						height action.
					</p>
					<p className="card-text">
						<small className="text-muted">
							Last updated 3 mins ago
						</small>
					</p>
				</div>
			</div>
			<div className="card">
				<img
					src="https://thedailycorgi.com/wp-content/uploads/2017/05/profile_picture_by_pastel_corgi-d9vf8b5.jpg"
					className="card-img-top"
					alt="Source corgi"
				/>
				<div className="card-body">
					<h5 className="card-title">Corgi</h5>
					<p className="card-text">
						This loaf of corgi is the source corgi for all the corgis
					</p>
					<p className="card-text">
						<small className="text-muted">
							Last updated 3 mins ago
						</small>
					</p>
				</div>
			</div>
		</div>
	);
}
export default Card;

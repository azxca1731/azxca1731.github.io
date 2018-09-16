import React from 'react';
const PortfolioModal = ({ id, name, smallname, date, text, img, type, category }) => {
	//나중에 여기에 사진을 넣어서 원하는 말을 쓸 수 있게
	return (
		<div
			className="portfolio-modal modal fade"
			id={`portfolioModal${id}`}
			tabIndex="-1"
			role="dialog"
			aria-hidden="true"
		>
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="close-modal" data-dismiss="modal">
						<div className="lr">
							<div className="rl" />
						</div>
					</div>
					<div className="container">
						<div className="row">
							<div className="col-lg-8 mx-auto">
								<div className="modal-body">
									<h2 className="text-uppercase">{name}</h2>
									<p className="item-intro text-muted">{smallname}</p>
									{type ? (
										<img className="img-fluid d-block mx-auto" src={img} alt="" />
									) : (
										<iframe
											width="100%"
											height="300px"
											src={img}
											frameBorder="0"
											allow="autoplay; encrypted-media"
											allowFullScreen
											title={id}
										/>
									)}
									<p>{text}</p>
									<ul className="list-inline">
										<li>Date: {date}</li>
										<li>Category: {category}</li>
									</ul>
									<button className="btn btn-primary" data-dismiss="modal" type="button">
										Close Project
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default PortfolioModal;

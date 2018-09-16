import React from 'react';
const PortfolioItem = ({ id, img, category, team }) => {
	//나중에 여기에 사진을 넣어서 원하는 말을 쓸 수 있게
	return (
		<div className="col-md-4 col-sm-6 portfolio-item">
			<a className="portfolio-link" data-toggle="modal" href={`#portfolioModal${id}`}>
				<div className="portfolio-hover">
					<div className="portfolio-hover-content">
						<i className="fas fa-plus fa-3x" />
					</div>
				</div>
				<img className="img-fluid" src={img} alt="" />
			</a>
			<div className="portfolio-caption">
				<h4>{team}</h4>
				<p className="text-muted">{category}</p>
			</div>
		</div>
	);
};
export default PortfolioItem;

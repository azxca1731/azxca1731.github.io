import React, { Component } from 'react';
import PageHeader from '../component/PageHeader';
import PostPrev from '../component/PostPrev';
import { firebaseStorage } from '../config';
import { isLoaded, isEmpty, getVal } from 'react-redux-firebase';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';
//6개정도만 보여줄것
class Home extends Component {
	renderPostHead = (PostHead) =>
		!isLoaded(PostHead) ? (
			<ReactLoading className="mx-auto" type="spin" color="#A9A9A9" height={'20%'} width={'20%'} />
		) : isEmpty(PostHead) ? (
			'Blog is empty'
		) : (
			PostHead.map((PostHead, i) => <PostPrev PostHead={PostHead} key={i} />)
		);

	render() {
		const { PostHead } = this.props;
		return (
			<div>
				<PageHeader
					title="너도 할 수 있다"
					subtittle="꿈꾸고 실행하면 누구든지 가능하다."
					Background={firebaseStorage.Url + 'Home.jpg?alt=media&token=' + firebaseStorage.Token}
				/>
				<div className="container">
					<div className="row">
						<div className="col-lg-8 col-md-10 mx-auto">{this.renderPostHead(PostHead)}</div>
					</div>
				</div>
			</div>
		);
	}
}
export default connect(({ firebase }) => ({
	PostHead: getVal(firebase, 'data/PostHead/')
}))(Home);

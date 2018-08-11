import React from 'react';
import PageHeader from '../component/PageHeader';
import PostPrev from '../component/PostPrev';
import { firebaseStorage } from '../config';
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import { compose } from 'redux';
import { connect } from 'react-redux';
//6개정도만 보여줄것
const Home = ({firebase,PostHead}) => {
    const renderPostHead = !isLoaded(PostHead)
        ? 'Loading'
        : isEmpty(PostHead)
            ? 'Blog is empty'
            : PostHead.map(
                ({postTitle,postSubtitle,writer,id}) => (
                    <PostPrev postTitle={postTitle} postSubtitle={postSubtitle} writer={writer} key={id} />
                )
            )

    return (
        <div>
            <PageHeader title="너도 할 수 있다" subtittle="리액트 노예 계속해서 리액트만한다." Background={firebaseStorage.Url + "Home.jpg?alt=media&token=" + firebaseStorage.Token} />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        {renderPostHead}
                    </div>
                </div>
            </div>
        </div>
    )

}
export default compose(
    firebaseConnect([
        'PostHead'
    ]),
    connect((state) => ({
        PostHead: state.firebase.data.PostHead,
    }))
)(Home)
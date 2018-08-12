import React from 'react';
import PageHeader from '../component/PageHeader';
import { firebaseConnect, isLoaded, isEmpty, getVal } from 'react-redux-firebase'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { DiscussionEmbed } from 'disqus-react';
//포스트 예시 나중에 바꿀것
const disqusConfig = {
    url: "https://azxca1731.github.io/#/post",
    identifier: "1",
    title: "포스트 예시",
};
const Post = ({ post }) => {
    const renderPost = !isLoaded(post)
        ? 'Loading'
        : isEmpty(post)
            ? 'Blog is empty'
            : post.map(
                ({ id, value }) => (
                    <p key={id}>{value}</p>
                ))
    return (
        <div className="Post">
            <PageHeader title="포스트 예시" subtittle="여려가지의 포스트 파라그래프를 연달아 하는것으로 한다" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        {renderPost}
                        <DiscussionEmbed shortname="nogada-samuso" config={disqusConfig} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default compose(
    firebaseConnect(() => {
        // Set listeners based on props (prop is route parameter from react-router in this case)
        return [
            { path: `post/${1}` },
        ]
    }),
    connect(({ firebase }) => ({
        post: getVal(firebase, `data/post/${1}`), // lodash's get can also be used
    }))
)(Post)
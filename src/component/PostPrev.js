import React from 'react';
const PostPrev = ({ PostHead }) => {
    return (
        <div>
            <div className="post-preview">
                <a href="/">
                    <h2 className="post-title">
                        {PostHead.postTitle}
                    </h2>
                    <h3 className="post-subtitle">
                        {PostHead.postSubtitle}
                    </h3>
                </a>
                <p className="post-meta">Posted by
                    <a href="/"> {PostHead.writer} </a>
                    on September 24, 2018</p>
            </div>
            <hr />
        </div>
    )
}
export default PostPrev;

import React, { Component } from 'react';
class PostHeader extends Component {

    static defaultProps = {
        PostHead: {
            postTitle: "",
            postSubtitle: "",
            id: 1
        }
    };

    //나중에 여기에 사진을 넣어서 원하는 말을 쓸 수 있게
    render() {
        const { PostHead } = this.props;
        return (
            <header className="masthead" style={{ backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/githubpage-efc76.appspot.com/o/post%2F${PostHead.id}.JPG?alt=media)` }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <div className="site-heading">
                                <h1>{PostHead.postTitle}</h1>
                                <span className="subheading">{PostHead.postSubtitle}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default PostHeader;

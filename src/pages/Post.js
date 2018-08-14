import React from "react";
import PostHeader from "../component/PostHeader";
import { isLoaded, isEmpty, getVal } from "react-redux-firebase";
import { connect } from "react-redux";
import { DiscussionEmbed } from "disqus-react";
import ReactLoading from "react-loading";
//포스트 예시 나중에 바꿀것

const Post = ({ post, PostHead, match }) => {
  const disqusConfig = {
    url: `https://azxca1731.github.io/post/${match.params.id}`,
    identifier: match.params.id,
    title: "포스트 예시"
  };
  const renderPost = !isLoaded(post) ? (
    <ReactLoading
      className="mx-auto"
      type="spin"
      color="#A9A9A9"
      height={"20%"}
      width={"20%"}
    />
  ) : isEmpty(post) ? (
    "아직 작성 되지 않은 포스트 입니다."
  ) : (
    post.map(({ id, value }) => <p key={id}>{value}</p>)
  );
  return (
    <div className="Post">
      <PostHeader PostHead={PostHead} />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            {renderPost}
            <DiscussionEmbed shortname="nogada-samuso" config={disqusConfig} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default connect(({ firebase }, props) => ({
  post: getVal(firebase, `data/post/${props.match.params.id}`), // lodash's get can also be used
  PostHead: getVal(firebase, `data/PostHead/${props.match.params.id}`)
}))(Post);

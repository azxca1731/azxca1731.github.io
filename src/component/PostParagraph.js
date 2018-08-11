import React from 'react';
const PostParagraph = ({ title, upp, image, imagedes, underp }) => {
    return (
        <div className="PostParagraph">
            <h2 className="section-heading">{title}</h2>
            <p>{upp}</p>
            <img className="img-fluid" src={image} alt="" />
            <span className="caption text-muted">{imagedes}</span>
            <p>{underp}</p>
        </div>
    )
}
export default PostParagraph;
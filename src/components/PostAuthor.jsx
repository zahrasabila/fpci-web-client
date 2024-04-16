import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../assets/avatar1.jpg";

const PostAuthor = () => {
  return (
    <Link to={`posts/users/ahahsha`} className="post__author">
      <div className="post__author-avatar">
        <img src={Avatar} alt="" />
      </div>
      <div className="post__author-detail">
        <h5>By: Zahra</h5>
        <small>Just Now.</small>
      </div>
    </Link>
  );
};

export default PostAuthor;

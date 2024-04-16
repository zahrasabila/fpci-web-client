import React from "react";
import { DUMMY_POSTS } from "../data";
import { useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);

  return (
    <section className="dashboard">
      {posts.length > 0 ? (
        <div className="container dashboard__container">
          {posts.map(({ id, thumbnail, title }) => {
            return (
              <article key={id} className="dashboard__post">
                <div className="dashboard__post-info">
                  <div className="dashboard__post-thumbnail">
                    <img src={thumbnail} alt="" />
                  </div>
                  <h5>{title}</h5>
                </div>
                <div className="dashboard__post-actions">
                  <Link to={`/posts/${id}`} className="btn sm">
                    View
                  </Link>
                  <Link to={`/posts/${id}/edit`} className="btn sm primary">
                    Edit
                  </Link>
                  <Link to={`/posts/${id}/delete`} className="btn sm danger">
                    Delete
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <h2>No posts found.</h2>
      )}
    </section>
  );
};

export default Dashboard;

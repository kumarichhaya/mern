import React from "react";
import { Link } from "react-router";

function Card({ post }) {
  return (
    <div className="col-md ">
      <div className="card rounded p-2 border-success-subtle">
        <img
          src={"http://" + post.image}
          className="card-img-top "
          alt="blog cards"
          height={120}
          width={110}
        />
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.category}</p>
          <Link to={"/article/"+post._id} className="btn btn-success">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;

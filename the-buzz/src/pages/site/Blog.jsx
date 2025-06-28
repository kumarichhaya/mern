import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./../../component/Card";

const Blog = () => {
  const url = "http://localhost:3000/article";
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container py-5">
      <div className="row row-cols-md-3">
        {data.map((row, index) => (
          <Card key={index} post={row} />
        ))}
      </div>
    </div>
  );
};

export default Blog;

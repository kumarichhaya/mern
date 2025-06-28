import React, { useEffect, useState } from "react";
import axios from "axios";

const Articles = () => {
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
    <div className="row justify-content-center py-5">
      <div className="col-md-5">
        <h3 className="text-center text-success">Article Details</h3>
      </div>
      <div className="col-md-10">
        <div className="table-responsive">
          <table className="table table-striped table-hover table-bordered custom-table shadow">
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Image</th>
                <th>Date</th>
                <th>Publish Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td>{row.title}</td>
                  <td>{row.category}</td>
                  <td>
                    <img
                      src={"http://" + row.image}
                      alt=""
                      width={70}
                      height={50}
                    />
                  </td>
                  <td>{row.date}</td>
                  <td>{row.publish}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Articles;

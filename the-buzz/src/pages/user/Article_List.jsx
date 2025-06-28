import React, { useEffect, useState } from "react";
import axios from "axios";

const Article_List = () => {
  const [data, setData] = useState([]);
  const [delresponse, SetDelResponse] = useState("");

  const url = "http://localhost:3000/article/";

  useEffect(() => {
    let uid = localStorage.getItem("userid");
    if (uid) {
      axios
        .get(url + "user/" + uid)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [delresponse]);
  const handleDelete = (id) => {
    axios
      .delete(url + "/" + id)
      .then((res) => {
        SetDelResponse(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="row justify-content-center py-5">
      <div className="col-md-5">
        <h3 className="text-center text-success">My Article</h3>
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
                <th>Delete</th>
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
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(row._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Article_List;

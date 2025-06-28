import React, { useState, useEffect } from "react";
import CategoryForm from "./CategoryForm";
import axios from "axios";
const Category = () => {
  const url = "http://localhost:3000/category";

  const [data, setData] = useState([]);
  const [delresponse, SetDelResponse] = useState("");
  const [insresponse, SetInsResponse] = useState(0);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [delresponse, insresponse]);
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
    <div className="row justify-content-evenly py-5">
      <div className="col-md-5">
        <h3>Add New Category</h3>
        <CategoryForm
          insresponse={insresponse}
          SetInsResponse={SetInsResponse}
        />
      </div>
      <div className="col-md-6 table-responsive">
        <table className="table table-striped table-hover table-bordered custom-table shadow">
          <thead>
            <tr>
              <th>Icon</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => {
              return (
                <tr key={index}>
                  <td>{row.icon}</td>
                  <td>{row.category}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(row._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Category;

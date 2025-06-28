import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const url = "http://localhost:3000/user";

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
        <h3 className="text-center text-success">User Info</h3>
      </div>
      <div className="col-md-10">
        <div className="table-responsive">
          <table className="table table-striped table-hover table-bordered custom-table shadow">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>City</th>
                <th>Date</th>
                <th>Bio</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td>{row.name}</td>
                  <td>{row.email}</td>
                  <td>{row.phone}</td>
                  <td>{row.city}</td>
                  <td>{row.date}</td>
                  <td>{row.bio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;

import { useState, useEffect } from "react";
import axios from "axios";

const Password = () => {
  const [response, SetResponse] = useState({});

  const [formData, setFormData] = useState({
    old_password: "",
    password: "",
    confirm_password: "",
  });

  const [error, setError] = useState({
    old_password: "",
    password: "",
    confirm_password: "",
  });

  const url = "http://localhost:3000/user/password/";
  const [userid, setUserId] = useState("");

  useEffect(() => {
    let uid = localStorage.getItem("userid");
    if (uid) {
      setUserId(uid);
  }}, []);

  const isError = () => {
    const e = {};

    if (formData.old_password === "") {
      e.old_password = "Please enter your old password.";
    } else if (formData.old_password.length < 8) {
      e.old_password = "Old password must be at least 8 characters long.";
    }

    if (formData.password === "") {
      e.password = "Please enter your new password.";
    } else if (formData.password.length < 8) {
      e.password = "New password must be at least 8 characters long.";
    }

    if (formData.confirm_password === "") {
      e.confirm_password = "Please retype your new password.";
    } else if (formData.confirm_password !== formData.password) {
      e.confirm_password = "Passwords do not match.";
    }

    setError(e);
    return Object.keys(e).length > 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isError()) {
      axios.put(url  + userid, formData)
        .then((res) => {
          SetResponse(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <h4 className="text-center py-4">Edit Password</h4>
      <form className="row justify-content-center" onSubmit={handleSubmit}>
        <div className="mb-3 col-7">
          <label>Old Password</label>

          <input
            className="form-control"
            type="password"
            placeholder="Enter old password"
            value={formData.old_password}
            onChange={(e) =>
              setFormData({ ...formData, old_password: e.target.value })
            }
          />
          <span className="text-danger small">{error.old_password}</span>
        </div>

        <div className="mb-3 col-7">
          <label>New Password</label>

          <input
            className="form-control"
            type="password"
            placeholder="Enter new password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <span className="text-danger small">{error.password}</span>
        </div>

        <div className="mb-3 col-7">
          <label>Confirm New Password</label>

          <input
            className="form-control"
            type="password"
            placeholder="Retype new password"
            value={formData.confirm_password}
            onChange={(e) =>
              setFormData({ ...formData, confirm_password: e.target.value })
            }
          />
          <span className="text-danger small">{error.confirm_password}</span>
        </div>
        <div className="col-7 py-4">
          <button className="btn bg-success-subtle w-100">Submit</button>
          <p className="mt-3 text-success">{response.Response}</p>
        </div>
      </form>
    </div>
  );
};

export default Password;

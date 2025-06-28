import { useState } from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";

const ForgetPassword = () => {
  const url = "http://localhost:3000/user/forgot";

  const navigate = useNavigate();
  const [response, SetResponse] = useState({});

  const [error, setError] = useState({
    email: "",
  });
  const [formData, setFormData] = useState({ email: "" });
  const isError = () => {
    let e = {};

    if (formData.email == "") e.email = "Please Enter Your Email Address ";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      e.email = "Invalid Email Address";

    setError(e);
    if (Object.keys(e).length > 0) {
      return true;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isError()) {
      axios
        .post(url, formData)
        .then((res) => {
          SetResponse(res.data);
          if (res.data.status == 1) {
          localStorage.setItem('code',res.data.code)
          localStorage.setItem('email',formData.email)
            navigate("/reset");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className="container py-5">
      <div class="mb-3 row justify-content-center">
        <div className="col-md-5 border border-success p-5 rounded">
          <h4>Forget Password</h4>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div className="mb-3">
              <p className="text-danger small">{error.email}</p>
              <lable>Email</lable>
              <input
                type="text"
                className="form-control"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div>
              <button className="btn bg-success-subtle w-100 ">Send</button>
            </div>

            <p className="text-center mt-3">
              {" "}
              <Link to="/signup" className="text-decoration-none text-success">
                Sign Up Now{" "}
              </Link>
            </p>
          </form>
          <p className="mt-3 text-success">{response.Response}</p>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;

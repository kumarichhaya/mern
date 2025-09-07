import { useState } from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";

const SignIn = () => {
  const url = "http://localhost:3000/user/login";

  const navigate = useNavigate();
  const [response, SetResponse] = useState({});

  const [formData, setFormData] = useState({ email: "", password: "" });

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const isError = () => {
    let e = {};

    if (formData.email == "") e.email = "Please Enter Your Email Address ";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      e.email = "Invalid Email Address";

    if (formData.password == "") e.password = "Please Enter Your Password";
    else if (formData.password.length < 8)
      e.password = "password must be at least 8 characters long";

    setError(e);
    if (Object.keys(e).length > 0) {
      return true;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isError()) {
      axios
        .post(url,formData)
        .then((res) => {
          SetResponse(res.data);
          if (res.data.status == 1) {
            localStorage.setItem('userid',res.data.userid)
            navigate("/user/profile");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  // validation
  return (
    <div className="container py-5">
      <div className="mb-3 row justify-content-center">
        <div className="col-md-5 border border-success p-5 rounded">
          <h4>SignIn !</h4>
          <p>Enter your Account Details</p>
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
            <div className="mb-3">
              <p className="text-danger small">{error.password}</p>
              <lable>Password</lable>
              <input
                type="Password"
                className="form-control"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>
            <p className="text-end">
              {" "}
              <Link to="/forget" className="text-decoration-none text-success">
                Forget Password ?
              </Link>
            </p>
            <div>
              <button className="btn bg-success-subtle w-100 ">Sign in</button>
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

export default SignIn;

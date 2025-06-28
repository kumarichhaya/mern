import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";

const Reset = () => {
    const url = "http://localhost:3000/user/resetpassword";
  
    const navigate = useNavigate();
    const [response, SetResponse] = useState({});
    const [code, SetCode] = useState({});
    const [email, SetEmail] = useState({});
  
  const [formData, setFormData] = useState({
    code: "",
    password: "",
    conf_password: "",
  });
  const [error, setError] = useState({
    code: "",
    password: "",
    conf_password: "",
  });
  useEffect(()=>{
  let code=localStorage.getItem('code')
  let email=localStorage.getItem('email')
    if(code && email){
      SetCode(code)
      SetEmail(email)
    }
    
  },[])
  const isError = () => {
    let e = {};

    if (formData.code == "") e.code = "Please Enter Verification Code ";
    else if (formData.code!=code) {
      e.code = "Code Not Matched";
    }

    if (formData.password == "")
      e.password = "Please Enter Your Password";
    else if (formData.password.length < 8)
      e.password = "password must be at least 8 characters long";

    if (formData.conf_password == "")
      e.conf_password = "Please Retype Your Password";
    else if (formData.password != formData.conf_password)
      e.conf_password = "Password Not Matched";


    setError(e);
    if (Object.keys(e).length > 0) {
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isError()) {
      axios
        .put(url, {email:email,password:formData.password})
        .then((res) => {
          SetResponse(res.data);
          if (res.data.status == 1) {
          localStorage.removeItem('code')
          localStorage.removeItem('email')
            navigate("/signin");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };


  return (
    <div className="container py-5">
      <div className="mb-3 row justify-content-center">
        <div className="col-md-5 border border-success p-5 rounded">
          <h4>Reset Password</h4>
          <p>Enter Details</p>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div className="mb-3">
              <p className="text-danger small">{error.code}</p>
              <label>Verification Code</label>
              <input
                type="text"
                className="form-control"
                value={formData.code}
                onChange={(e) =>
                  setFormData({ ...formData, code: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <p className="text-danger small">{error.password}</p>

              <label>Password</label>
              <input
                type="password"
                className="form-control"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <p className="text-danger small">{error.conf_password}</p>
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control"
                value={formData.conf_password}
                onChange={(e) =>
                  setFormData({ ...formData, conf_password: e.target.value })
                }
              />
            </div>
            <button className="btn bg-success-subtle w-100">
              Reset Password
            </button>
            <p className="text-center mt-3">
              <Link to="/signup" className="text-decoration-none text-success">
                Sign Up Now
              </Link>
            </p>
          </form>
          <p className="mt-3 text-success">{response.Response}</p>
        </div>
      </div>
    </div>
  );
};

export default Reset;

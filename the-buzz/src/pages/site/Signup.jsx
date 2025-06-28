
import { useState } from "react";
import { Link,useNavigate } from "react-router";
import axios from "axios";

const Signup = () => {
  const url="http://localhost:3000/user"
const navigate=useNavigate()
  const [response,SetResponse]=useState({})

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const isError = () => {
    let e = {};

    if (formData.name == "") e.name = "Please Enter Your Name ";
    else if (formData.name.length < 3) {
      e.name = "Name must be at least 3 characters long";
    }

    if (formData.email == "") e.email = "Please Enter Your Email Address ";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      e.email = "Invalid Email Address";

    if (formData.password == "") e.password = "Please Enter Your Password";
    else if (formData.password.length < 8)
      e.password = "password must be at least 8 characters long";

    if (formData.cpassword == "") e.cpassword = "Please Retype Your Password";
    else if (formData.password != formData.cpassword)
      e.cpassword = "Password Not Matched";

    setError(e);
    if (Object.keys(e).length > 0) {
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isError()) {
      axios.post(url,formData)
      .then((res)=>{SetResponse(res.data);
        if(res.data.status==1){
          navigate("/signin");
        }
      })
      .catch((err)=>{console.log(err)})

      
    }
  };

  // validation

  return (
    <div className="container py-5">
      <div class="mb-3 row justify-content-center">
        <div className="col-md-5 border border-success p-5 rounded">
          <h4>Register Youself here !</h4>

          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <span className="text-danger small">{error.name}</span>
            <div className="mb-3">
              <lable>Name</lable>
              <input
                type="text"
                className="form-control"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <span className="text-danger small">{error.email}</span>
            <div className="mb-3">
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
            <span className="text-danger small">{error.password}</span>

            <div className="mb-3">
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
            <span className="text-danger small">{error.cpassword}</span>
            <div className="mb-3">
              <lable>Confirm Password</lable>
              <input
                type="password"
                className="form-control"
                value={formData.cpassword}
                onChange={(e) =>
                  setFormData({ ...formData, cpassword: e.target.value })
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
              <button className="btn bg-success-subtle w-100 ">Signup</button>
            </div>

            <p className="text-center mt-3">
              {" "}
              <Link to="/signin" className="text-decoration-none text-success">
                SignIn{" "}
              </Link>
            </p>
          </form>
         <p className="mt-3 text-success"> {response.Response}</p>

        </div>
      </div>
    </div>
  );
};

export default Signup;

import { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [response, SetResponse] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    gender: "Male",
    city: "",
    dob: "",
    bio: "",
  });
  const url = "http://localhost:3000/user/";
  const [userid, setUserId] = useState("");

  useEffect(() => {
    let uid = localStorage.getItem("userid");
    if (uid) {
      setUserId(uid);
      axios
        .get(url + uid)
        .then((res) => {
          setFormData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [response]);

  const [error, setError] = useState({
    name: "",
    phone: "",
    gender: "",
    city: "",
    dob: "",
    bio: "",
  });

  const isError = () => {
    const e = {};

    if (formData.name === "") {
      e.name = "Please enter your name.";
    } else if (formData.name.length < 3) {
      e.name = "Name must be at least 3 characters long.";
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (formData.phone === "") {
      e.phone = "Please enter your contact number.";
    } else if (!phoneRegex.test(formData.phone)) {
      e.phone = "Invalid contact number.";
    }

    if (!["Male", "Female"].includes(formData.gender)) {
      e.gender = "Select a valid gender.";
    }

    if (formData.city === "") {
      e.city = "Please select your city.";
    }

    if (formData.dob === "") {
      e.dob = "Please enter your date of birth.";
    }

    const wordCount = formData.bio.trim().split(/\s+/).length;
    if (formData.bio === "") {
      e.bio = "Please enter your bio.";
    } else if (wordCount > 50) {
      e.bio = "Bio must not exceed 50 words.";
    }

    setError(e);
    return Object.keys(e).length > 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isError()) {
      axios.put(url +userid, formData)
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
      <h4 className="text-center py-5">Edit Profile</h4>

      <form
        className="row justify-content-center row-cols-md-3"
        onSubmit={handleSubmit}
      >
        <div className="col-md mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <span className="text-danger small">{error.name}</span>
        </div>

        <div className="col-md mb-3">
          <label>Phone</label>
          <input
            type="tel"
            className="form-control"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
          <span className="text-danger small">{error.phone}</span>
        </div>

        <div className="col-md mb-3">
          <label>Email</label>
          <input
            type="tel"
            className="form-control"
            value={formData.email}
            readOnly={true}
          />
        </div>

        <div className="col-md mb-3">
          <label>Gender</label>

          <select
            className="form-select"
            value={formData.gender}
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <span className="text-danger small">{error.gender}</span>
        </div>

        <div className="col-md mb-3">
          <label>Birthday</label>

          <input
            type="date"
            className="form-control"
            value={formData.dob}
            onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
          />
          <span className="text-danger small">{error.dob} </span>
        </div>

        <div className="col-md mb-3">
          <label>City</label>

          <select
            className="form-select"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          >
            <option value="">Select</option>
            <option value="Amritsar">Amritsar</option>
            <option value="Jalandhar">Jalandhar</option>
            <option value="Ludhiana">Ludhiana</option>
          </select>
          <span className="text-danger small">{error.city}</span>
        </div>

        <div className="col-md-12 mb-3">
          <label>Bio</label>
          <textarea
            rows="3"
            className="form-control"
            value={formData.bio}
            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
          ></textarea>
          <span className="text-danger small">{error.bio}</span>
        </div>

        <div className="col-5 py-4">
          <button type="submit" className="btn bg-success-subtle w-100">
            Submit
          </button>

          <p className="mt-3 text-success">{response.Response}</p>
        </div>
      </form>
    </div>
  );
};

export default Profile;

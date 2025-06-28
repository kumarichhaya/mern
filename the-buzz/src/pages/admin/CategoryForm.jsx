import { useState } from "react";
import axios from "axios";

const CategoryForm = ({ insresponse, SetInsResponse }) => {
  const url = "http://localhost:3000/category";
  const [response, SetResponse] = useState({});
  const [formData, setFormData] = useState({
    category: "",
    icon: "",
    short_desc: "",
  });

  const [error, setError] = useState({
    category: "",
    icon: "",
    short_desc: "",
  });

  const isError = () => {
    const e = {};

    if (formData.category.trim() === "") {
      e.category = "Please enter category name.";
    } else if (formData.category.trim().length < 3) {
      e.category = "Category must be at least 3 characters long.";
    }

    if (formData.icon.trim() === "") {
      e.icon = "Please enter an icon.";
    }

    if (formData.short_desc.trim() === "") {
      e.short_desc = "Please enter a short description.";
    } else if (formData.short_desc.trim().split(" ").length > 30) {
      e.short_desc = "Short description must not exceed 50 words.";
    }

    setError(e);
    return Object.keys(e).length > 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isError()) {
      axios
        .post(url, formData)
        .then((res) => {
          SetResponse(res.data);
          SetInsResponse(1);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Category</label>
          <p className="text-danger small">{error.category}</p>
          <input
            type="text"
            className="form-control"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          />
        </div>

        <div className="mb-3">
          <label>Icon</label>
          <p className="text-danger small">{error.icon}</p>
          <input
            type="text"
            className="form-control"
            value={formData.icon}
            onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Short Description</label>
          <p className="text-danger small">{error.short_desc}</p>
          <textarea
            className="form-control"
            rows="3"
            value={formData.short_desc}
            onChange={(e) =>
              setFormData({ ...formData, short_desc: e.target.value })
            }
          />
        </div>

        <button type="submit" className="btn bg-success-subtle w-100">
          Save Category
        </button>
      </form>
      <p className="mt-3 text-success"> {response.Response}</p>
    </>
  );
};

export default CategoryForm;

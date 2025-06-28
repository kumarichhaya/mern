import { useState, useEffect } from "react";
import axios from "axios";
const Add_article = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    image: "",
    content: "",
  });

  const url = "http://localhost:3000/article";
  const url1 = "http://localhost:3000/category/";

  const [data, setData] = useState([]);
  const [userid, setUserId] = useState("");
  const [response, setResponse] = useState({});
  const [error, setError] = useState({
    title: "",
    category: "",
    image: "",
    content: "",
  });
  useEffect(() => {
    let uid = localStorage.getItem("userid");
    if (uid) {
      setUserId(uid);
    }
    axios
      .get(url1)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const isError = () => {
    const e = {};

    if (formData.title === "") {
      e.title = "Please enter Title.";
    }
    if (formData.category === "") {
      e.category = "Enter Category";
    }
    if (formData.image === "") {
      e.image = "Add image";
    }
    if (formData.content === "") {
      e.content = "Add content";
    }
    setError(e);
    if (Object.keys(e).length > 0) {
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isError()) {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("category", formData.category);
      data.append("image", formData.image);
      data.append("content", formData.content);
      data.append("user", userid);

      axios
        .post(url, data)
        .then((res) => {
          setResponse(res.data);
        })
        .catch((err) => {
          console.error("Error" + err);
        });
    }
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="row justify-content-center py-5">
          <div className="col-10 mb-3">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
            <span className="text-danger small">{error.title}</span>
          </div>

          <div className="col-5 mb-3">
            <label htmlFor="category">Category</label>
            <select
              className="form-select"
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
            >
              <option value="">Select Category</option>
              {data.map((row, index) => {
                return (
                  <option key={index} value={row.category}>
                    {row.category}
                  </option>
                );
              })}
            </select>
            <span className="text-danger small">{error.category}</span>
          </div>

          <div className="col-5 mb-3">
            <label>Image</label>
            <input
              type="file"
              className="form-control"
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.files[0] })
              }
            />
            <span className="text-danger small">{error.image}</span>
          </div>

          <div className="col-10 mb-3">
            <label>content</label>
            <textarea
              className="form-control"
              rows="7"
              defaultValue=""
              value={formData.content}
              onChange={(e) =>
                setFormData({ ...formData, content: e.target.value })
              }
            ></textarea>
            <span className="text-danger small">{error.content}</span>
          </div>
          <div className="col-10 mb-3">
            <button className="btn bg-success-subtle w-100">
              Save Article
            </button>
          </div>
        </div>
      </form>
      <p className="mt-3 text-success">{response.Response}</p>
    </>
  );
};

export default Add_article;

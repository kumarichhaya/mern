import Blog from "./Blog";
const Home = () => {
  return (
    <div className="container">
      <div className=" d-flex justify-content-center align-items-center vh-100">
        <div className="text-center p-4">
          <h1 className="fw-bold display-4 text-primary mb-3">
            Welcome to My Blog
          </h1>
          <p className="fs-5 text-muted mb-4">
            A space where I share my thoughts on frontend development, the MERN
            stack, and everything tech. Join me on this journey of learning and
            exploration!
          </p>
          <a
            href="/about"
            className="btn btn-success btn-lg rounded-pill px-4 py-2 shadow"
          >
            Learn More About Me
          </a>
        </div>
      </div>
      <Blog />
    </div>
  );
};

export default Home;

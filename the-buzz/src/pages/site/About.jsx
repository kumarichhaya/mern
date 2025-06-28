import image from "./../../assets/reso.png"
const About = () => {
  return (
    <div className="container d-flex justify-content-center">
      <div
        className="card shadow-lg border-0 rounded-4 p-4"
        style={{ maxWidth: "700px" }}
      >
        <div className="text-center">
          <img
            src={image}
            alt="Chhaya"
            className="rounded-circle shadow mb-3"
            width="120"
            height="120"
          />
          <h1 className="fw-bold text-primary">About Me</h1>
        </div>
        <p className="text-muted fs-5">
          Hi, I'm <strong className="text-dark">Chhaya</strong>! A passionate
          frontend developer with experience in the
          <strong className="text-success"> MERN stack</strong>. I love turning
          ideas into beautiful and functional user interfaces. Currently, I'm
          working at <strong className="text-info">Cronix</strong> as a Junior
          Frontend Developer.
        </p>
        <p className="text-muted fs-5">
          When I'm not coding, you’ll find me enjoying the{" "}
          <span className="text-warning">sunshine</span>, indulging in my love
          for
          <span className="text-danger"> ice cream</span>, or exploring new
          design trends on <span className="text-primary">Figma</span>.
        </p>
        <p className="text-muted fs-5">
          Through this blog, I share my experiences, insights, and learnings in
          the tech world.
          <strong className="text-danger"> Thanks for stopping by!</strong>
        </p>
      </div>
    </div>
  );
};

export default About;

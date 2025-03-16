

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
      <p className="text-lg text-gray-700 mb-6">
        A space where I share my thoughts on frontend development, the MERN stack, and
        everything tech. Join me on this journey of learning and exploration!
      </p>
      <a
        href="/about"
        className="px-6 py-2 bg-green-500 text-white rounded-full text-lg font-medium hover:bg-green-600 transition"
      >
        Learn More About Me
      </a>
    </div>
  );
};

export default Home;
import './blog.css';

function Blog() {
    return (
        <section className="blog">
            <div className="blog-container">
                <h2 className="blog-title">Our Blog</h2>
                <div className="blog-grid">
                    <div className="blog-card">
                        <img src="/images/about.jpg" alt="Blog Post 1" className="blog-image" />
                        <div className="blog-content">
                            <h3 className="blog-post-title">The Future of Web Development</h3>
                            <p className="blog-date">February 23, 2025</p>
                            <p className="blog-description">Explore the latest trends and technologies shaping the future of web development.</p>
                            <a href="#" className="read-more">Read More</a>
                        </div>
                    </div>

                    <div className="blog-card">
                        <img src="/images/library.png" alt="Blog Post 2" className="blog-image" />
                        <div className="blog-content">
                            <h3 className="blog-post-title">React Best Practices in 2025</h3>
                            <p className="blog-date">January 15, 2025</p>
                            <p className="blog-description">Learn about the best practices for building efficient and maintainable React applications.</p>
                            <a href="#" className="read-more">Read More</a>
                        </div>
                    </div>

                    <div className="blog-card">
                        <img src="/images/certificate.jpg" alt="Blog Post 3" className="blog-image" />
                        <div className="blog-content">
                            <h3 className="blog-post-title">UI/UX Design Principles</h3>
                            <p className="blog-date">December 10, 2024</p>
                            <p className="blog-description">A deep dive into the fundamental principles of UI/UX design for better user experiences.</p>
                            <a href="#" className="read-more">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Blog;

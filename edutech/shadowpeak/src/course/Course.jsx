import './course.css';

function Course() {
    return (
        <section className='course'>
            <div className='course-content'>
            <h2>Courses We Offer</h2>
            <p>Explore our range of courses designed to help you master the latest technologies.</p>
            
            <div className='row'>
                <div className='col-sm-3 course-col'>
                    <h3>Beginners</h3>
                    <ul>
                        <li>Introduction to Programming</li>
                        <li>HTML & CSS Basics</li>
                        <li>JavaScript Fundamentals</li>
                    </ul>
                </div>
                <div className='col-sm-3 course-col'>
                    <h3>Intermediate</h3>
                    <ul>
                        <li>React.js Development</li>
                        <li>Node.js & Express</li>
                        <li>Database Management</li>
                    </ul>
                </div>
                <div className='col-sm-3 course-col'>
                    <h3>Advanced</h3>
                    <ul>
                        <li>Full-Stack Development</li>
                        <li>Machine Learning Basics</li>
                        <li>Cybersecurity Fundamentals</li>
                    </ul>
                </div>
            </div>
            
            <div className='row'>
                <div className='col-sm-3 course-col'>
                    <h3>FANG Preparation</h3>
                    <ul>
                        <li>Data Structures & Algorithms</li>
                        <li>System Design</li>
                        <li>Behavioral Interview Prep</li>
                    </ul>
                </div>
                <div className='col-sm-3 course-col'>
                    <h3>Cloud Computing</h3>
                    <ul>
                        <li>AWS & Azure Basics</li>
                        <li>Cloud Security</li>
                        <li>DevOps & CI/CD</li>
                    </ul>
                </div>
                <div className='col-sm-3 course-col'>
                    <h3>Blockchain Development</h3>
                    <ul>
                        <li>Introduction to Blockchain</li>
                        <li>Smart Contracts with Solidity</li>
                        <li>Building DApps</li>
                    </ul>
                </div>
            </div>
            </div>
        </section>
    );
}

export default Course;

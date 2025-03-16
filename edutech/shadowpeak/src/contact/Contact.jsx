import './contact.css';

function Contact() {
    return (
        <section className="contact">
            <div className="contact-container">
                <h2 className="contact-title">Contact Us</h2>
                <form className="contact-form">
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Your Name" 
                        required 
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Your Email" 
                        required 
                    />
                    <textarea 
                        name="message" 
                        placeholder="Your Message" 
                        required 
                    ></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;

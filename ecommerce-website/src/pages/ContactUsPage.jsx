import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function ContactUsPage(){
  return(
    <>
      <title>Contact Us</title>

      <Navbar/>

      <div className="container py-5">
        <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
                <h1 className="text-center mb-4">Contact Us</h1>
                <p className="lead text-center mb-5">We’d love to hear from you! Whether you have questions about our products, your order, or just want to say hello, feel free to get in touch with us using the contact form below.</p>

                {/* <!-- Contact Form --> */}
                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter your full name" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email address" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea className="form-control" id="message" rows="5" placeholder="Your message..." required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>

                <hr className="my-4"/>

                {/* <!-- Contact Information Section --> */}
                <div className="text-center mt-5">
                    <h4>Get in Touch</h4>
                    <p>If you have any questions or need assistance, feel free to reach out to us via the following methods:</p>
                    <p><strong>Email:</strong> <a href="mailto:support@hotwheelsstore.com" className="text-dark">support@hotwheelsstore.com</a></p>
                    <p><strong>Phone:</strong> +855 12 345 678</p>
                    <p><strong>Address:</strong> 123 Hot Wheels Ave, Collector City, CA 12345, Cambodia</p>
                </div>
            </div>
        </div>
      </div>

      <Footer/>
    </>
  )
}
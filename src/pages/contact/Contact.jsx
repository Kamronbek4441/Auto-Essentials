import "./Contact.css";
import Services from "../../components/services/Services";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="contact-header">
          <h1>Get In Touch With Us</h1>
          <p>
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us <br /> An Email. Our Staff Always Be There To Help You
            Out. Do Not Hesitate!
          </p>
        </div>
        <div className="contact-container">
          <div className="contact-info">
            <div className="address content">
              <FaLocationDot />
              <div className="content-text">
                <h3>Address</h3>
                <p>lorem inpum ...</p>
              </div>
            </div>
            <div className="phone content">
              <IoCall />
              <div className="content-text">
                <h3>phone</h3>
                <p>lorem inpum ...</p>
              </div>
            </div>
          </div>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="firstName">Your Name</label>
              <input type="text" placeholder="Abc" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="text" placeholder="Abc@def.com" />
            </div>
            <div className="form-group">
              <label htmlFor="subject"> Subject</label>
              <input type="text" placeholder="This is an optional" />
            </div>
            <div className="form-group">
              <label htmlFor="message"> Message</label>
              <textarea
                type="messega"
                placeholder="Hi! i’d like to ask about"
              ></textarea>
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
      <Services />
    </>
  );
};

export default Contact;

import React from "react";
import From from "../From/From";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-area">
      <h5 className="text-center mb-3">Get In Touch</h5>
      <SectionHeading heading="Contact Me" />
      <From />
    </section>
  );
};

export default Contact;

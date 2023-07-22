import React from "react";
import { Button } from "react-bootstrap";
import "../components/style/contact.css";
import SectionHead from "../components/utility/SectionHead";
import TextInput from "../components/utility/TextInput";
const Contact = () => {
  return (
    <div className="contact-section py-5">
      <div className="container">
      <SectionHead title="Let's Talk" text='Must explain to you how all this mistaken idea of denouncing pleasure born and give you a complete account the system'/>
      <div className="row">
        <div className="col-lg-8 mx-auto p-5 border rounded-3">
          <TextInput
            type="text"
            placeholder="Enter Your Name"
            icon="person"
          />
          <TextInput
            type="email"
            placeholder="Enter Your Mail"
            icon="alternate_email"
          />
          <textarea className="w-100 text-box" type='textarea' placeholder='Write your message'/>
          <Button variant="outline-info" className="w-100" size="lg">
        Block level button
      </Button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Contact;

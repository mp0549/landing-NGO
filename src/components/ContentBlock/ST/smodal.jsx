
import React, { useState } from "react";
import { Button, Modal, Form } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

const ContactModal = ({  modalOpen, setModalOpen }) => {


  // const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setModalOpen(false);
    axios.post('https://getform.io/f/', formData)
      .then(response => {
        console.log(response);
        alert('Form submitted successfully');
      })
      .catch(error => {
        console.log(error);
        alert('There was an error submitting the form');
      });
  }
  //   console.log("Form submitted: ", formData);
  //   
  //   async (event) => {
  //     event.preventDefault();
  // };
  // const formData = {
  //   "form-name": "contact",
  //   name,
  //   email,
  //   message
  // };

  return (
    <>
      {/* <Button color="primary" onClick={() => setModalOpen(true)}>
        Open Contact Form
      </Button> */}
      <Modal isOpen={modalOpen} toggle={() => setModalOpen(false)}>
        <div className="modal-header">
          <h4 className="modal-title">Contact Us</h4>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => setModalOpen(false)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <Form onSubmit={handleSubmit}>
          <div className="modal-body">
            <div className="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label for="email">Email</label>
              <input
                id="email"
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label for="message">Message</label>
              <textarea
                className="form-control"
                name="message"
                id="message"
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="modal-footer">
            <Button color="secondary" onClick={() => setModalOpen(false)}>
              Close
            </Button>
            <Button  style={{background:"#996830"}} type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default ContactModal;


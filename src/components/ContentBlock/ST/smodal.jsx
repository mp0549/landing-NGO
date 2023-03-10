import React, { useState } from "react";
import { Button, Modal, Form } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

const ContactModal = ({ modalOpen, setModalOpen }) => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    school: "",
    gradeLevel: "",
    subjects: "",
    preferredGradeLevels: "",
    whyTutor: "",
    otherQuestions: "",
    termsAndConditions: false
  });

  const handleInputChange = e => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setModalOpen(false);
    axios.post('https://formspree.io/f/xnqyzpjv', formData)
      .then(response => {
        console.log(response);
        alert('Form submitted successfully');
      })
      .catch(error => {
        console.log(error);
        alert('There was an error submitting the form');
      });
  }

  return (
    <>
      <Modal isOpen={modalOpen} toggle={() => setModalOpen(false)}>
        <div className="modal-header">
          <h4 className="modal-title">Teacher Details</h4>
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
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                type="text"
                className="form-control"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="school">School</label>
              <input
                id="school"
                type="text"
                className="form-control"
                name="school"
                value={formData.school}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="gradeLevel">Grade Level</label>
              <input
                id="gradeLevel"
                type="text"
                className="form-control"
                name="gradeLevel"
                value={formData.gradeLevel}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subjects">Preferred Subjects</label>
              <input
                id="subjects"
                type="text"
                className="form-control"
                name="subjects"
                value={formData.subjects}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="preferredGradeLevels">Preferred Grade Levels</label>
              <input
              type="text"
            id="preferredGradeLevels"
            className="form-control"
            name="preferredGradeLevels"
            value={formData.preferredGradeLevels}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="whyTutoring">Why do you want to be a tutor for xyztutoring?</label>
          <textarea
            className="form-control"
            name="whyTutoring"
            id="whyTutoring"
            value={formData.whyTutoring}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="otherQuestions">Other Questions</label>
          <textarea
            className="form-control"
            name="otherQuestions"
            id="otherQuestions"
            value={formData.otherQuestions}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
          <label className="form-check-label" htmlFor="defaultCheck1">
            I agree to the terms and conditions
          </label>
        </div>
      </div>
      <div className="modal-footer">
        <Button color="secondary" onClick={() => setModalOpen(false)}>
          Close
        </Button>
        <Button style={{background:"#996830"}} type="submit">
          Submit
        </Button>
      </div>
    </Form>
  </Modal>
</>
);
};

export default ContactModal;

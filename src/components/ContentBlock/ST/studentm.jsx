import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

const StudentDetailsForm = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [parentContact, setParentContact] = useState('');
  const [studentContact, setStudentContact] = useState('');
  const [gradeLevel, setGradeLevel] = useState('');
  const [subjects, setSubjects] = useState('');
  const [otherQuestions, setOtherQuestions] = useState('');
  const [termsAndConditions, setTermsAndConditions] = useState(false);
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.post(`https://formspree.io/f/xayzbeqp`, {
        name,
        dob,
        location,
        email,
        phoneNumber,
        parentContact,
        studentContact,
        gradeLevel,
        subjects,
        otherQuestions,
        termsAndConditions
      });
      setResponse(res.data);
      setTimeout(() => {
        onClose();
      }, 2000); // close modal after 2 seconds
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  return (
    <Modal isOpen={isOpen} toggle={onClose}>
      <ModalHeader toggle={onClose}>Student Details</ModalHeader>
      <ModalBody>
        <motion.form
          onSubmit={handleSubmit}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <FormGroup>
            <Label for="name">Full Name:</Label>
            <Input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="dob">Date of Birth:</Label>
            <Input
              type="date"
              id="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="form-control"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="location">Location:</Label>
            <Input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="form-control"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email:</Label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              required
            />
          </FormGroup>
          <FormGroup>
  <Label for="parentContact">Parent Contact:</Label>
  <Input
    type="text"
    id="parentContact"
    value={parentContact}
    onChange={(e) => setParentContact(e.target.value)}
    className="form-control"
    required
  />
</FormGroup>
<FormGroup>
  <Label for="studentContact">Student Contact:</Label>
  <Input
    type="text"
    id="studentContact"
    value={studentContact}
    onChange={(e) => setStudentContact(e.target.value)}
    className="form-control"
    required
  />
</FormGroup>
<FormGroup>
  <Label for="gradeLevel">Grade Level:</Label>
  <Input
    type="select"
    id="gradeLevel"
    value={gradeLevel}
    onChange={(e) => setGradeLevel(e.target.value)}
    className="form-control"
    required
  >
    <option value="">Select Grade Level</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    {/* add more options as needed */}
  </Input>
</FormGroup>
<FormGroup>
  <Label for="subjects">Subjects:</Label>
  <Input
    type="select"
    id="subjects"
    value={subjects}
    onChange={(e) => setSubjects(e.target.value)}
    className="form-control"
    required
  >
    <option value="">Select Subjects</option>
    <option value="math">Math</option>
    <option value="science">Science</option>
    <option value="english">English</option>
    {/* add more options as needed */}
  </Input>
    </FormGroup>
    <FormGroup>
      <Label for="otherQuestions">Other Questions:</Label>
      <Input
        type="textarea"
        id="otherQuestions"
        value={otherQuestions}
        onChange={(e) => setOtherQuestions(e.target.value)}
        className="form-control"
      />
    </FormGroup>
    <FormGroup check>
      <Label check>
        <Input type="checkbox" id="termsAndConditions" checked={termsAndConditions} onChange={() => setTermsAndConditions(!termsAndConditions)} />
        {' '}
        I accept the terms and conditions
      </Label>
    </FormGroup>
        </motion.form>
        {response && (
          <div className="mt-4 p-4 bg-light">
            <p>{response.message}</p>
            {/* Render other response data as needed */}
          </div>
        )}
      </ModalBody>
      <div className="d-flex justify-content-end align-items-center px-3 py-2 bg-light">
        <Button type="submit" color="primary" disabled={isLoading} onClick={handleSubmit}>
          {isLoading ? 'Submitting...' : 'Submit'}
        </Button>
      </div>
    </Modal>
  );
};

export default StudentDetailsForm;

import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const Signup = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div>
      {/* Button to trigger the modal */}
      <Button variant="default" className="btn-rounded mb-4" onClick={handleShow}>
        Launch Modal Register Form
      </Button>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Your name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Your email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Your password</Form.Label>
              <Form.Control type="password" placeholder="Enter your password" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="deep-orange" onClick={handleClose}>
            Sign up
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Signup;

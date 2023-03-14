import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/Form";
import Button from "../Button/Button";
import "./From.css";

const From = () => {
  return (
    <section className="from-area py-3">
      <Container>
        <Row className="align-items-center">
          <Col lg={5}>
            <div className="contact-text">
              <ul>
                <li>
                  <a href="mailto:binatarani.bd@gmail.com">
                    <i className="fa-regular fa-envelope"></i>
                    binatarani.bd@gmail.com
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/binata.rani">
                    <i className="fa-brands fa-square-facebook"></i>facebook.com
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/binata-rani-91138b262/">
                    <i className="fa-brands fa-linkedin"></i>Linkdin Link
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Binatarani">
                    <i className="fa-brands fa-github"></i>Github Link
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={7}>
            <Form className="contact-form">
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="fullname" placeholder="Full Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button heading="Submit Now" />
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default From;

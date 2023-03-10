import React from "react";
import Container from "react-bootstrap/esm/Container";
import "./SubSectionHeading.css";

const SubSectionHeading = (props) => {
  return (
    <section className="sub-section-heading mb-4 mt-2">
      <Container>
        <h5>{props.heading}</h5>;
      </Container>
    </section>
  );
};

export default SubSectionHeading;

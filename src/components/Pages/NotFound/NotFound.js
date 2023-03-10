import React from "react";
import Container from "react-bootstrap/esm/Container";
import Logo1 from "../../../images/page-404.png";
import "./NotFound.css";

const NotFound = () => {
  return (
    <section className="not-found-area">
      <Container>
        <div className="not-found-text text-center">
          <img src={Logo1} alt="" />
        </div>
      </Container>
    </section>
  );
};

export default NotFound;

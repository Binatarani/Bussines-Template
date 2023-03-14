import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image1 from "../../images/white-verified (1).png";
import Image2 from "../../images/white-eco-house.png";
import Image3 from "../../images/white-sofa.png";
import Image4 from "../../images/white-architecture-and-city.png";
import "./BuyOrSell.css";

const BuyOrSell = () => {
  return (
    <section className="bg-patten pt-12 pb-10 bg-secondery">
      <Container>
        <h2 className="text-white text-center text3">
          Looking to Buy a new property or Sell an existing one?
        </h2>
        <span className="heading-divider mx-auto"></span>
        <Row className="info-box-3 mt-5 no-gutters mx-auto">
          <Col className="col-md-3 col-sm-6 mb-6 mb-md-0 data1">
            <a
              href="#/"
              className="card pb-5 pt-5 px-0 shadow-hover-3 hover-change-image"
            >
              <div className="card-img-top d-flex boder-md-right justify-content-center boder-md-right rounded-0">
                <div className="ms-5">
                  <img src={Image1} alt="#" />
                  <div className="card-body1 px-0 pt-5 pb-0">
                    <h5 className="card-title fs-16 lh-2 text-white mb-0 ms-0 mt-2">
                      Apartment
                    </h5>
                  </div>
                </div>
              </div>
            </a>
          </Col>
          <Col className="col-md-3 col-sm-6 mb-6 mb-md-0 data1">
            <a
              href="#/"
              className="card pb-5 pt-5 px-0 shadow-hover-3 hover-change-image"
            >
              <div className="card-img-top d-flex boder-md-right justify-content-center boder-md-right rounded-0">
                <div className="ms-5">
                  <img src={Image2} alt="#" />
                  <div className="card-body1 px-0 pt-5 pb-0">
                    <h5 className="card-title fs-16 lh-2 text-white mb-0 ms-0 mt-2">
                      House
                    </h5>
                  </div>
                </div>
              </div>
            </a>
          </Col>
          <Col className="col-md-3 col-sm-6 mb-6 mb-md-0 data1">
            <a
              href="#/"
              className="card pb-5 pt-5 px-0 shadow-hover-3 hover-change-image"
            >
              <div className="card-img-top d-flex boder-md-right justify-content-center boder-md-right rounded-0">
                <div className="ms-5">
                  <img src={Image3} alt="#" />
                  <div className="card-body1 px-0 pt-5 pb-0">
                    <h5 className="card-title fs-16 lh-2 text-white mb-0 ms-0 mt-3">
                      Office
                    </h5>
                  </div>
                </div>
              </div>
            </a>
          </Col>
          <Col className="col-md-3 col-sm-6 mb-6 mb-md-0 data1">
            <a
              href="#/"
              className="card pb-5 pt-5 px-0 shadow-hover-3 hover-change-image"
            >
              <div className="card-img-top d-flex boder-md-right justify-content-center boder-md-right rounded-0">
                <div className="ms-5">
                  <img src={Image4} alt="#" />
                  <div className="card-body1 px-0 pt-5 pb-0">
                    <h5 className="card-title fs-16 lh-2 text-white mb-0 ms-0 mt-3">
                      Villa
                    </h5>
                  </div>
                </div>
              </div>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BuyOrSell;

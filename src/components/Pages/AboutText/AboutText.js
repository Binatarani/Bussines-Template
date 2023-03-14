import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { FcBarChart } from "react-icons/fc";
import { FcComboChart } from "react-icons/fc";
import { FcPhone } from "react-icons/fc";
import { FcShop } from "react-icons/fc";
import { FcBriefcase } from "react-icons/fc";
import { FcAdvertising } from "react-icons/fc";
import "./AboutText.css";

const AboutText = () => {
  return (
    // About area start
    <section className="about-text-area">
      <Container>
        <Row className="mx-lg-n6 mt-8">
          <Col className="col-md-4 col-sm-12 mb-md-7 mb-4 px-lg-6">
            <div className="card boder-0 text-center">
              <div className="rounded overflow-hidden bg-hover-overlay d-inline-block ">
                <FcShop className="icon-div" />
              </div>
              <div className="card-body pt-5">
                <h4 className="fs-22 text-heading 1h-164 mb-0">
                  Property Management
                </h4>
                <p className="m-0 pt-3">
                  The best property management site should keep owners in touch
                  with what's happening at their property as it happens..
                </p>
              </div>
            </div>
          </Col>
          <Col className="col-md-4 col-sm-12 mb-md-7 mb-4 px-lg-6">
            <div className="card boder-0 text-center">
              <div className="rounded overflow-hidden bg-hover-overlay d-inline-block ">
                <FcBriefcase className="icon-div" />
              </div>
              <div className="card-body pt-5">
                <h4 className="fs-22 text-heading 1h-164 mb-0">
                  Mortgage Service
                </h4>
                <p className="m-0 pt-3">
                  Get Results for Mortgage Broker Bangladesh. Find Quick Results
                  from Multiple Sources. Search for Mortgage Broker Australia.
                </p>
              </div>
            </div>
          </Col>
          <Col className="col-md-4 col-sm-12 mb-md-7 mb-4 px-lg-6">
            <div className="card boder-0 text-center">
              <div className="rounded overflow-hidden bg-hover-overlay d-inline-block ">
                <FcAdvertising className="icon-div" />
              </div>
              <div className="card-body pt-5">
                <h4 className="fs-22 text-heading 1h-164 mb-0">
                  Consulting Service
                </h4>
                <p className="m-0 pt-3">
                  Professional advisers experienced in Bangladesh company
                  formation. Expert advice on starting a business in the
                  Bangladesh.
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mx-lg-n6 mt-8">
          <Col className="col-md-4 col-sm-12 mb-md-7 mb-4 px-lg-6">
            <div className="card boder-0 text-center">
              <div className="rounded overflow-hidden bg-hover-overlay d-inline-block ">
                <FcBarChart className="icon-div" />
              </div>
              <div className="card-body pt-5">
                <h4 className="fs-22 text-heading 1h-164 mb-0">Home Buying</h4>
                <p className="m-0 pt-3">
                  Enjoy the best deal of apartments in Dhaka with the best
                  prices at attracting locations. Premium Flats at pleasant.
                </p>
              </div>
            </div>
          </Col>
          <Col className="col-md-4 col-sm-12 mb-md-7 mb-4 px-lg-6">
            <div className="card boder-0 text-center">
              <div className="rounded overflow-hidden bg-hover-overlay d-inline-block ">
                <FcComboChart className="icon-div" />
              </div>
              <div className="card-body pt-5">
                <h4 className="fs-22 text-heading 1h-164 mb-0">Home Selling</h4>
                <p className="m-0 pt-3">
                  Customize your home search with our personalized search
                  browser. Find your dream home in your dream neighborhood.
                  Search Homes Online.
                </p>
              </div>
            </div>
          </Col>
          <Col className="col-md-4 col-sm-12 mb-md-7 mb-4 px-lg-6">
            <div className="card boder-0 text-center">
              <div className="rounded overflow-hidden bg-hover-overlay d-inline-block ">
                <FcPhone className="icon-div" />
              </div>
              <div className="card-body pt-5">
                <h4 className="fs-22 text-heading 1h-164 mb-0">
                  Escrow Services
                </h4>
                <p className="m-0 pt-3">
                  Secure online payment processing from the world's largest
                  online escrow service since 1999. Trusted by 1M+ users. Priced
                  as low as 0.89%
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    // About area End
  );
};

export default AboutText;

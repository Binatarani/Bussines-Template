import React from "react";
import Container from "react-bootstrap/esm/Container";
import SectionHeading from "../../SectionHeading/SectionHeading";
import SubSectionHeading from "../../SubSectionHeading/SubSectionHeading";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
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
      <SectionHeading heading="About This Property" />
      <SubSectionHeading heading="Over the past 10 years we’ve created more than 5,000 new homes and 1 million sq ft of workspace in over 60 regeneration projects. Have a look at the short film below to learn more about how we’ve achieved this and what drives us." />
      <Container>
        <Row className="card-area mx-lg-n6 mt-8 mb-5">
          <Col lg={4} className="col-md-4 mb-6 mb-lg-0 mb-5">
            <Card className="card shadow-2 px-7 pb-6 pt-4 h-100 boder-0">
              <div className="card-img-top d-flex align-items-end justify-content-center">
                <FcBarChart className="icon-div" />
              </div>

              <Card.Body className="px-0 pt-6 pb-0 text-center">
                <Card.Title className="mb-2">Property Management</Card.Title>
                <Card.Text className="pt-3">
                  The best property management site should keep owners in touch
                  with what's happening at their property as it happens..
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} className="col-md-4 mb-6 mb-lg-0 mb-5">
            <Card className="card shadow-2 px-7 pb-6 pt-4 h-100 boder-0">
              <div className="card-img-top d-flex align-items-end justify-content-center">
                <FcComboChart className="icon-div" />
              </div>
              <Card.Body className="px-0 pt-6 pb-0 text-center">
                <Card.Title className="mb-2">Mortgage Service</Card.Title>
                <Card.Text className="pt-3">
                  Get Results for Mortgage Broker Bangladesh. Find Quick Results
                  from Multiple Sources. Search for Mortgage Broker Australia
                  and Discover Millions of Results.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} className="col-md-4 mb-6 mb-lg-0 mb-5">
            <Card className="card shadow-2 px-7 pb-6 pt-4 h-100 boder-0">
              <div className="card-img-top d-flex align-items-end justify-content-center">
                <FcPhone className="icon-div" />
              </div>
              <Card.Body className="px-0 pt-6 pb-0 text-center">
                <Card.Title className="mb-2">Consulting Service</Card.Title>
                <Card.Text className="pt-3">
                  Professional advisers experienced in Bangladesh company
                  formation. Expert advice on starting a business in the
                  Bangladesh. Dedicated Client Support. Established in 1987.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} className="col-md-4 mb-6 mb-lg-0 mb-5 mt-4">
            <Card className="card shadow-2 px-7 pb-6 pt-4 h-100 boder-0">
              <div className="card-img-top d-flex align-items-end justify-content-center">
                <FcShop className="icon-div" />
              </div>
              <Card.Body className="px-0 pt-6 pb-0 text-center">
                <Card.Title className="mb-2">Home Buying</Card.Title>
                <Card.Text className="pt-3">
                  Enjoy the best deal of apartments in Dhaka with the best
                  prices at attracting locations. Premium Flats at pleasant
                  locations in addition to best price deals in Dhaka.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} className="col-md-4 mb-6 mb-lg-0 mb-5 mt-4">
            <Card className="card shadow-2 px-7 pb-6 pt-4 h-100 boder-0">
              <div className="card-img-top d-flex align-items-end justify-content-center">
                <FcBriefcase className="icon-div" />
              </div>
              <Card.Body className="px-0 pt-6 pb-0 text-center">
                <Card.Title className="mb-2">Home Selling</Card.Title>
                <Card.Text className="pt-3">
                  Customize your home search with our personalized search
                  browser. Find your dream home in your dream neighborhood.
                  Search Homes Online. Find Home Value For Free. Register
                  Online.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} className="col-md-4 mb-6 mb-lg-0 mb-5 mt-4">
            <Card className="card shadow-2 px-7 pb-6 pt-4 h-100 boder-0">
              <div className="card-img-top d-flex align-items-end justify-content-center">
                <FcAdvertising className="icon-div" />
              </div>
              <Card.Body className="px-0 pt-6 pb-0 text-center">
                <Card.Title className="mb-2">Escrow Services</Card.Title>
                <Card.Text className="pt-3">
                  Secure online payment processing from the world's largest
                  online escrow service since 1999. Trusted by 1M+ users. Priced
                  as low as 0.89%.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
    // About area End
  );
};

export default AboutText;

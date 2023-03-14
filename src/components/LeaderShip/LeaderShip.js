import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import SectionHeading from "../SectionHeading/SectionHeading";
import SubSectionHeading from "../SubSectionHeading/SubSectionHeading";
import OurTeam1 from "../../images/our-team-01.jpg";
import OurTeam2 from "../../images/our-team-02.jpg";
import OurTeam3 from "../../images/our-team-03.jpg";
import OurTeam4 from "../../images/our-team-04.jpg";
import OurTeam5 from "../../images/our-team-05.jpg";
import OurTeam6 from "../../images/our-team-06.jpg";
import OurTeam7 from "../../images/our-team-07.jpg";
import "./LeaderShip.css";
const LeaderShip = () => {
  return (
    <section className="leadership-area py-12">
      <Container>
        <SectionHeading heading="LeaderShip" />
        <SubSectionHeading heading="Our LeaderShip Member So Frendly Behavier. Anytime You Come My Homesite and Visit Our Website." />
        <Row className="mx-lg-n6 mt-8">
          <Col className="col-md-4 col-sm-12 mb-md-7 mb-4 px-lg-6">
            <div className="card boder-0 text-center">
              <div className="rounded overflow-hidden bg-hover-overlay d-inline-block ">
                <img src={OurTeam1} alt="" className="w-100" />
              </div>
              <div className="card-body pt-5">
                <h3 className="fs-22 text-heading 1h-164 mb-0">
                  Dollie Horton
                </h3>
                <p className="m-0">Co-founder</p>
              </div>
            </div>
          </Col>
          <Col className="col-md-4 col-sm-12 mb-md-7 mb-4 px-lg-6">
            <div className="card boder-0 text-center">
              <div className="rounded overflow-hidden bg-hover-overlay d-inline-block ">
                <img src={OurTeam2} alt="" className="w-100" />
              </div>
              <div className="card-body pt-5">
                <h3 className="fs-22 text-heading 1h-164 mb-0">Diego Garcia</h3>
                <p className="m-0">Co-founder</p>
              </div>
            </div>
          </Col>
          <Col className="col-md-4 col-sm-12 mb-md-7 mb-4 px-lg-6">
            <div className="card boder-0 text-center">
              <div className="rounded overflow-hidden bg-hover-overlay d-inline-block ">
                <img src={OurTeam3} alt="" className="w-100" />
              </div>
              <div className="card-body pt-5">
                <h3 className="fs-22 text-heading 1h-164 mb-0">
                  Stefano Nekie
                </h3>
                <p className="m-0">Co-founder</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mx-lg-n6">
          <Col className="col-md-3 col-sm-12 mb-md-7 mb-4 px-lg-6">
            <div className="card boder-0 text-center">
              <div className="rounded overflow-hidden bg-hover-overlay d-inline-block ">
                <img src={OurTeam4} alt="" className="w-100" />
              </div>
              <div className="card-body pt-5">
                <h3 className="fs-22 text-heading 1h-164 mb-0">
                  Stefano Nelli
                </h3>
                <p className="m-0">Co-founder</p>
              </div>
            </div>
          </Col>
          <Col className="col-md-3 col-sm-12 mb-md-7 mb-4 px-lg-6">
            <div className="card boder-0 text-center">
              <div className="rounded overflow-hidden bg-hover-overlay d-inline-block ">
                <img src={OurTeam5} alt="" className="w-100" />
              </div>
              <div className="card-body pt-5">
                <h3 className="fs-22 text-heading 1h-164 mb-0">
                  Dollie Horton
                </h3>
                <p className="m-0">Co-founder</p>
              </div>
            </div>
          </Col>
          <Col className="col-md-3 col-sm-12 mb-md-7 mb-4 px-lg-6">
            <div className="card boder-0 text-center">
              <div className="rounded overflow-hidden bg-hover-overlay d-inline-block ">
                <img src={OurTeam6} alt="" className="w-100" />
              </div>
              <div className="card-body pt-5">
                <h3 className="fs-22 text-heading 1h-164 mb-0">Tom Sanders</h3>
                <p className="m-0">Co-founder</p>
              </div>
            </div>
          </Col>
          <Col className="col-md-3 col-sm-12 mb-md-7 mb-4 px-lg-6">
            <div className="card boder-0 text-center">
              <div className="rounded overflow-hidden bg-hover-overlay d-inline-block ">
                <img src={OurTeam7} alt="" className="w-100" />
              </div>
              <div className="card-body pt-5">
                <h3 className="fs-22 text-heading 1h-164 mb-0">John Leodeco</h3>
                <p className="m-0">Co-founder</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LeaderShip;

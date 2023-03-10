import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Service from "../Service/Service";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./Services.css";
import { useEffect, useState } from "react";
const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <section className="service-area">
      <SectionHeading heading="Service Offered" />
      <span className="heading-divider2 mx-auto"></span>
      <Container>
        <Row>
          {services.map((item) => (
            <Service key={item.id} item={item}></Service>
          ))}
        </Row>
      </Container>
    </section>
  );
};
export default Services;

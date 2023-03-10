import Col from "react-bootstrap/Col";
import "./Service.css";
import Button2 from "../Button2/Button";

const Service = ({ item }) => {
  return (
    <Col lg={4}>
      <div className="single-service1">
        <img src={item.img} alt="" className="w-100 mb-5" />
        <h2>{item.name}</h2>
        <h5>Price: {item.price}</h5>
        <p>{item.description}</p>
        <Button2 heading="Book Now" />
      </div>
    </Col>
  );
};

export default Service;

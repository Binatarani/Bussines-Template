import Col from "react-bootstrap/Col";
import "./Service.css";
// import Button from "../Button/Button";
import Button2 from "../Button2/Button";

const Service = ({ item }) => {
  return (
    <Col lg={4}>
      <div className="single-service1">
        <img src={item.img} alt="" className="w-100 mb-5" />
        <h3>{item.name}</h3>
        <h5>Price: {item.price}</h5>
        <p>{item.description}</p>
        <Button2 heading="Book Now" />
        {/* <Button heading="Book Now" /> */}
        {/* <button className="btn btn-theme">Book Now</button> */}
      </div>
    </Col>
  );
};

export default Service;

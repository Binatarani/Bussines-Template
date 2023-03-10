import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <section className="button-text">
      <button className="btn ms-auto">{props.heading}</button>
    </section>
  );
};

export default Button;

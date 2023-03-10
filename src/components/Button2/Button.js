import React from "react";
import "./Button2.css";

const Button2 = (props) => {
  return (
    <section className="button-text2">
      <button className="btn">{props.heading}</button>
    </section>
  );
};

export default Button2;

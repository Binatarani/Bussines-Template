import React from "react";
import "./SectionHeading.css";

const SectionHeading = (props) => {
  return (
    <section className="section-heading">
      <h2>{props.heading}</h2>
    </section>
  );
};

export default SectionHeading;

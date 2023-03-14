import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import BlogText from "../BlogText/BlogText";
import SubImage from "../../images/slider.jpg";
import "./Blog.css";
const Blog = () => {
  return (
    <section className="blog-section">
      <img className="d-block w-100 mb-3" src={SubImage} alt="" />
      <div className="blog1">
        <SectionHeading heading=" My Blog" />
        <span className="heading-divider2 mx-auto"></span>
        <BlogText />
      </div>
    </section>
  );
};

export default Blog;

import React from "react";
import Container from "react-bootstrap/esm/Container";
import Image3 from "../../images/blog-06.jpg";
import Image4 from "../../images/post-07.jpg";
import Image1 from "../../images/download-brochure.png";
import Image2 from "../../images/post-11 (1).jpg";
import Image5 from "../../images/slider-3.jpg";
import Image6 from "../../images/slider-15.jpg";
import Button2 from "../Button2/Button";
import "./BlogText.css";
const BlogText = () => {
  return (
    <section className="blog-area">
      <Container>
        <div className="row ml-xl-0 mr-xl-n6 ">
          <div className="col-lg-8 mb-lg-0 pl-xl-0 pr-xl-6 mb-0 position-sticky">
            {/* card1 */}
            <div className="boder-0 boder-bottom">
              <div className="image-div position-realative d-flex align-items-end card-image-top">
                <img src={Image3} alt="" className="w-100" />
              </div>
              <div className="text-div">
                <h3 className="mt-4">Modern Apartment</h3>
                <p className="mt-3">
                  Modern apartment rentals feature newer, more complex floor
                  plans with a wider selection available to tenants. • Modern
                  fixtures and decor are typically used throughout the complex.
                  • Modern apartment rentals are typically designed to attract
                  students, millennials, and young professionals.
                </p>
                <Button2 heading="Read More" />
              </div>
            </div>
            {/* card 2 */}
            <div className="boder-0 boder-bottom mt-5">
              <div className="image-div position-realative d-flex align-items-end card-image-top">
                <img src={Image4} alt="" className="w-100" />
              </div>
              <div className="text-div">
                <h3 className="mt-4">Modern Apartment</h3>
                <p className="mt-3">
                  Modern apartment rentals feature newer, more complex floor
                  plans with a wider selection available to tenants. • Modern
                  fixtures and decor are typically used throughout the complex.
                  • Modern apartment rentals are typically designed to attract
                  students, millennials, and young professionals.
                </p>
                <Button2 heading="Read More" />
              </div>
            </div>
            {/* card 3 */}
            <div className="boder-0 boder-bottom mt-5">
              <div className="image-div position-realative d-flex align-items-end card-image-top">
                <img src={Image2} alt="" className="w-100" />
              </div>
              <div className="text-div">
                <h3 className="mt-4">Modern Apartment</h3>
                <p className="mt-3">
                  Modern apartment rentals feature newer, more complex floor
                  plans with a wider selection available to tenants. • Modern
                  fixtures and decor are typically used throughout the complex.
                  • Modern apartment rentals are typically designed to attract
                  students, millennials, and young professionals.
                </p>
                <Button2 heading="Read More" />
              </div>
            </div>
            {/* card 4 */}
            <div className="boder-0 boder-bottom mt-5">
              <div className="image-div position-realative d-flex align-items-end card-image-top">
                <img src={Image5} alt="" className="w-100" />
              </div>
              <div className="text-div">
                <h3 className="mt-4">Modern Apartment</h3>
                <p className="mt-3">
                  Modern apartment rentals feature newer, more complex floor
                  plans with a wider selection available to tenants. • Modern
                  fixtures and decor are typically used throughout the complex.
                  • Modern apartment rentals are typically designed to attract
                  students, millennials, and young professionals.
                </p>
                <Button2 heading="Read More" />
              </div>
            </div>
            {/* card 5 */}
            <div className="boder-0 boder-bottom mt-5 ">
              <div className="image-div position-realative d-flex align-items-end card-image-top">
                <img src={Image6} alt="" className="w-100" />
              </div>
              <div className="text-div">
                <h3 className="mt-4">Modern Apartment</h3>
                <p className="mt-3">
                  Modern apartment rentals feature newer, more complex floor
                  plans with a wider selection available to tenants. • Modern
                  fixtures and decor are typically used throughout the complex.
                  • Modern apartment rentals are typically designed to attract
                  students, millennials, and young professionals.
                </p>
                <Button2 heading="Read More" />
              </div>
            </div>
          </div>
          {/* Start sidebar */}
          <div
            className=" col-lg-4 mb-5 mb-lg-0 mb-5 mt-0 primary-sidebar sidebar-sticky sidebar-mobile-hide"
            id="sidebar"
          >
            <div className="sticky-spacer"></div>
            <div className="primary-sidebar-inner">
              {/* card 1 */}
              <div className="card mb-4">
                <div className="card-body px-5 pb-2">
                  <h4 className="card-title fs-16 lh-2 text-dark mb-3">
                    Categories
                  </h4>
                  <form>
                    <div className="position-relative">
                      <input
                        type="text"
                        placeholder="Search..."
                        name="search"
                        className="from-control from-control-lg boder-0 shadow-none ip1"
                      />
                      <div className="position-absolute pos-fixed-center-right">
                        <button type="submit" className="btn">
                          <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* card 2 */}
              <div className="card mb-4">
                <div className="card-body px-6 pt-5 pb-6">
                  <h4 className="card-tittle fs-14 lh-2 text-dark mb-3">
                    Categories
                  </h4>
                  <ul className="list-group list-group-no-boder ">
                    <li className="list-group-item p-2">
                      <a href="/#" className="text-body d-flex">
                        <span className=" position-relative">Creative</span>
                        <span className="position-absolute pos-fixed-center-right">
                          10
                        </span>
                      </a>
                    </li>
                    <li className="list-group-item p-2">
                      <a href="/#" className="text-body d-flex">
                        <span className=" position-relative">Rentals</span>
                        <span className="position-absolute pos-fixed-center-right">
                          21
                        </span>
                      </a>
                    </li>
                    <li className="list-group-item p-2">
                      <a href="/#" className="text-body d-flex">
                        <span className=" position-relative">Images</span>
                        <span className="position-absolute pos-fixed-center-right">
                          16
                        </span>
                      </a>
                    </li>
                    <li className="list-group-item p-2">
                      <a href="/#" className="text-body d-flex">
                        <span className=" position-relative">In the news</span>
                        <span className="position-absolute pos-fixed-center-right">
                          4
                        </span>
                      </a>
                    </li>
                    <li className="list-group-item p-2">
                      <a href="/#" className="text-body d-flex">
                        <span className=" position-relative">Real Estate</span>
                        <span className="position-absolute pos-fixed-center-right">
                          25
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* card 3 */}
              <div className="card mb-4">
                <div className="card-body px-6 pt-5 pb-6">
                  <h4 className="card-tittle fs-14 lh-2 text-dark mb-3">
                    Latest Posts
                  </h4>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item p-2">
                      <div className="media">
                        <div className="position-relative mr-3 mb-3">
                          <a
                            href="/blog"
                            className="d-block w-100 bg-image cover-center pt-11 rounded py-5 px-5"
                          >
                            {""}
                          </a>
                          <a
                            href="#/"
                            className="bg-image1 bg-dark-opacity-04 position-absolute pt-2"
                          >
                            creative
                          </a>
                        </div>
                        <div className="media-body">
                          <h5 className="lh-186 mb-1 ms-3">
                            <a
                              href="blog-details-1.html"
                              className="text-dark hover-primary"
                            >
                              Retail banks wake up to digital lending this year
                            </a>
                          </h5>
                          <div className="text-gray-light ms-3">
                            Mar 05, 2023
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item p-2">
                      <div className="media">
                        <div className="position-relative mr-3 mb-3">
                          <a
                            href="/blog"
                            className="d-block w-100 bg-image2 cover-center pt-11 rounded py-5 px-5"
                          >
                            {""}
                          </a>
                          <a
                            href="#/"
                            className="bg-image1 bg-dark-opacity-04 position-absolute pt-2"
                          >
                            creative
                          </a>
                        </div>
                        <div className="media-body">
                          <h5 className="lh-186 mb-1 ms-3">
                            <a
                              href="blog-details-1.html"
                              className="text-dark hover-primary"
                            >
                              Retail banks wake up to digital lending this year
                            </a>
                          </h5>
                          <div className="text-gray-light ms-3">
                            Mar 05, 2023
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item p-2">
                      <div className="media">
                        <div className="position-relative mr-3 mb-3">
                          <a
                            href="/blog"
                            className="d-block w-100 bg-image3 cover-center pt-11 rounded py-5 px-5"
                          >
                            {""}
                          </a>
                          <a
                            href="#/"
                            className="bg-image1 bg-dark-opacity-04 position-absolute pt-2"
                          >
                            creative
                          </a>
                        </div>
                        <div className="media-body">
                          <h5 className="lh-186 mb-1 ms-3">
                            <a
                              href="blog-details-1.html"
                              className="text-dark hover-primary"
                            >
                              Retail banks wake up to digital lending this year
                            </a>
                          </h5>
                          <div className="text-gray-light ms-3">
                            Mar 05, 2023
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* card 4 */}
              <div className="card mb-4">
                <div className="card-body px-6 pt-5 pb-6">
                  <h4 className="card-tittle fs-16 lh-2 text-dark mb-3">
                    DOWNLOAD BROCHURE
                  </h4>
                  <img src={Image1} alt="" className="w-100" />
                  <div className="text-center mt-10 mb-2">
                    <a
                      href="#/"
                      className="btn btn-lg bg-gray-1 bg-hover-accent btn-block text-heading"
                    >
                      " DOWNLOAD NOW"
                      <span className="text-p d-inline-block ml-2 ms-2">
                        <i className="fa-solid fa-circle-down"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              {/* card 5 */}
              <div className="card mb-4">
                <div className="card-body px-6 pt-5 pb-6">
                  <h4 className="card-tittle fs-14 lh-2 text-dark mb-3">
                    Popular Tags
                  </h4>
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item mb-2">
                      <a
                        href="/#"
                        className="px-2 py-1 d-block fs-13 lh-17 bg-gray-03 text-muted hover-white bg-hover-primary rounded"
                      >
                        designer
                      </a>
                    </li>
                    <li className="list-inline-item mb-2">
                      <a
                        href="#/"
                        className="px-2 py-1 d-block fs-13 lh-17 bg-gray-03 text-muted hover-white bg-hover-primary rounded"
                      >
                        mockup
                      </a>
                    </li>
                    <li className="list-inline-item mb-2">
                      <a
                        href="/#"
                        className="px-2 py-1 d-block fs-13 lh-17 bg-gray-03 text-muted hover-white bg-hover-primary rounded"
                      >
                        templata
                      </a>
                    </li>
                    <li className="list-inline-item mb-2">
                      <a
                        href="#/"
                        className="px-2 py-1 d-block fs-13 lh-17 bg-gray-03 text-muted hover-white bg-hover-primary rounded"
                      >
                        iT security
                      </a>
                    </li>
                    <li className="list-inline-item mb-2">
                      <a
                        href="#/"
                        className="px-2 py-1 d-block fs-13 lh-17 bg-gray-03 text-muted hover-white bg-hover-primary rounded"
                      >
                        IT service
                      </a>
                    </li>
                    <li className="list-inline-item mb-2">
                      <a
                        href="/#"
                        className="px-2 py-1 d-block fs-13 lh-17 bg-gray-03 text-muted hover-white bg-hover-primary rounded"
                      >
                        business
                      </a>
                    </li>
                    <li className="list-inline-item mb-2">
                      <a
                        href="#/"
                        className="px-2 py-1 d-block fs-13 lh-17 bg-gray-03 text-muted hover-white bg-hover-primary rounded"
                      >
                        videos
                      </a>
                    </li>
                    <li className="list-inline-item mb-2">
                      <a
                        href="/#"
                        className="px-2 py-1 d-block fs-13 lh-17 bg-gray-03 text-muted hover-white bg-hover-primary rounded"
                      >
                        wordpress theme
                      </a>
                    </li>
                    <li className="list-inline-item mb-2">
                      <a
                        href="#/"
                        className="px-2 py-1 d-block fs-13 lh-17 bg-gray-03 text-muted hover-white bg-hover-primary rounded"
                      >
                        sketch
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BlogText;

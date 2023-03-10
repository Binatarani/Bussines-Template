import SectionHeading from "../../SectionHeading/SectionHeading";
import AllImages from "../AllImages/AllImages";
import "./Gallery.css";

const Gallery = () => {
  return (
    <section className="gallery-area">
      <SectionHeading heading="Photo Gallery" />
      <AllImages />
    </section>
  );
};

export default Gallery;

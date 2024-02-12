import React from "react";
import "./Organization.css";
import orga1 from "../../../../assets/testimonial/orga1.svg"
import orga2 from "../../../../assets/testimonial/orga2.svg"
import orga3 from "../../../../assets/testimonial/orga3.svg"
import orga4 from "../../../../assets/testimonial/orga4.svg"
import orga5 from "../../../../assets/testimonial/orga5.svg"
import orga6 from "../../../../assets/testimonial/orga6.svg"
import orga7 from "../../../../assets/testimonial/orga7.svg"
import orga8 from "../../../../assets/testimonial/orga8.svg"
import orga9 from "../../../../assets/testimonial/orga9.svg"
import orga10 from "../../../../assets/testimonial/orga10.svg"
import orga11 from "../../../../assets/testimonial/orga11.svg"
import orga12 from "../../../../assets/testimonial/orga12.svg"
import Single_organizaton from "./Single_organizaton";
import { Link } from "react-router-dom";
function Organization() {
  return (
    <section>
      <div className="container">
        <div className="organization-title">
          <h2>Trusted and Backed by leading organization</h2>
        </div>
      </div>
      <div className="orga-images">
        <div className="row">
          <Single_organizaton src={orga1} />
          <Single_organizaton src={orga2} />
          <Single_organizaton src={orga3} />
          <Single_organizaton src={orga4} />
          <Single_organizaton src={orga5} />
          <Single_organizaton src={orga6} />
          <Single_organizaton src={orga7} />
          <Single_organizaton src={orga8} />
          <Single_organizaton src={orga9} />
          <Single_organizaton src={orga10} />
          <Single_organizaton src={orga11} />
          <Single_organizaton src={orga12} />
          <Single_organizaton src={orga1} />
          <Single_organizaton src={orga2} />
          <Single_organizaton src={orga3} />
          <Single_organizaton src={orga4} />
          <Single_organizaton src={orga5} />
          <Single_organizaton src={orga6} />
          <Single_organizaton src={orga7} />
          <Single_organizaton src={orga8} />
          <Single_organizaton src={orga9} />
          <Single_organizaton src={orga10} />
          <Single_organizaton src={orga11} />
          <Single_organizaton src={orga12} />
        </div>
      </div>
      <div className="loading-orga">
        <Link to="/" className="load-more">
          Load more
        </Link>
      </div>
    </section>
  );
}

export default Organization;

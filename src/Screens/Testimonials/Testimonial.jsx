import React from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Testimial_Hero from "./Components/Testimonial_Hero/Testimonial_Hero";
import Organization from "./Components/Organization/Organization";
import Global from "./Components/Global/Global";
import User_Stories from "./Components/User_stories/User_Stories";
import Metrics from "./Components/Metrics/Metrics";
import Workforce from "./Components/Workforce/Workforce";
import Footer from "../../Components/Footer/Footer";
function Testimonial() {
  return (
    <div className="testimonial__screen">
      <Topbar />
      <Navbar />
      <Testimial_Hero />
      <Organization />
      <Global />
      <User_Stories />
      <Metrics />
      <Workforce />
      <Footer />
    </div>
  );
}

export default Testimonial;

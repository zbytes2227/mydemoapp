import React, { useEffect } from "react";
import Aboutus from "./Aboutus";
import Contactus from "./Contactus";
import Footer from "./Footer";
import Login from "./Login";
import Navbar from "./Navbar";
import Services from "./Services";
import Signup from "./Signup";
import Slider from "./Slider";
import Updates from "./Updates";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Navbar />
      <Slider />
      <div className="top">
        <div className="animation" data-aos="fade-up">
          <Services />
        </div>
      </div>
      <div className="top">
        <div className="animation" data-aos="fade-up">
          <Aboutus />
        </div>
      </div>
      <Signup />
      <Login />
      <div className="top">
        <div className="animation" data-aos="fade-up">
          <Contactus />
        </div>
      </div>
      <div className="top">
        <div className="animation" data-aos="fade-up">
          <Updates />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;

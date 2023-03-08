import React from "react";
import Card from "./Card";

function Services() {
  return (
    <>
      <div className="mt-3">
        <h2 className="text-center display-5 fw-bold lh-1 my-4">
          Our Platform Services
        </h2>
        <div className="d-flex flex-row overflow-x-auto content-center-mobile" style={{ overflow: 'hidden' }}> 
          <div className="d-flex flex-row nowrap scrollmenu">
            <Card
              title="Graphic Design"
              desc="Our graphic designers are skilled at creating beautiful,  designs that capture your brand's personality and communicate your message."
              img="https://images.pexels.com/photos/2716895/pexels-photo-2716895.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <Card
              title="Content Writing"
              desc="Our team of writers can create high-quality, optimized content that helps you rank higher in search engines and engage your audience."
              img="https://images.pexels.com/photos/8837715/pexels-photo-8837715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Card
              title="Social Media"
              desc="We can help you build a strong presence on social media platforms like Facebook, Twitter, and LinkedIn. Our team of experts can do."
              img="https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Card
              title="Deployment"
              desc="Our team of writers can create high-quality, SEO-optimized content that helps you rank higher in search engines and engage your audience."
              img="https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;

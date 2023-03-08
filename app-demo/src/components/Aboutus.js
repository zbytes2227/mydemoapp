import React from "react";

function Aboutus() {
  return (
    <>
      <hr />
      {/* <section className="py-1 text-center container">
    <div className="row py-lg-5">
      <div className="col-lg-7 col-md-8 mx-auto">
        <h1 className='mb-4'>Why Choose us !</h1>
        <p className="lead text-muted">At our company, we specialize in creating top-notch web development and IoT solutions that are tailored to meet the unique needs of our clients. We understand that in today's fast-paced business environment, staying ahead of the competition requires innovation and the ability to leverage cutting-edge technology.</p>
        <p>
          <a href="/" className="btn btn-primary my-2 mx-1">Whatsapp</a>
          <a href="/" className="btn btn-secondary my-2 mx-1">Action Car</a>
        </p>
      </div>
    </div>
  </section> */}

      <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1">
            Sign up now for personalized content.
            </h1>
            <p className="lead">
            One of the most common problems faced by clients is the lack of technical expertise required to design and develop a website. For many clients, the process of creating a website can be overwhelming, especially when it comes to understanding the various technical aspects.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
                data-bs-toggle="modal"
                data-bs-target="#signupModal"
              >
                Sign up
              </button>

              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
              >
                Login
              </button>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img
              className="rounded-lg-3"
              src="./images/about-img.jpg"
              alt=""
              width="720"
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Aboutus;

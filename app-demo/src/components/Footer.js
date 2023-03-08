import React from "react";

function Footer() {
  return (
    <>
      <hr />
      <div className="container">
        <footer className="pt-5">
          <div className="row">
            <div className="col-6 col-md-2 mb-3 d-flex justify-content-center">
              <ul className="nav flex-column">
                <h5>Section 1</h5>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3 d-flex justify-content-center">
              <ul className="nav flex-column">
                <h5>Section 2</h5>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-5 offset-md-1 mb-3">
              <form className="container p-4">
                <h5>Subscribe to our newsletter</h5>
                <p>Stay in with our monthly roundup of the latest updates.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                  />
                  <button className="btn btn-primary" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-between pt-4 my-4 border-top">
            <p>© 2023 Company, Inc. All rights reserved.</p>
            <p>
              A demo Webiste design by
              <a href="/admin" className="text-decoration-none mx-2">
               Zbytes😉
              </a>
            </p>
            <p>All Images from Pexels...</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;

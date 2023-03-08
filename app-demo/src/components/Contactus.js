import React, { useState } from "react";

function Contactus() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const [msg, setmsg] = useState("");
  const [Loading, setLoading] = useState(false);

  async function submitApplication(e) {
    e.preventDefault();
    setLoading(true);
    const api_data = await fetch("/api/new/application", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: Name,
        email: Email,
        message: Message,
      }),
    });
    const data = await api_data.json();
    setmsg(data.msg);
    setLoading(false);
    if (data.success) {
      setEmail("");
      setName("");
      setMessage("");
    }
  }

  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-lg-start">
          <h1 className="display-4 text-center text-lg-start fw-bold lh-1 mb-2">
            Get in touch with us now !!
          </h1>
          <p className="col-lg-10 fs-4 lead">
            The contact us page on your website is where users can find
            information on how to get in touch with you or your business. It
            typically includes a form that visitors can fill out to send a
            message or inquire about your services.
          </p>
        </div>
        <div className="col-md-10 mx-auto col-lg-5">
          <form className="p-4 p-md-5 border rounded-3 bg-light">
            <div
              className={`alert alert-success alert-dismissible fade show ${
                msg ? "" : "visually-hidden"
              }`}
              role="alert"
            >
              {msg}
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
            <div className="form-floating mb-2">
              <input
                type="text"
                className="form-control"
                id="UserNameApplication"
                placeholder="name@example.com"
                required
                value={Name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="UserNameApplication">Your Name</label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="email"
                className="form-control"
                id="UserEmailApplication"
                placeholder="name@example.com"
                value={Email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="UserEmailApplication">Email address</label>
            </div>
            <div className="form-floating mb-2">
              <textarea
                className="form-control"
                id="floatingTextarea"
                placeholder="Type your message here"
                value={Message}
                required
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <label htmlFor="floatingTextarea">Message</label>
            </div>
            <button
              className="w-100 btn btn-lg btn-primary"
              type="submit"
              disabled={Loading ? true : false}
              onClick={(e) => submitApplication(e)}
            >
              Submit Chat
              <div
                className={`spinner-border spinner-border-sm m-1 ${
                  Loading ? "" : "visually-hidden"
                }`}
                role="status"
              />
            </button>
            <hr className="my-4" />
            <small className="text-muted">
              By clicking Submit Chat, you agree to the terms of use.
            </small>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contactus;

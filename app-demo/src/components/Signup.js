import React, { useState } from "react";

function Signup() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [msg, setmsg] = useState("");
  const [Pnumber, setPnumber] = useState("");
  const [Password, setPassword] = useState("");
  const [Loading, setLoading] = useState(false);

  async function registerUser(e) {
    e.preventDefault();
    setLoading(true);

    const api_data = await fetch("/api/register/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: Name,
        email: Email,
        phone: Pnumber,
        password: Password,
      }),
    });
    const data = await api_data.json();
    // console.log(data);
    setLoading(false);
    if (data.success) {
      setEmail('')
      setPassword('')
      setName('')
      setPnumber('')
    }
    setmsg(data.msg);
  }

  return (
    <>
      <div className="container-lg">
        <div
          className="modal fade"
          id="signupModal"
          tabIndex="-1"
          aria-labelledby="signupModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content rounded-4 shadow">
              <div className="modal-header p-5 pb-4 border-bottom-0">
                <h1 className="fw-bold mb-0 fs-2">Sign up for free</h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body p-5 pt-0">
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
                <form>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control rounded-3"
                      id="floatingName"
                      placeholder="Your name"
                      required
                      value={Name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="floatingName">Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control rounded-3"
                      id="emailUser"
                      value={Email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                    />
                    <label htmlFor="emailUser">Email address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="number"
                      className="form-control rounded-3"
                      id="floatingPNUmber"
                      placeholder="Phone Number"
                      value={Pnumber}
                      onChange={(e) => setPnumber(e.target.value)}
                      required
                    />
                    <label htmlFor="floatingPNUmber">Phone Number</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control rounded-3"
                      id="floatingPasswordUser"
                      placeholder="Password"
                      value={Password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <label htmlFor="floatingPasswordUser">Password</label>
                  </div>
                  <button
                    className="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
                    type="submit"
                    onClick={(e) => registerUser(e)}
                    disabled={Loading ? true : false}
                  >
                    Sign up
                    <div
                      className={`spinner-border spinner-border-sm m-1 ${
                        Loading ? "" : "visually-hidden"
                      }`}
                      role="status"
                    />
                  </button>
                  <small className="text-muted">
                    Already have an account? <a href="/login">Login</a>
                  </small>
                  <hr className="my-4" />
                  <h2 className="fs-5 fw-bold mb-3">Or use a third-party</h2>
                  <button
                    className="w-100 py-2 mb-2 btn btn-outline-dark rounded-3"
                    type="submit"
                  >
                    <svg className="bi me-1" width="16" height="16">
                      <use href="#twitter"></use>
                    </svg>
                    Sign up with Twitter
                  </button>
                  <button
                    className="w-100 py-2 mb-2 btn btn-outline-primary rounded-3"
                    type="submit"
                  >
                    <svg className="bi me-1" width="16" height="16">
                      <use href="#facebook"></use>
                    </svg>
                    Sign up with Facebook
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;

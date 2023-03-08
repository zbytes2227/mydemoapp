import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(false);
  const [EmailOrPhone, setEmailOrPhone] = useState("");
  const [Password, setPassword] = useState("");
  const [msg, setmsg] = useState("");

  async function loginUser(e) {
    e.preventDefault();
    setLoading(true);
    const api_data = await fetch("/api/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        emailorphone: EmailOrPhone,
        password: Password,
      }),
    });

    const data = await api_data.json();
    // console.log(data);
    setmsg(data.msg);
    setLoading(false);
    if (data.success) {
      setEmailOrPhone("");
      setPassword("");
      navigate("/");
      window.location.reload();
    }
  }

  return (
    <>
      <div className="container-lg">
        <div
          className="modal fade"
          id="loginModal"
          tabIndex="-1"
          aria-labelledby="loginModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content rounded-4 shadow">
              <div className="modal-header p-5 pb-4 border-bottom-0">
                <h1 className="fw-bold mb-0 fs-2">Log in to your account</h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body p-5 pt-0">
                <div
                  className={`alert alert-danger alert-dismissible fade show ${
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
                      type="email"
                      className="form-control rounded-3"
                      id="floatingInput"
                      placeholder="name@example.com"
                      value={EmailOrPhone}
                      onChange={(e) => setEmailOrPhone(e.target.value)}
                    />
                    <label htmlFor="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control rounded-3"
                      id="floatingPassword"
                      value={Password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="Password"
                    />
                    <label htmlFor="floatingPassword">Password</label>
                  </div>
                  <button
                    className="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
                    type="submit"
                    onClick={(e) => loginUser(e)}
                    disabled={Loading ? true : false}
                  >
                    Log in{" "}
                    <div
                      className={`spinner-border spinner-border-sm m-1 ${
                        Loading ? "" : "visually-hidden"
                      }`}
                      role="status"
                    />
                  </button>
                  <hr className="my-4" />
                  <h2 className="fs-5 fw-bold mb-3">
                    Or log in with a third-party
                  </h2>
                  <button
                    className="w-100 py-2 mb-2 btn btn-outline-dark rounded-3"
                    type="submit"
                  >
                    <svg className="bi me-1" width="16" height="16">
                      <use href="/"></use>
                    </svg>
                    Log in with Third Party
                  </button>
                  <button
                    className="w-100 py-2 mb-2 btn btn-outline-primary rounded-3"
                    type="submit"
                  >
                    <svg className="bi me-1" width="16" height="16">
                      <use href="/"></use>
                    </svg>
                    Log in with Facebook
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

export default Login;

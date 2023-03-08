import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import auth from "./Auth";

function Adminlogin() {
  async function authAdmin() {
    let data = await auth();
    if (data.user_valid) {
      window.location.href = "/admin/dashboard";
    }
  }

  useEffect(() => {
    authAdmin();
  }, []);

  const [userName, setuserName] = useState("");
  const [Password, setPassword] = useState("");
  const [Loading, setLoading] = useState(false);
  // const navigate = useNavigate();

  async function loginAdmin(e) {
    e.preventDefault();
    setLoading(true);

    const api_data = await fetch("/api/admin/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: userName,
        password: Password,
      }),
    });

    const data = await api_data.json();
    if (data.success) {
      window.location.reload();
    }
    setLoading(false);
  }

  return (
    <main className="form-signin w-80 m-auto container mt-3">
      <form className="d-flex flex-column justify-content-center align-items-center">
        <img
          className="mb-4 rounded-circle"
          src="https://images.pexels.com/photos/9180717/pexels-photo-9180717.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
          width="180"
          height="180"
        />
        <h1 className="h3 mb-3 fw-normal">ONLY ADMIN ⚠️</h1>

        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={userName}
            onChange={(e) => setuserName(e.target.value)}
            required
          />
          <label for="floatingInput">USER NAME</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control mt-2"
            id="floatingPassword"
            placeholder="Password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label for="floatingPassword">Password KEY</label>
          <button
            disabled={Loading ? true : false}
            className="w-100 btn btn-lg btn-primary mt-3"
            type="submit"
            onClick={(e) => loginAdmin(e)}
          >
            Sign in
            <div
              className={`spinner-border spinner-border-sm m-1 ${
                Loading ? "" : "visually-hidden"
              }`}
              role="status"
            />
          </button>
          <a href="/" className="w-100 btn btn-lg btn-danger mt-1">
            Back To Safety
          </a>
        </div>
      </form>
    </main>
  );
}

export default Adminlogin;

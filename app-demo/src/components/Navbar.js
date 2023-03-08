import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Btns from "./Comps/Btns";

function Navbar() {
  const [UserValid, setUserValid] = useState(false);
  const [userName, setuserName] = useState("");

  const navigate = useNavigate();

  async function dashboard() {
    async function getUserData() {
      const api_data = await fetch("/api/user/", {
        method: "POST",
      });
      const data = await api_data.json();
      setuserName(data.name);
    }

    const api_data = await fetch("/api/dashboard", {
      method: "POST",
    });

    const data = await api_data.json();
    if (data.user_valid) {
      setUserValid(true);
      getUserData();
    }
  }

  useEffect(() => {
    dashboard();
  });

  async function logoutUser(e) {
    e.preventDefault();
    const api_data = await fetch("/api/logout", {
      method: "POST",
    });
    const data = await api_data.json();
    console.log(data);
    navigate("/");
    window.location.reload();
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Demo Site 🔥
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>

          <div className="d-flex px-2 align-items-center">
            {UserValid ? "Hello, " + userName : <Btns />}
            {UserValid ? (
              <a
                href="/admin"
                className="btn btn-sm btn-danger mx-2"
                onClick={(e) => logoutUser(e)}
              >
                Logout
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import React, { useEffect } from "react";
import auth from "./Auth";

function Sidebar(props) {
  async function authAdmin() {
    let data = await auth();
    if (!data.user_valid) {
      window.location.href = "/admin/login-admin";
    }
  }

  useEffect(() => {
    authAdmin();
  }, []);

  async function logoutAdmin() {
    const api_data = await fetch("/api/admin/auth/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    const data = await api_data.json();
    if(data.success){
      window.location.reload();
    }
  }

  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 bg-light"
        style={{ width: "4.5rem", height: "100vh" }}
      >
        <div className="dropdown border-top">
          <a
            href="/"
            className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              className="bi bi-power"
              viewBox="0 0 16 16"
            >
              <path d="M7.5 1v7h1V1h-1z" />
              <path d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z" />
            </svg>
          </a>
          <ul className="dropdown-menu text-small shadow">
            <li>
              <button className="dropdown-item" onClick={(e) => logoutAdmin(e)}>
                Log out
              </button>
            </li>
          </ul>
        </div>

        <ul className="nav nav-pills mt-5 nav-flush flex-column mb-auto text-center">
          <li className="nav-item">
            <button
              className={`nav-link py-3 border-bottom rounded-0 ${
                props.activeSection === "HOME" ? "active" : ""
              }`}
              onClick={() => props.handleButtonClick("HOME")}
              aria-current="page"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              aria-label="Home"
              data-bs-original-title="Home"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-house-door-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
              </svg>
            </button>
          </li>
          {/* <li>
            <button
              className={`nav-link py-3 border-bottom rounded-0 ${
                props.activeSection === "DASHBOARD" ? "active" : ""
              }`}
              onClick={() => props.handleButtonClick("DASHBOARD")}
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              aria-label="Dashboard"
              data-bs-original-title="Dashboard"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-person-lines-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
              </svg>
            </button>
          </li> */}
          <li>
            <button
              className={`nav-link py-3 border-bottom rounded-0 ${
                props.activeSection === "CONTACTS" ? "active" : ""
              }`}
              onClick={() => props.handleButtonClick("CONTACTS")}
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              aria-label="Orders"
              data-bs-original-title="Orders"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-people-fill"
                viewBox="0 0 16 16"
              >
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
              </svg>
            </button>
          </li>
          <li>
            <button
              className={`nav-link py-3 border-bottom rounded-0 ${
                props.activeSection === "APPLICATION" ? "active" : ""
              }`}
              onClick={() => props.handleButtonClick("APPLICATION")}
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              aria-label="Products"
              data-bs-original-title="Products"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-envelope-fill"
                viewBox="0 0 16 16"
              >
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
              </svg>
            </button>
          </li>
          <li>
            <button
              className={`nav-link py-3 border-bottom rounded-0 ${
                props.activeSection === "UPDATES" ? "active" : ""
              }`}
              onClick={() => props.handleButtonClick("UPDATES")}
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              aria-label="Customers"
              data-bs-original-title="Customers"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-card-list"
                viewBox="0 0 16 16"
              >
                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;

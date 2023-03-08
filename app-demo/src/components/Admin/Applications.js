import React, { useEffect, useState } from "react";
import Applicationcard from "./Applicationcard";
import auth from "./Auth";

function Applications() {
  async function authAdmin() {
    let data = await auth();
    if (!data.user_valid) {
      window.location.href = "/admin/login-admin";
    }
  }

  useEffect(() => {
    authAdmin();
  }, []);

  const [Loading, setLoading] = useState(false);
  const [Applications, setApplications] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredApplications = Applications.filter((application) => {
    const nameMatch = application.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const emailMatch = application.email
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return nameMatch || emailMatch;
  });

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  async function getApplications() {
    setLoading(true);
    const api_data = await fetch("/api/admin/applications", {
      method: "GET",
    });

    const data = await api_data.json();
    setApplications(data);
    setLoading(false);
  }

  useEffect(() => {
    getApplications();
  }, []);

  return (
    <div className="container">
      <div className="mx-auto" style={{ maxWidth: "500px" }}>
        <h2 className="text-center my-2">APPLICATIONS</h2>
        <form className="d-flex mb-4">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search Applications"
            aria-label="Search"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </form>
      </div>
      {filteredApplications.map((application) => (
        <Applicationcard application={application} key={application._id} />
      ))}
      <div className="d-flex justify-content-center">
      <div
        className={`spinner-border spinner-border-sm m-1 ${
          Loading ? "" : "visually-hidden"
        }`}
        style={{ width: "2rem", height: "2rem" }}
        role="status"
        />
        </div>
    </div>
  );
}

export default Applications;

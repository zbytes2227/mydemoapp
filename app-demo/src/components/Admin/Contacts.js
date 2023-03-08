import React, { useEffect, useState } from "react";
import Contactcard from "../Comps/Contactcard";
import auth from "./Auth";

function Contacts() {
  const [Loading, setLoading] = useState(false);

  async function authAdmin() {
    let data = await auth();
    if (!data.user_valid) {
      window.location.href = "/admin/login-admin";
    }
  }

  useEffect(() => {
    authAdmin();
  }, []);

  const [Users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  async function getContacts() {
    setLoading(true);
    const api_data = await fetch("/api/admin/contacts", {
      method: "GET",
    });

    const data = await api_data.json();
    setLoading(false);
    setUsers(data);
  }

  useEffect(() => {
    getContacts();
  }, []);

  const filteredUsers = Users.filter((user) => {
    const nameMatch = user.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const phoneMatch = user.phone
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const emailMatch = user.email
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return nameMatch || phoneMatch || emailMatch;
  });

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="mx-auto" style={{ maxWidth: "500px" }}>
          <h3 className="text-center my-2">USER DATABASE</h3>
          <form className="d-flex mb-4">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search Users"
              aria-label="Search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </form>
        </div>

        {/* <div className="border p-2 rounded">
          <button type="button" className="btn btn-success btn-sm mx-2">
            Select All
          </button>
          <button type="button" className="btn btn-success btn-sm mx-2">
            Select All
          </button>
          <button type="button" className="btn btn-success btn-sm mx-2">
            Select All
          </button>
          <button type="button" className="btn btn-success btn-sm mx-2">
            Select All
          </button>
        </div> */}

        <div className="border my-2 rounded p-2 d-flex justify-content-center flex-wrap">
          {filteredUsers.map((user) => (
            <div className="col-md-4" key={user._id}>
              <Contactcard user={user}  />
            </div>
          ))}
          <div
            className={`spinner-border spinner-border-sm m-1 ${
              Loading ? "" : "visually-hidden"
            }`}
            style={{ width: "2rem", height: "2rem" }}
            role="status"
          />
        </div>
      </div>
    </>
  );
}

export default Contacts;

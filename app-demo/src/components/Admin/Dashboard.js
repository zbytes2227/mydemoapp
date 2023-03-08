import React, { useState, useEffect } from "react";
import Applications from "./Applications";
import Contacts from "./Contacts";
import Sidebar from "./Sidebar";
import Updates from "./Updates";
import auth from "./Auth";
import Home from "./Home";

function Dashboard() {
  async function authAdmin() {
    let data = await auth();
    if (!data.user_valid) {
      window.location.href = "/admin/login-admin";
    }
  }

  useEffect(() => {
    authAdmin();
  }, []);

  const [activeSection, setActiveSection] = useState("HOME");

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  let updates = <Updates />;
  let contacts = <Contacts />;
  let applications = <Applications />;
  let home = <Home />

  return (
    <>
      <div className="d-flex">
        <Sidebar
          activeSection={activeSection}
          handleButtonClick={handleButtonClick}
        />
        {activeSection === "UPDATES" ? updates : ""}
        {activeSection === "CONTACTS" ? contacts : ""}
        {activeSection === "APPLICATION" ? applications : ""}
        {activeSection === "HOME" ? home : ""}
      </div>
    </>
  );
}

export default Dashboard;

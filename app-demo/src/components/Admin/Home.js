import React from "react";
import Homecards from "../Comps/Homecards";

function Home() {
  return (
    <div className="container text-center mt-3">
      <h1 className="mb-3">Admin Dashboard 📈</h1>
      <div className="row row-cols-2">
        <Homecards name={"Contacts"} value={646}/>
        <Homecards name={"Errors"} value={8}/>
        <Homecards name={"Users"} value={51}/>
        <Homecards name={"Applications"} value={45}/>
      </div>
    </div>
  );
}

export default Home;

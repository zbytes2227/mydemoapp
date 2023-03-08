import React, { useEffect } from "react";
import auth from "./Auth"

function Admin() {
  
  async function authAdmin(){
    let data = await auth()
    console.log(data);
    if (!data.user_valid) {
      window.location.href = "/admin/login-admin";
    } else {
      window.location.href = "/admin/dashboard";
    }
  }
  
  useEffect(() => {
   authAdmin();
  }, [])
  

  return <></>;
}

export default Admin;

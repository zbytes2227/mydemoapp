import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contactus from "./components/Contactus";
import Navbar from "./components/Navbar";
import Admin from "./components/Admin/Admin";
import Adminlogin from "./components/Admin/Adminlogin";
import Dashboard from "./components/Admin/Dashboard";



function App() {
  return (
 
  
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={[<Navbar/>, <Contactus />]} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/login-admin" element={<Adminlogin />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>


  );
}

export default App;

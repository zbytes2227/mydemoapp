import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contactus from "./components/Contactus";
import Navbar from "./components/Navbar";
import Admin from "./components/Admin/Admin";
import Adminlogin from "./components/Admin/Adminlogin";
import Dashboard from "./components/Admin/Dashboard";

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(55);

  useEffect(() => {
    setInterval(() => {
      if (!progress === 90) {
        setProgress(progress + 15);
      }
    }, 550);

    window.addEventListener("load", () => {
      setLoading(false);
    });
    console.log(loading);
  }, [progress, loading]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={[<Navbar />, <Contactus />]} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/login-admin" element={<Adminlogin />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

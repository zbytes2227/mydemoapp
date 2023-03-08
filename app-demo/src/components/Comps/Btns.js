import React from "react";

function Btns() {
  return (
    <>
      <button
        type="button"
        className="btn btn-outline-success mx-2"
        data-bs-toggle="modal"
        data-bs-target="#loginModal"
      >
        Login
      </button>

      <button
        type="button"
        className="btn btn-success mx-2"
        data-bs-toggle="modal"
        data-bs-target="#signupModal"
      >
        Signup
      </button>
    </>
  );
}

export default Btns;

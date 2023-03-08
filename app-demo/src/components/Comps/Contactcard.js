import React from "react";

function Contactcard(props) {


  return (
    <div className="border align-items-center rounded d-flex m-1">
      <div
        className="rounded d-flex align-items-center m-1 px-1"
        style={{ maxHeight: "60%" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="42"
          fill="currentColor"
          className="bi bi-person-circle"
          viewBox="0 0 16 16"
        >
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path
            fillRule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
          />
        </svg>
      </div>

      <div className="p-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value={props.user._id}
            id={props.user._id}
            style={{ transform: "scale(1.15)" }}
          />
          <label className="form-check-label" htmlFor={props.user._id}>
            Select
          </label>
        </div>
        <p className="mb-0">Name: {props.user.name}</p>
        <p className="mb-0">Email: {props.user.email}</p>
        <p className="mb-0">Phone: {props.user.phone}</p>

        <button type="button" className="btn btn-sm btn-danger">
          Msg
        </button>
        <button type="button" className="btn btn-sm mx-1 btn-warning">
          Edit
        </button>
        <button type="button" className="btn btn-sm btn-info">
          Card
        </button>
      </div>
    </div>
  );
}

export default Contactcard;

import React, { useState, useEffect } from "react";
import auth from "./Auth";

function Updates() {
  async function authAdmin() {
    let data = await auth();
    if (!data.user_valid) {
      window.location.href = "/admin/login-admin";
    }
  }

  useEffect(() => {
    authAdmin();
  }, []);

  const [link, setLink] = useState(false);
  const [title, settitle] = useState("");
  const [Src, setSrc] = useState("");
  const [msg, setmsg] = useState("");

  const handleCheckboxChange = (event) => {
    setLink(event.target.checked);
    console.log(title);
    console.log(Src);
  };

  async function saveUpdate(e) {
    e.preventDefault();

    const api_data = await fetch("/api/admin/notice", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        update_title: title,
        update_link: link,
        update_src: Src,
      }),
    });

    const data = await api_data.json();
    console.log(data);
    setmsg(data.msg);
  }

  const [notices, setNotices] = useState([]);
  const [Loading, setLoading] = useState(false);

  async function getUpdates() {
    setLoading(true);
    const api_data = await fetch("/api/admin/notice", {
      method: "GET",
    });

    const data = await api_data.json();
    setLoading(false);
    setNotices(data);
  }

  async function deleteUpdate(_id) {
    const api_data = await fetch("/api/admin/notice", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        update_id: _id,
      }),
    });

    const data = await api_data.json();
    console.log(data);
  }

  useEffect(() => {
    getUpdates();
  }, []);

  return (
    <>
      <div className="container my-3 d-flex flex-row flex-wrap justify-content-center row">
        {/* <h4 className="text-center">Add or Remove Notices</h4><hr/> */}
        <form
          className="border p-4 m-2 rounded col"
          onSubmit={(e) => saveUpdate(e)}
        >
          <h4 className="text-center">Enter new Update!</h4>
          <div
            className={`alert alert-danger alert-dismissible fade show ${
              msg ? "" : "visually-hidden"
            }`}
            role="alert"
          >
            {msg}
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleTextarea" className="form-label">
              Enter your Update
            </label>
            <textarea
              className="form-control"
              id="exampleTextarea"
              rows="6"
              value={title}
              onChange={(e) => {
                settitle(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              checked={link}
              onChange={handleCheckboxChange}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Add a link
            </label>
          </div>
          {link && (
            <div className="mb-3">
              <label htmlFor="exampleLink" className="form-label">
                Enter the link
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleLink"
                value={Src}
                onChange={(e) => {
                  setSrc(e.target.value);
                }}
              />
            </div>
          )}
          <button type="submit" className="btn btn-primary">
            Publish
          </button>
        </form>

        <div className="border m-2 p-4 rounded col">
          <h4 className="text-center">Published Updates</h4>
          <div className="d-flex justify-content-center">
            <div
              className={`spinner-border spinner-border-sm m-1 ${
                Loading ? "" : "visually-hidden"
              }`}
              style={{ width: "2rem", height: "2rem" }}
              role="status"
            />
          </div>
          {notices.map((notice, index) => (
            <div
              className="alert alert-success alert-dismissible fade show"
              role="alert"
              key={index}
            >
              {notice.title}
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
                onClick={(e) => deleteUpdate(notice._id)}
              ></button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Updates;

import React, { useState, useEffect } from "react";

function Updates() {
  const [notices, setNotices] = useState([]);
  const [Loading, setLoading] = useState(false);

  async function getUpdates() {
    setLoading(true);
    const api_data = await fetch("/api/updates", {
      method: "GET",
    });

    const data = await api_data.json();
    setLoading(false);
    setNotices(data);
  }

  useEffect(() => {
    getUpdates();
  }, []);

  return (
    <>
      <hr />
      <div className="container my-5 rounded-3 border shadow-lg py-5">
        <h2 className="text-center display-6 fw-bold lh-1 mb-4">
          Updates & Notices
        </h2>
        <div
          className="container border rounded mx-auto py-2 px-4"
          style={{ maxWidth: "700px", overflowY: "auto", height: "250px" }}
        >
          <div className="d-flex justify-content-center">
            <div
              className={`spinner-border mt-5 ${
                Loading ? "" : "visually-hidden"
              }`}
              role="status"
              style={{ width: "3rem", height: "3rem" }}
            />
          </div>
          {notices.map((notice, index) =>
            notice.link ? (
              <a
                href={notice.src}
                key={index}
                className="text-left border-top pt-1 d-block my-1"
                style={{ textDecoration: "none" }}
              >
                {notice.title}
              </a>
            ) : (
              <p
                key={index}
                className="text-left border-top pt-1 d-block my-1"
                style={{ color: "black", textDecoration: "none" }}
              >
                {notice.title}
              </p>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default Updates;

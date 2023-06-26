import React from "react";

export default function Error({ error }) {
  return (
    <div>
      <div
        className="alert alert-danger"
        role="alert"
        style={{ marginTop: "30px" }}
      >
        {error}
      </div>
    </div>
  );
}

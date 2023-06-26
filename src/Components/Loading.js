import React from "react";

export default function Loading() {
  return (
    <div>
      <div
        className="spinner-border text-info"
        role="status"
        style={{ height: "80px", width: "80px", marginTop: "220px" }}
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

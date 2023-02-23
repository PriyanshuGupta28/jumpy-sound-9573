import React from "react";
import "./LoadingBar.css";

const LoadingBar = () => {
  return (
    <div
      className="loader"
      style={{
        width: "80%",
        marginTop: "100px",
      }}
    >
      <span class="loader-text">loading</span>
      <span class="load"></span>
    </div>
  );
};

export default LoadingBar;

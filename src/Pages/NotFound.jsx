import React from "react";
import NotFoundLoading from "./NotFoundLoading";

const NotFound = () => {
  return (
    <div style={{ height: "40rem", backgroundColor: "black", color: "white" }}>
      <h1 style={{ fontFamily: "cursive", fontSize: "50px" }}>
        Page Not Found
      </h1>
      <NotFoundLoading />
    </div>
  );
};

export default NotFound;

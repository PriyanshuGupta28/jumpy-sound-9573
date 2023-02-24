import React from "react";
import "./LoadingBar.css";
import { Box } from "@chakra-ui/react";

const LoadingBar = () => {
  return (
    <Box
      className="loader"
      style={{
        width: "80%",
        marginTop: "100px",
      }}
    >
      <span className="loader-text">loading</span>
      <span className="load"></span>
    </Box>
  );
};

export default LoadingBar;

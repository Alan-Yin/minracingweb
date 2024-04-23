import logo from "../asset/image/carview.jpg";

import "../App.css";
import { Button, Flex, Input } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Playing() {
  const navigate = useNavigate();

  return (
    <div
      className="App"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={logo} style={{ height: "100vh" }} alt="logo" />
    </div>
  );
}

export default Playing;

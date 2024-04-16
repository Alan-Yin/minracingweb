import logo from "../asset/image/cover.png";
import InvitationCode from "../asset/image/icon-Invitation.svg";
import GoogleIcon from "../asset/image/icon-google.svg";
import FBIcon from "../asset/image/icon-fb.svg";

import "../App.css";
import { Button, Flex, Input } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();

  const [code, setCode] = useState("");

  const enter = () => {
    console.log(code);
    if (code === "minRacing") {
      navigate("/trackList");
    } else {
      alert("Wrong Code");
    }
  };

  return (
    <div className="App">
      <img src={logo} style={{ height: "100vh" }} alt="logo" />
      <div
        style={{ marginLeft: 150, justifyContent: "center" }}
        className="loginform"
      >
        <p className="title" style={{ fontFamily: "Inter", fontSize: 50 }}>
          Min Racing
        </p>
        <div className="enterInvitation">
          <img className="invitationCode" src={InvitationCode} alt="" />
          <p style={{ marginLeft: 10 }}>Enter Invitation Code</p>
        </div>

        <Flex vertical gap={12}>
          <Input
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
            }}
            onPressEnter={enter}
            placeholder=""
            style={{
              fontFamily: "Inter",
              backgroundColor: "transparent",
              borderColor: "white",
              borderWidth: 3,
              borderRadius: 15,
              height: 50,
              color: "white",
              fontSize: 20,
            }}
          />
          <Button
            type="primary"
            style={{
              height: 50,
              borderRadius: 15,
              backgroundColor: "#757575",
              color: "white",
              fontFamily: "Inter",
              fontSize: 14.4,
              marginTop: 50,
            }}
          >
            Sign Up
          </Button>
          <Button
            type="primary"
            style={{
              height: 50,
              borderRadius: 15,
              backgroundColor: "white",
              color: "#757575",
              fontFamily: "Inter",
              fontSize: 14.4,
            }}
          >
            Log in
          </Button>

          <p
            className="title"
            style={{
              fontFamily: "Inter",
              fontSize: 25,
              marginTop: 50,
              marginBottom: 0,
            }}
          >
            ——— Or log in with ———
          </p>
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <img className="icon" src={GoogleIcon} alt="" />
            <img className="icon" src={FBIcon} alt="" />
          </div>
        </Flex>
      </div>
    </div>
  );
}

export default Home;

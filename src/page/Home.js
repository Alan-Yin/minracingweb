import logo from "../asset/image/cover.png";
import InvitationCode from "../asset/image/icon-Invitation.svg";
import GoogleIcon from "../asset/image/icon-google.svg";
import FBIcon from "../asset/image/icon-fb.svg";

import "../App.css";
import { Button, Flex, Input } from "antd";

function Home() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div
        style={{ marginLeft: 50, justifyContent: "center" }}
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
            placeholder="Outlined"
            style={{
              backgroundColor: "transparent",
              borderColor: "white",
              borderWidth: 3,
              borderRadius: 15,
              height: 50,
              color: "white",
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

import logo from "../asset/image/cover.png";
import InvitationCode from "../asset/image/icon-Invitation.svg";
import GoogleIcon from "../asset/image/icon-google.svg";
import FBIcon from "../asset/image/icon-fb.svg";
import Return from "../asset/image/icon-return.svg";
import SpectatorD from "../asset/image/icon-Spectator-D.svg";
import FlagD from "../asset/image/icon-race flag-D.svg";
import Setting from "../asset/image/icon-setting.svg";

import "../App.css";
import { Button, Flex, Input } from "antd";
import Track from "../components/Track";
import { useState } from "react";

function TrackList() {
  const [type, setType] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#333333",
      }}
    >
      <div
        style={{
          height: "10vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          border: "2px solid #272727",
          borderTopWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
        }}
      >
        <img
          src={Return}
          style={{
            height: 20,
            width: 20,
            border: "2px solid white",
            borderRadius: 25,
            padding: 10,
            borderWidth: 1,
            borderColor: "white",
          }}
        />
        <div
          style={{
            borderRadius: 25,
            backgroundColor: "#181818",
            padding: 10,
          }}
        >
          <p style={{ margin: 0, color: "white" }}>Select TrackList</p>
        </div>
        <div style={{ display: "flex" }}>
          <div
            style={{
              border: "2px solid white",
              borderRadius: 25,
              width: 125,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                borderRadius: 25,
                backgroundColor: "white",
                padding: 10,
                width: 50,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* <SpectatorD /> */}
              <img
                src={SpectatorD}
                style={{
                  height: 20,
                  width: 20,
                  borderWidth: 1,
                  borderColor: "white",
                }}
              />
            </div>
            <div
              style={{
                borderRadius: 25,
                backgroundColor: "white",
                padding: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 50,
              }}
            >
              <img
                src={FlagD}
                style={{
                  height: 20,
                  width: 20,
                  color: "black",
                  borderWidth: 1,
                  borderColor: "white",
                }}
              />
            </div>
          </div>
          <img
            src={Setting}
            style={{
              height: 20,
              width: 20,
              marginLeft: 20,
              borderRadius: 25,
              padding: 10,
              borderColor: "white",
            }}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          paddingLeft: 600,
          paddingRight: 300,
          flexWrap: "wrap",
        }}
      >
        <Track />
        <Track />
        <Track />
        <Track /> <Track /> <Track /> <Track /> <Track /> <Track /> <Track />
      </div>
    </div>
  );
}

export default TrackList;

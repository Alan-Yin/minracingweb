import CarView from "../asset/image/carview.jpg";
import Return from "../asset/image/icon-return.svg";

import "../App.css";
import { useState } from "react";
import Camera from "../components/Camera";

function Spectator() {
  const [type, setType] = useState(0);

  const containerStyle = {
    width: "100%",
    height: 100,
    overflow: "auto",
    border: "1px solid #40a9ff",
  };
  const items = [...Array(10)].map((val, i) => `Item ${i}`);

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        backgroundColor: "#333333",
      }}
    >
      <div
        style={{
          display: "flex",
          flex: 4,
          flexDirection: "column",
          paddingLeft: 150,
        }}
      >
        <div
          style={{
            height: "10vh",
            display: "flex",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
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
                margin: 20,
              }}
            />
            <p style={{ fontSize: 38 }}>Car04 - John</p>
          </div>
        </div>
        <div style={{ marginLeft: 70 }}>
          <img
            src={CarView}
            style={{
              height: 648,
              width: 1152,
              borderRadius: 25,
            }}
          />
        </div>
        <div
          style={{
            marginTop: 30,
            marginLeft: 70,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: 1152,
            }}
          >
            <div style={{ flex: 1 }}>
              <img
                src={CarView}
                style={{
                  height: 96,
                  width: 208,
                  borderRadius: 12,
                }}
              />
            </div>
            <p style={{ fontSize: 38 }}>time left： 00:05:29</p>
          </div>
        </div>
      </div>
      <div
        style={{ width: 5, height: "100vh", backgroundColor: "#181818" }}
      ></div>
      <div style={{ flex: 1, paddingLeft: 50 }}>
        <div
          className="container"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div
            style={{
              height: "10vh",
              alignItems: "center",
              display: "flex",
            }}
          >
            <p style={{ fontSize: 38 }}>RC car camera</p>
          </div>
          <div
            className="center-col"
            style={{ display: "flex", marginRight: 70, paddingRight: 20 }}
          >
            <ul style={{ paddingInlineStart: 0 }}>
              {items.map((item, i) => (
                <Camera />
              ))}
            </ul>
          </div>
        </div>
        <div
          className="container"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div
            style={{
              height: "10vh",
              alignItems: "center",
              display: "flex",
            }}
          >
            <p style={{ fontSize: 38 }}>Site camera</p>
          </div>
          <div
            className="center-col"
            style={{ display: "flex", marginRight: 70, paddingRight: 20 }}
          >
            <ul style={{ paddingInlineStart: 0 }}>
              {items.map((item, i) => (
                <Camera />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Spectator;

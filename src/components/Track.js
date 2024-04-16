import People from "../asset/image/icon-people.svg";
import Time from "../asset/image/icon-time.svg";
import "../App.css";
import { Button, Flex, Input } from "antd";

function Track() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        margin: 30,
        marginBottom: 0,
      }}
    >
      <div
        style={{
          width: 200,
          height: 200,
          backgroundColor: "white",
          borderRadius: 25,
        }}
      ></div>
      <p>Track Name</p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={People}
          style={{
            height: 20,
            width: 20,
            marginLeft: 20,
            borderRadius: 25,
            paddingRight: 10,
            borderColor: "white",
          }}
        />
        <p style={{ margin: 0 }}>00/00</p>
        <img
          src={Time}
          style={{
            height: 20,
            width: 20,
            marginLeft: 20,
            borderRadius: 25,
            padding: 10,
            borderColor: "white",
          }}
        />
        <p style={{ margin: 0 }}>00/00</p>
      </div>
    </div>
  );
}

export default Track;

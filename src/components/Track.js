import People from "../asset/image/icon-people.svg";
import Time from "../asset/image/icon-time.svg";
import "../App.css";
import { Button, Flex, Input } from "antd";
import { useNavigate } from "react-router-dom";

const Track = (props) => {
  const navigate = useNavigate();
  const { type } = props;
  const onClick = () => {
    if (type === 0) {
      navigate("/playing");
    } else {
      navigate("/spectator");
    }
  };

  return (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "space-between",
        justifyContent: "space-between",
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
      <p style={{ textAlign: "center" }}>Track Name</p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img
          src={People}
          style={{
            height: 20,
            width: 20,

            borderRadius: 25,

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

            borderColor: "white",
          }}
        />
        <p style={{ margin: 0 }}>00/00</p>
      </div>
    </div>
  );
};

export default Track;

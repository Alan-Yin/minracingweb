import People from "../asset/image/icon-people.svg";
import Time from "../asset/image/icon-time.svg";
import "../App.css";
import { Button, Flex, Input } from "antd";
import { useNavigate } from "react-router-dom";

const Camera = (props) => {
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
        justifyContent: "center",
        flexDirection: "column",

        marginBottom: 0,
      }}
    >
      <div
        style={{
          width: 295,
          height: 166,
          backgroundColor: "white",
          borderRadius: 25,
        }}
      ></div>
      <p
        style={{
          fontSize: 22,
          color: "#6F6F6F",
          marginTop: 10,
          marginBottom: 20,
        }}
      >
        Camera Name
      </p>
    </div>
  );
};

export default Camera;

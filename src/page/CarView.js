import logo from "../asset/image/cover.png";
import InvitationCode from "../asset/image/icon-Invitation.svg";
import "../App.css";

const CarView = () => {
  const [client, setClient] = useState(null);

  const mqttConnect = (host, mqttOption) => {
    setConnectStatus("Connecting");
    setClient(mqtt.connect(host, mqttOption));
  };

  useEffect(() => {
    if (client) {
      console.log(client);
      client.on("connect", () => {
        setConnectStatus("Connected");
      });
      client.on("error", (err) => {
        console.error("Connection error: ", err);
        client.end();
      });
      client.on("reconnect", () => {
        setConnectStatus("Reconnecting");
      });
      client.on("message", (topic, message) => {
        const payload = { topic, message: message.toString() };
        setPayload(payload);
      });
    }
  }, [client]);

  const mqttSub = (subscription) => {
    if (client) {
      const { topic, qos } = subscription;
      client.subscribe(topic, { qos }, (error) => {
        if (error) {
          console.log("Subscribe to topics error", error);
          return;
        }
        setIsSub(true);
      });
    }
  };

  const mqttUnSub = (subscription) => {
    if (client) {
      const { topic } = subscription;
      client.unsubscribe(topic, (error) => {
        if (error) {
          console.log("Unsubscribe error", error);
          return;
        }
        setIsSub(false);
      });
    }
  };

  const mqttPublish = (context) => {
    if (client) {
      const { topic, qos, payload } = context;
      client.publish(topic, payload, { qos }, (error) => {
        if (error) {
          console.log("Publish error: ", error);
        }
      });
    }
  };

  const mqttDisconnect = () => {
    if (client) {
      client.end(() => {
        setConnectStatus("Connect");
      });
    }
  };

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="loginform">
        <h1 className="title">Min Racing</h1>
        <div className="enterInvitation">
          <img className="invitationCode" src={InvitationCode} alt="" />
          <p style={{ marginLeft: 10 }}>Enter Invitation Code</p>
        </div>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <input
            style={{
              borderRadius: 5,
              borderWidth: 5,
              backgroundColor: "transparent",
              borderColor: "white",
              minHeight: 20,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CarView;

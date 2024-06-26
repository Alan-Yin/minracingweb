import logo from "./logo.svg";
import "./App.css";
import HookMqtt from "./components/Hook/";
import Home from "./page/Home";

function App() {
  return (
    <div className="App">
      {/* <HookMqtt /> */}
      <Home />
    </div>
  );
}

// function App() {
//   return <HookMqtt />;
// }

export default App;

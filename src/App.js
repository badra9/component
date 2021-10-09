//import { Button, Container } from "react-bootstrap";
//import "./App.css";
import imageSrc from "./images/imageSrc.png";

//import CurrencyConvert from "./components/currencyConvert/CurrencyConvert";

function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">Your name here</h1>

        <br />

        <img alt="" src={imageSrc} />

        <br />

        <img alt="" src="/images/imagePub.png" />
      </div>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/-7pJ45oXuvE"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
}

export default App;

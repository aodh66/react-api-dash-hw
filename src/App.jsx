import { useState } from "react";
import Header from "./components/Header";
import Weather from "./components/Weather";
import DateModule from "./components/DateModule";
import Warframe from "./components/Warframe";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <DateModule />
        <div className="two-column">
          <Weather />
          <Warframe />
        </div>
      </main>
    </>
  );
}

export default App;

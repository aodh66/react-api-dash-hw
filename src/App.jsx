import Header from "./components/Header";
import Weather from "./components/Weather";
import DateModule from "./components/DateModule";
import Warframe from "./components/Warframe";
import "./App.css";

function App() {
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

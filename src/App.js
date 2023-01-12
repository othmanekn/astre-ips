import "./App.css";
import Header from "./components/Header";
import SliderList from "./components/SliderList";

function App() {
  return (
    <div className="App">
      <Header title="Astre-ips calculator" />
      <section className="description-section">
        <p>
          This website allows to choose the coefficient for each topic using the
          correspondent slider, once you are done you can click on the calculate
          button to download the result.
        </p>
      </section>
      <SliderList />
    </div>
  );
}

export default App;

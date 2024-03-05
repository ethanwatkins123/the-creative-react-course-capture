// global style
import GlobalStyle from "./components/GlobalStyle";
// import pages
import AboutUs from "./pages/AboutUs";
import "./App.css";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AboutUs />
    </div>
  );
}

export default App;

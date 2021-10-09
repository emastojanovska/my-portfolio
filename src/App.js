import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js"
import Navbar from "./components/nav-bar/nav-bar.components";
import Header from "./components/header/header.component";

function App() {
  return (
    <>
    <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f542a7"
              }
            }
          }
        }}
      />
      <Navbar />
      <Header />
    </>
  );
}

export default App;
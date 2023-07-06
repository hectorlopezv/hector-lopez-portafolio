import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Background from "./components/background/Background";
import Nav from "./components/nav/Nav";
import PlayerStasts from "./components/playerStats/PlayerStasts";
import AppWrapper from "./AppWrapper";
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Background />
        <AppWrapper />
        <PlayerStasts />
      </Router>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Head from "./Components/Head"
import About from "./Components/About"
import BSTC from "./Components/BSTC"
import Contact from "./Components/Contact"
import Video from "./Components/Video";
import Vaccination from './Components/Vaccination';
import Events from './Components/eventWinners';
import Games from "./Components/Games";
import Team from "./Components/Team";
import Cricket from "./Components/Cricket";


function App() {
  return (
    <div className="App">
      <Contact />
      <Head />
      <About />
      <Video />
      <Vaccination />
      <BSTC />
      <Events />
      <Cricket />
      <Games />
      <Team />
    </div>
  );
}

export default App;

import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Landing from './Components/Landing/Landing'
import About from './Components/about/about'
import Agenda from './Components/agenda/agenda'
import Council from './Components/Council/Council'
import Schedule from './Components/schedule/schedule'
import Footer from './Components/Footer/Footer';
import Gallery from './Components/Gallery/Gallery';
import ExecutiveBoard from './Components/ExecutiveBoard/ExecutiveBoard';


function App() {
  return (
    <>
        <Navbar/>
        <Landing/>
        <About/>
        <Agenda/>
        <Council/>
        <Schedule/>
        <Gallery/>
        <ExecutiveBoard/>
        <Footer/>
    </>
  );
}

export default App;

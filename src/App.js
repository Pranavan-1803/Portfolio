import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Navbar from './Components/Navbar';
import Greetings from './Components/Greetings';
import Skills from './Components/Skills';
import Experince from './Components/Experince';
import Proficiency from './Components/Proficiency';
import Education from './Components/Education';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
    <Router>
    <div>
    <Navbar />
    <Greetings />
    <Skills />
    <Proficiency />
    <Experince />
    <Education />
    <Projects />
    <Contact />
    </div>
    </Router>
  );
}

export default App;

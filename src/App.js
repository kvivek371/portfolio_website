import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Projects from './Components/Projects/Projects';
import Technology from'./Components/Technology/Technology';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav />
      <About />              
      <Projects />
      <Technology />
      <Contact />  
    </div>
  );
}

export default App;

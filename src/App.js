import './App.css';
import { Banner } from './components/Banner';
import {NavBar} from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Skills } from './components/Skills';
 import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { About } from './components/About';
// import { Experience } from './components/Experience';



 



function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <About/>
      {/* <Experience/> */}
      <Skills/>
      <Projects/>
       <Contact/> 
      <Footer/>
      
     
      

    </div>
  );
}

export default App;

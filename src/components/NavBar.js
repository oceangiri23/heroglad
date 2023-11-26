import { useState, useEffect } from 'react';
import {Navbar, Container, Nav}from 'react-bootstrap';
import logo from '../assets/img/download.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';
import { Sidebar } from '../components/Sidebar';



 
 

export const NavBar = () => {
const [activeLink, setActiveLink]=useState("home");
const [scrolled, seScrolled] = useState(false);

useEffect(() => {
const onScroll =()=>{
    if(window.scrollY>50){
        seScrolled(true);
    }else{
        seScrolled(false);
    }
}
window.addEventListener("scroll", onScroll);
return ()=> window.removeEventListener("scroll",onScroll);
},[])

const onUpdateActiveLink =(value)=>{
    setActiveLink(value);
}
// expand="lg"
  return (
    <Navbar   className={scrolled ? "scrolled":""}>
      <Container>
        <Navbar.Brand href="#home"><img  className='mainlogo' src={logo} alt='logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
        <span className='navbar-toggle-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home'? 'active navbar-link': 'navbar-link'} onClick={()=> onUpdateActiveLink("home")}>Home</Nav.Link>
            <Nav.Link href="#about" className={activeLink === 'about'? 'active navbar-link': 'navbar-link'} onClick={()=> onUpdateActiveLink("navbar")}>About</Nav.Link>
            <Nav.Link href="#experience" className={activeLink === 'experience'? 'active navbar-link': 'navbar-link'} onClick={()=> onUpdateActiveLink("experience")}>Experience</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills'? 'active navbar-link': 'navbar-link'} onClick={()=> onUpdateActiveLink("skills")}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects'? 'active navbar-link': 'navbar-link'} onClick={()=> onUpdateActiveLink("projects")}>Projects</Nav.Link>
          </Nav>

          <span className='navbar-text'>
            <div className='social-icon'>
                <a href="https://www.linkedin.com/in/sagar-giri23/" target="_blank" > <img src={navIcon1} alt="linkedin"/></a>
                <a href="https://www.facebook.com/Ocean.Sagar.Giri.75491856/" target="_blank" > <img src={navIcon2} alt="Facebook"/></a>
                <a href="https://www.instagram.com/ocean_giri23/" target="_blank" > <img src={navIcon3} alt="Instagram"/></a>
                <a href="https://github.com/oceangiri23" target="_blank" > <img src={navIcon4} alt="Github"/></a>
            </div>
            <form target="_blank" >
             <button className='vvd' formaction='https://drive.google.com/file/d/18XQFNTQzUJc8Enj2Jc-rUV6ofw4txEas/view?usp=sharing'  > Get Resume</button>
             </form>
             <Sidebar/>
           
          </span>
          

        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}


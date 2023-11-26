
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';
 


export const Sidebar = () => {
    

    return(
        <section className='sidebarmenu'>
        <input type="checkbox" id="check" />
        <label for="check">
          <i class="fas fa-bars" id="btn"></i>
          <i class="fas fa-times" id="cancel"></i>
        </label>
        <div class="sidebar">
        <header>Menu</header>
          <ul>
            <li>
            <a href="#home"><i class="">Home</i></a>
            </li>
            <li>
              <a href="#skills"><i class="">Skills</i></a>
            </li>
            <li>
              <a href="#projects"><i class="">Projects</i></a>
            </li>
            <li>
              <a href="#connect"><i class="">Let's Connect</i></a>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/1wWBfe_J17Qwl543eMdUiLaeE3jbBsM9c/view?usp=share_link"  target="_blank" ><i class="">Get Resume</i></a>
            </li>

            <li>
            <a href="https://www.linkedin.com/in/sagar-giri23/" target="_blank" > <img src={navIcon1} alt="linkedin"/></a>
            </li>
            <li>
            <a href="https://www.facebook.com/Ocean.Sagar.Giri.75491856/" target="_blank" > <img src={navIcon2} alt="Facebook"/></a>
            </li>
            <li>
            <a href="https://www.instagram.com/ocean_giri23/" target="_blank" > <img src={navIcon3} alt="Instagram"/></a>
            </li>
            <li>
            <a href="https://github.com/oceangiri23" target="_blank" > <img src={navIcon4} alt="Github"/></a>
            </li>
            

            
          </ul>
        </div>
        </section>
    ) 
    
}

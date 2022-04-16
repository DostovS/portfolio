
import React, { useState } from "react";
import "./Header.scss";

const Header = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 100);
  })
  // Toogle Menu
  const [Mobile, setMobile] = useState(false);
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='logo d_flex'>
            <h1>Sohibjon</h1>
          </div>

          <div className='navlink'>
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
              <li>
                <a href='#home'>home</a>
              </li>
              <li>
                <a href='#features'>about</a>
              </li>
              <li>
                <a href='#portfolio'>skills</a>
              </li>
              <li>
                <a href='#resume'>contact</a>
              </li>
            </ul>
    
            <button className='toggle d_flex' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header

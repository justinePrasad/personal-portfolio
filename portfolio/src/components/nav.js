import React from 'react';


function Nav(){

    function toggeMenu(){
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");
        menu.classList.toggle('open');
        icon.classList.toggle('open');
    }

    return (
        <>
        
        <nav id="desktop-nav">
            <div className="logo">Justine Prasad</div>
            <div>
                <ul class="nav-links">
                    {/* <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li> */}
                    {/* TODO- Implement router-react link to Project component */}
                    {/* <li><a href="#projects">Projects</a></li> */}
                    
                </ul>
            </div>
        </nav>
        <nav id="hamburger-nav">
            <div className="logo">Justine Prasad</div>
            {/* <div class="hamburger-menu">
                <div class="hamburger-icon" onClick={toggeMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="menu-links">
                    <li><a href="#about"  onClick={toggeMenu}>About</a></li>
                    <li><a href="#experience"  onClick={toggeMenu}>Experience</a></li>
                    <li><a href="#projects"  onClick={toggeMenu}>Projects</a></li>
                </div>
            </div> */}
        </nav>
        
        </>
    )
}

export default Nav
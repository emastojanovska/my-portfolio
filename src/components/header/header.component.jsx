import React from "react";
import Typed from "react-typed";
import './header.styles.css';

const Header = () => {
    return(
        <div className="header-wraper">
        <div className="main-info">
          <canvas></canvas>
          <div className="title mb-4">
          <h1 > [ HEEY THERE! ]</h1>
          <h2 className="title-word">I'm Ema. </h2> 
          </div>
                  

          <Typed
            className="typed-text"
            strings={["Full Stack Development", "Software Testing", "Creative software solutions", "Software Architecture and Design"]}
            typeSpeed={40}
            backSpeed={60}
            loop
        />         
          <a href="#" className="btn-main-offer">contact me</a>
        </div>
      </div>
    )
}

export default Header;
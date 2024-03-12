import React from "react";
import { NavLink } from "react-router-dom";
import {RiMenu3Line ,RiCloseLine} from "react-icons/ri";

export default function Header(){
  const style={
    fontWeight:"bold",
    textDecoration:"underline",
    color:"#161616",
  }
  const [toggleMenu,setToggleMenu]=React.useState(false);
  function Menu(){
    return(
      <>
        <p>
          <NavLink to="/about" style={({isActive})=> isActive ? style : null}>About</NavLink>
        </p>
        <p>
        
          <NavLink to="/host" style={({isActive})=> isActive ? style : null}>Host</NavLink>
              
        </p>
        <p>
          <NavLink to="/vans" style={({isActive})=> isActive ? style : null}>Vans</NavLink>
        </p>
    
      </>
    )
  }
    return(
        <header className="max-width">
        <NavLink className="site-logo" to="/" >#VanLife</NavLink>
        <nav className="gpt3__navbar-links_container">
           <Menu />
        </nav>
        <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#000" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#000" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <Menu />
          </div>
          
        </div>
        )}
      </div>
      </header>
    )

}
import React from "react";
import { Outlet,NavLink } from "react-router-dom";
export default function HostLayout(){
  const style={
    fontWeight:"bold",
    textDecoration:"underline",
    color:"#161616",
  }
    return(
        <div>
        <div className="container">
          <div className="container1">
                <nav className="host-nav max-width">
                    <NavLink to="." end style={({isActive})=>isActive ? style :null}>Dashboard</NavLink>
                    <NavLink to="income" style={({isActive})=>isActive ? style :null}>Income</NavLink>
                    <NavLink to="vans" style={({isActive})=>isActive ? style :null}>Vans</NavLink>
                    <NavLink to="reviews" style={({isActive})=>isActive ? style :null}>Reviews</NavLink>
            </nav>

          </div>
        </div>
        <div className="min-height">
           <Outlet />
        </div>
        
        </div>
    )
}
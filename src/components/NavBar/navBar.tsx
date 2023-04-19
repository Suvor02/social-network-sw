import React from "react";
import stile from "./navBar.module.css"
import {NavLink} from "react-router-dom";

export const NavBar = () => {
    return <nav className={stile.nav}>
        <div>
            <button className={stile.button}><NavLink to={"/Profile"}>Profile</NavLink></button>
        </div>
        <div>
            <button className={stile.button}><NavLink to={"/Messages"}>Messages</NavLink></button>
        </div>
        <div>
            <button className={stile.button}><NavLink to={"/News"}>News</NavLink></button>
        </div>
        <div>
            <button className={stile.button}><NavLink to={"/Music"}>Music</NavLink></button>
        </div>
        <div>
            <button className={stile.button}><NavLink to={"Settings"}>Settings</NavLink></button>
        </div>


    </nav>
}
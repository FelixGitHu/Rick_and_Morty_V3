import React from "react";
import SearchBar from "../SearchBar/SearchBar.jsx"
import stylesNav from "./Nav.module.css"
import { Link,NavLink } from "react-router-dom";
const Nav =({onSearch,out})=>{
    return(
        <div className={stylesNav.container}>
            <NavLink className={stylesNav.boton} to="/about">ABOUT</NavLink>
            <NavLink className={stylesNav.boton} to="/home">HOME</NavLink>
            <NavLink className={stylesNav.boton} to='/favorite' >FAVORITE</NavLink>
            <SearchBar onSearch={onSearch} />
            <button className={stylesNav.btn} onClick={out}>LOGOUT</button>
        </div>
    )

};

export default Nav;
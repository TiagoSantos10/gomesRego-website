import React from "react";
import logo from "../../../public/assets/gras-logo.png";
import "./Navbar.css";
import Image from "next/image";

const Navbar = () => (
    <div id="navbar">
        <div className="gras-logo" />
        <div className="navbar-navigation">
            <li>
                <a href="#">Inicio</a>
                <a href="#">Equipa</a>
                <a href="#">Áreas de Atuação</a>
                <a href="#">Noticias</a>
                <a href="#">Contactos</a>
            </li>
        </div>
    </div>
);

export default Navbar;

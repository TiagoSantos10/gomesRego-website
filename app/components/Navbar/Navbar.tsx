import React from "react";
import "./Navbar.css";

const Navbar = () => (
    <div id="navbar">
        <div className="gras-logo" />
        <div className="navbar-navigation">
            <li>
                <a href="/">Inicio</a>
                <a href="/team">Equipa</a>
                <a href="/services">Áreas de Atuação</a>
                <a href="/news">Noticias</a>
                <a href="/contacts">Contactos</a>
            </li>
        </div>
    </div>
);

export default Navbar;

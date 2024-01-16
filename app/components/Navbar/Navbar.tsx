"use client";

import React from "react";
import { usePathname } from "next/navigation";
import "./Navbar.css";

const Navbar = () => {
    const pathname = usePathname();

    return (
        <div id="navbar">
            <div className="gras-logo" />
            <div className="navbar-navigation">
                <li>
                    <a
                        href="/"
                        className={pathname === "/" ? "active" : ""}
                    >
                        Inicio
                    </a>
                    <a
                        href="/team"
                        className={pathname === "/team" ? "active" : ""}
                    >
                        Equipa
                    </a>
                    <a
                        href="/services"
                        className={pathname === "/services" ? "active" : ""}
                    >
                        Áreas de Atuação
                    </a>
                    <a
                        href="/news"
                        className={pathname === "/news" ? "active" : ""}
                    >
                        Noticias
                    </a>
                    <a
                        href="/contacts"
                        className={pathname === "/contacts" ? "active" : ""}
                    >
                        Contactos
                    </a>
                </li>
            </div>
        </div>
    );
};

export default Navbar;

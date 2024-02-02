"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Montserrat } from "next/font/google";
import "./Navbar.css";

const montserrat = Montserrat({ subsets: ["latin"] });

const Navbar = () => {
    const pathname = usePathname();

    useEffect(() => {
        // Get the navbar element
        const navbar = document.getElementById("navbar");
        
        // Initial position of the navbar
        var prevScrollPos = window.scrollY;

        if (prevScrollPos > 0 && navbar) {
            navbar.classList.add("scrolled");
        }

        // Function to be called when scrolling
        window.onscroll = function() {
            var currentScrollPos = window.scrollY;

            // If the user is scrolling down, hide the navbar
            if (navbar) {
                // If the user is scrolling up, show the navbar and add the "scrolled" class
                navbar.classList.add("scrolled");

    
                // If the user is at the top of the page, remove the "scrolled" class
                if (currentScrollPos === 0) {
                    navbar.classList.remove("scrolled");
                }
    
                // Update the scroll position
                prevScrollPos = currentScrollPos;
            }
        };
    }, []);

    return (
        <div id="navbar" className={montserrat.className}>
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

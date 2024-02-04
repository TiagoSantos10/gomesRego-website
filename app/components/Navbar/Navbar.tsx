"use client";

import { usePathname } from "next/navigation";
import { Montserrat } from "next/font/google";
import "./Navbar.css";

const montserrat = Montserrat({ subsets: ["latin"] });

const Navbar = () => {
    const pathname = usePathname();

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

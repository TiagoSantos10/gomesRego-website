"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Montserrat } from "next/font/google";
import * as Dialog from "@radix-ui/react-dialog";
import "./Hamburger.css";
import "./Navbar.css";

const montserrat = Montserrat({ subsets: ["latin"] });

const Navbar = () => {
    const pathname = usePathname();
    const [isToggled, setIsToggled] = useState(false);

    return (
        <>
            <Dialog.Root onOpenChange={() => setIsToggled(!isToggled)}>
                <div id="navbar" className={montserrat.className}>
                    <div className="gras-logo" />
                    <div className="navbar-navigation">
                        <li>
                            <div className="hamburger-menu">
                                <Dialog.Trigger asChild>
                                    <input
                                        className="checkbox"
                                        type="checkbox"
                                        name="menu-checkbox"
                                        id="toggle-hamburger"
                                        checked={isToggled}
                                        readOnly
                                    />
                                </Dialog.Trigger>
                                <div className="hamburger-lines">
                                    <span className="line line1"></span>
                                    <span className="line line2"></span>
                                    <span className="line line3"></span>
                                </div>
                            </div>
                            <div className="navigation-links">
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
                            </div>
                        </li>
                    </div>
                </div>
                <Dialog.Portal>
                    <Dialog.Overlay className="DialogOverlay" id="dialog-overlay" />
                    <Dialog.Content className="DialogContent">
                        <div className="mobile-navbar">
                            <ul>
                                <li>
                                    <a
                                        href="/"
                                        className={pathname === "/" ? "active" : ""}
                                    > Início
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/team"
                                        className={pathname === "/team" ? "active" : ""}
                                    > Equipa
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/services"
                                        className={pathname === "/services" ? "active" : ""}
                                    > Áreas de Atuação
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/news"
                                        className={pathname === "/news" ? "active" : ""}
                                    > Noticias
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/contacts"
                                        className={pathname === "/contacts" ? "active" : ""}
                                    > Contactos
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </>
    );
};

export default Navbar;

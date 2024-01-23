"use client";

import { useEffect } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import person from "../../public/assets/person.png";
import "../../public/fontawesome";
import "./team.css";
import "../animations/animations.css";

const montserrat = Montserrat({ subsets: ["latin"] }); 

const Team = () => {
    useEffect(() => {
        const animatedElementFromLeft = document.getElementsByClassName("third-associate");

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("slide-in-left");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0 }); // Adjust threshold as needed

        Array.from(animatedElementFromLeft).forEach(el => observer.observe(el));
    }, []);
    return (
        <div>
            <Navbar />
            <div className="team-container">
                <div className="associate-one-container">
                    <div className="associate-one-left slide-in-left">
                        <Image src={person} alt="Dulce Gomes" width={300} height={300} />
                    </div>
                    <div className="associate-one-right slide-in-left">
                        <h1 className={montserrat.className}>Dulce<br />Gomes</h1>
                        <div>
                            descrição sobre a empresa - Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            descrição sobre a empresa - Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            descrição sobre a empresa - Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        </div>
                        <div className="associate-one-socials">
                            <a href={"mailto:tiagoserafimsousasantos@gmail.com"} target="_blank">
                                <FontAwesomeIcon icon={["fas", "envelope-square"]} size="2xl" color="var(--gras-background-blue)" />
                            </a>
                            <a href="https://www.facebook.com/" target="_blank">
                                <FontAwesomeIcon icon={["fab", "facebook-square"]} size="2xl" color="var(--gras-background-blue)" />
                            </a>
                            <a href="https://pt.linkedin.com/" target="_blank">
                                <FontAwesomeIcon icon={["fab", "linkedin"]} size="2xl" color="var(--gras-background-blue)" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="associate-two-container">
                    <div className="associate-two-left slide-in-right">
                        <h1 className={montserrat.className}>Dulce<br />Gomes</h1>
                        <div className="associate-two-description">
                            descrição sobre a empresa - Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            descrição sobre a empresa - Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            descrição sobre a empresa - Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        </div>
                        <div className="associate-two-socials">
                            <a href={"mailto:tiagoserafimsousasantos@gmail.com"} target="_blank">
                                <FontAwesomeIcon icon={["fas", "envelope-square"]} size="2xl" color="var(--gras-beige)" />
                            </a>
                            <a href="https://www.facebook.com/" target="_blank">
                                <FontAwesomeIcon icon={["fab", "facebook-square"]} size="2xl" color="var(--gras-beige)" />
                            </a>
                            <a href="https://pt.linkedin.com/" target="_blank">
                                <FontAwesomeIcon icon={["fab", "linkedin"]} size="2xl" color="var(--gras-beige)" />
                            </a>
                        </div>
                    </div>
                    <div className="associate-two-right slide-in-right">
                        <Image src={person} alt="Dulce Gomes" width={300} height={300} />
                    </div>
                </div>
                <div className="associate-one-container">
                    <div className="associate-one-left third-associate">
                        <Image src={person} alt="Dulce Gomes" width={300} height={300} />
                    </div>
                    <div className="associate-one-right third-associate">
                        <h1 className={montserrat.className}>Dulce<br />Gomes</h1>
                        <div>
                            descrição sobre a empresa - Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            descrição sobre a empresa - Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            descrição sobre a empresa - Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        </div>
                        <div className="associate-one-socials">
                            <a href={"mailto:tiagoserafimsousasantos@gmail.com"} target="_blank">
                                <FontAwesomeIcon icon={["fas", "envelope-square"]} size="2xl" color="var(--gras-background-blue)" />
                            </a>
                            <a href="https://www.facebook.com/" target="_blank">
                                <FontAwesomeIcon icon={["fab", "facebook-square"]} size="2xl" color="var(--gras-background-blue)" />
                            </a>
                            <a href="https://pt.linkedin.com/" target="_blank">
                                <FontAwesomeIcon icon={["fab", "linkedin"]} size="2xl" color="var(--gras-background-blue)" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;

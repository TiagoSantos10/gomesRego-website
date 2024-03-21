"use client";

import { useEffect } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Almarai } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import person from "../../public/assets/person.png";
import "../../public/fontawesome";
import "./team.css";
import "../animations/animations.css";

const almarai = Almarai({
    subsets: ["arabic"],
    weight: "400"
});

const Team = () => {
    useEffect(() => {
        const animatedElementFromRight = document.getElementsByClassName("second-associate");
        const animatedElementFromLeft = document.getElementsByClassName("associate-left");

        const observerLeft = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("slide-in-left");
                    observer.unobserve(entry.target);
                }
            });
        });

        const observerRight = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("slide-in-right");
                    observer.unobserve(entry.target);
                }
            });
        });

        Array.from(animatedElementFromRight).forEach(el => observerRight.observe(el));
        Array.from(animatedElementFromLeft).forEach(el => observerLeft.observe(el));
    }, []);

    return (
        <div className="team-container">
            <div className="associate-one-container">
                <div className="associate-one-left slide-in-left">
                    <Image src={person} alt="Dulce Gomes" width={300} height={300} />
                </div>
                <div className="associate-one-right slide-in-left">
                    <h1 className={almarai.className}>Dulce Gomes</h1>
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
                <div className="associate-two-left second-associate">
                    <h1 className={almarai.className}>António Moura e Sá</h1>
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
                <div className="associate-two-right second-associate">
                    <Image src={person} alt="Dulce Gomes" width={300} height={300} />
                </div>
            </div>
            <div className="associate-one-container">
                <div className="associate-one-left associate-left">
                    <Image src={person} alt="Dulce Gomes" width={300} height={300} />
                </div>
                <div className="associate-one-right associate-left">
                    <h1 className={almarai.className}>Marianela Rego</h1>
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
    );
};

export default Team;

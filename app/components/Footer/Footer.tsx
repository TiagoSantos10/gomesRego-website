import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../../../public/fontawesome";
import styles from "./Footer.module.css";

const Footer = () => (
    <footer id={styles.footer}>
        <div className={styles.footerSocials}>
            <a
                className={styles.links}
                href="https://pt.linkedin.com/"
                target="_blank"
            >
                <FontAwesomeIcon
                    icon={["fab", "linkedin-in"]} 
                    size="lg"
                    color="var(--gras-background-blue)"
                />
            </a>
            <a
                className={styles.a}
                href={"mailto:tiagoserafimsousasantos@gmail.com"}
                target="_blank"
            >
                <FontAwesomeIcon 
                    icon={["fas", "envelope"]} 
                    size="lg"
                    color="var(--gras-background-blue)"
                />
            </a>
            
        </div>
        <div className={styles.footerText}>
            © 2024 Gomes Rego e Associados. All rights reserved.
        </div>
    </footer>
);

export default Footer;

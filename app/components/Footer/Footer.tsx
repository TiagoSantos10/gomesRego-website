import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../../../public/fontawesome";
import "./Footer.css";

const Footer = () => (
    <footer id="footer">
        <div className="footer-socials">
            <a href="https://pt.linkedin.com/" target="_blank">
                <FontAwesomeIcon icon={["fab", "linkedin-in"]} size="lg" color="var(--gras-background-blue)" />
            </a>
            <a href={"mailto:tiagoserafimsousasantos@gmail.com"} target="_blank">
                <FontAwesomeIcon icon={["fas", "envelope"]} size="lg" color="var(--gras-background-blue)" />
            </a>
            
        </div>
        <div className="footer-text">
            © 2024 Gomes Rego e Associados. All rights reserved.
        </div>
    </footer>
);

export default Footer;

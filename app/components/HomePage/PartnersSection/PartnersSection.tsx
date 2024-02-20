import { Montserrat } from "next/font/google";
import "./PartnersSection.css";

const montserrat = Montserrat({ subsets: ["latin"] });

const PartnersSection = () => (
    <div id="partners-section">
        <h1 className={`partners-section-header ${montserrat.className}`}>
            Parceiros
        </h1>
        <div className="partners-content">
            <div className="item">
                <div className="dulce-gomes-img" />
                <div className="partner-name">Dulce Gomes</div>
            </div>
            <div className="item">
                <div className="antonio-moura-img" />
                <div className="partner-name">António Moura e Sá</div>
            </div>
            <div className="item">
                <div className="marianela-rego-img" />
                <div className="partner-name">Marianela Rego</div>
            </div>
        </div>
    </div>
);

export default PartnersSection;

import { Almarai } from "next/font/google";
import "./PartnersSection.css";

const almarai = Almarai({
    subsets: ["arabic"],
    weight: "400"
});

const PartnersSection = () => (
    <section id="partners-section">
        <h1 className={`partners-section-header ${almarai.className}`}>
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
    </section>
);

export default PartnersSection;

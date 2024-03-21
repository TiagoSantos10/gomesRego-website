import { Almarai } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../../../../public/fontawesome";
import "./SectorsContainer.css";

const almarai = Almarai({
    subsets: ["arabic"],
    weight: "400"
});

const SectorsContainer = () => (
    <section className="sectors-container">
        <h1 className={almarai.className}>Setores de Atividade</h1>
        <div className="public-sector">
            <div className="public-left-side">
                <h3 className={almarai.className}>Setor Público</h3>
                <div className="sector-item">
                    <FontAwesomeIcon
                        icon={["far", "circle-check"]}
                        size="1x"
                        color="var(--gras-purple)"
                        className="circle-icon"
                    />
                    <div>Entidades Reguladoras</div>
                </div>
                <div className="sector-item">
                    <FontAwesomeIcon
                        icon={["far", "circle-check"]}
                        size="1x"
                        color="var(--gras-purple)"
                        className="circle-icon"
                    />
                    <div>Institutos Públicos, Entidades Públicas Empresariais</div>
                </div>
                <div className="sector-item">
                    <FontAwesomeIcon
                        icon={["far", "circle-check"]}
                        size="1x"
                        color="var(--gras-purple)"
                        className="circle-icon"
                    />
                    <div>Entidades Empresariais Municipais, Municípios, Serviços Municipalizados e  Associações de Municípios</div>
                </div>
            </div>
            <div className="public-right-side">
                <div className="public-img" />
            </div>
        </div>
        <div className="private-sector">
            <div className="private-left-side">
                <div className="private-img" />
            </div>
            <div className="private-right-side">
                <h3 className={almarai.className}>Setor Privado</h3>
                <div className="sector-item">
                    <FontAwesomeIcon
                        icon={["far", "circle-check"]}
                        size="1x"
                        color="var(--gras-purple)"
                        className="circle-icon"
                    />
                    <div>Agricultura, Pescas, Aquacultura, Avicultura, Pecuária, Vitivinicultura, Agro-indústria</div>
                </div>
                <div className="sector-item">
                    <FontAwesomeIcon
                        icon={["far", "circle-check"]}
                        size="1x"
                        color="var(--gras-purple)"
                        className="circle-icon"
                    />
                    <div>Construção Civil e Obras Públicas</div>
                </div>
                <div className="sector-item">
                    <FontAwesomeIcon
                        icon={["far", "circle-check"]}
                        size="1x"
                        color="var(--gras-purple)"
                        className="circle-icon"
                    />
                    <div>Indústria Transformadora, Comércio e Prestação de Serviços</div>
                </div>
                <div className="sector-item">
                    <FontAwesomeIcon
                        icon={["far", "circle-check"]}
                        size="1x"
                        color="var(--gras-purple)"
                        className="circle-icon"
                    />
                    <div>Promoção Imobiliária e Gestão de Participações Sociais</div>
                </div>
            </div>
        </div>
    </section>
);

export default SectorsContainer;

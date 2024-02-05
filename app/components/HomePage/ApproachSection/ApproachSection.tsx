import { Montserrat } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../../../../public/fontawesome";
import "./ApproachSection.css";

const montserrat = Montserrat({ subsets: ["latin"] });

const ApproachSection = () => (
    <div id="approach-section">
        <h1 className={`${montserrat.className} heading-title`}>A nossa abordagem</h1>
        <div className="approach-group">
            <div className="group-row">
                <div className="item">
                    <div className="item-circle">
                        <FontAwesomeIcon icon={["fas", "magnifying-glass"]} size="3x" color="var(--gras-background-blue)" />
                    </div>
                    <div className="item-title">Diagnóstico</div>
                    <div className="item-description">
                        Estudo cuidadoso dos
                        objetivos, pontos de melhoria
                        e contexto económico dos
                        clientes.
                    </div>
                </div>
                <div className="item">
                    <div className="item-circle">
                        <FontAwesomeIcon icon={["fas", "list-check"]} size="3x" color="var(--gras-background-blue)" />
                    </div>
                    <div className="item-title">Planeamento</div>
                    <div className="item-description">
                        Estrutura de uma estratégia
                        racionável que potencie o
                        desempenho dos negócios.
                    </div>
                </div>
            </div>
            <div className="group-row">
                <div className="item">
                    <div className="item-circle">
                        <FontAwesomeIcon icon={["far", "lightbulb"]} size="3x" color="var(--gras-background-blue)" />
                    </div>
                    <div className="item-title">Análise</div>
                    <div className="item-description">
                        Análise rigorosa dos
                        resultados da estratégia
                        adotada e dos próximos passos.
                    </div>
                </div>
                <div className="item">
                    <div className="item-circle">
                        <FontAwesomeIcon icon={["fas", "arrow-up-right-from-square"]} size="3x" color="var(--gras-background-blue)" />
                    </div>
                    <div className="item-title">Reporte</div>
                    <div className="item-description">
                        Entrega das conclusões
                        aos clientes, orientando-os
                        para o futuro.
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default ApproachSection;

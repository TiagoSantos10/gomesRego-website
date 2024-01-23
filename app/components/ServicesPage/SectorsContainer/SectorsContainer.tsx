import { Montserrat } from "next/font/google";
import "./SectorsContainer.css";

const montserrat = Montserrat({ subsets: ["latin"] });

const SectorsContainer = () => (
    <div className="sectors-container">
        <h1 className={montserrat.className}>Setores de Atividade</h1>
        <div className="sectors-divider">
            <div className="public-sector-left">
                <h2 className={montserrat.className}>Setor<br />Público</h2>
                <ul>
                    <li>
                        Entidades Reguladoras;
                    </li>
                    <li>
                        Institutos Públicos, Entidades Públicas Empresariais;
                    </li>
                    <li>
                        Entidades Empresariais Municipais, Municípios,
                        Serviços Municipalizados e Associações de Municípios.
                    </li>
                </ul>
            </div>
            <div className="private-sector-right">
                <h2 className={montserrat.className}>Setor<br />Privado</h2>
                <ul>
                    <li>
                        Agricultura, Pescas, Aquacultura, Avicultura, Pecuária, Vitivinicultura, Agro-indústria;
                    </li>
                    <li>
                        Construção Civil e Obras Públicas;
                    </li>
                    <li>
                        Indústria Transformadora, Comércio, Prestação de Serviços;
                    </li>
                    <li>
                        Promoção Imobiliária, Gestão de Participações Sociais.
                    </li>
                </ul>
            </div>
        </div>
    </div>
);

export default SectorsContainer;

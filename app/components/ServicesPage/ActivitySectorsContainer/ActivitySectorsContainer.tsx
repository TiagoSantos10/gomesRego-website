import { Almarai } from "next/font/google";
import "./ActivitySectorsContainer.css";
import Sector from "./Sector/Sector";

const almarai = Almarai({
    subsets: ["arabic"],
    weight: "400"
});

const publicSectorItems = [
    "Entidades Reguladoras",
    "Institutos Públicos, Entidades Públicas Empresariais",
    "Entidades Empresariais Municipais, Municípios, Serviços Municipalizados e  Associações de Municípios",
];

const privateSectorItems = [
    "Agricultura, Pescas, Aquacultura, Avicultura, Pecuária, Vitivinicultura, Agro-indústria",
    "Construção Civil e Obras Públicas",
    "Indústria Transformadora, Comércio e Prestação de Serviços",
    "Promoção Imobiliária e Gestão de Participações Sociais",
];

const ActivitySectorsContainer = () => (
    <section className="sectors-container">
        <h1 className={almarai.className}>Setores de Atividade</h1>
        <Sector title="Setor Público" items={publicSectorItems} imageAlignment="right" />
        <Sector title="Setor Privado" items={privateSectorItems} imageAlignment="left" />
    </section>
);

export default ActivitySectorsContainer;

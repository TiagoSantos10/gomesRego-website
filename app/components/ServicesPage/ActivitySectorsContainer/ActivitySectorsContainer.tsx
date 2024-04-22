import { Almarai } from "next/font/google";
import { NewsImageType } from "@/app/utils/types/types";
import Sector from "./Sector/Sector";
import "./ActivitySectorsContainer.css";

const almarai = Almarai({
    subsets: ["arabic"],
    weight: "400"
});

type ActivitySectorsContainerProps = {
    publicSectorItems: string[];
    privateSectorItems: string[];
    sectionHeader: string;
    publicSectorImage: NewsImageType;
    privateSectorImage: NewsImageType;
};

const ActivitySectorsContainer: React.FC<ActivitySectorsContainerProps> = ({
    publicSectorItems,
    privateSectorItems,
    sectionHeader,
    publicSectorImage,
    privateSectorImage
}) => (
    <section className="sectors-container">
        <h1 className={`${almarai.className} section-title`}>{sectionHeader}</h1>
        <Sector
            title="Setor Público"
            items={publicSectorItems}
            imageAlignment="right"
            image={publicSectorImage}
        />
        <Sector
            title="Setor Privado"
            items={privateSectorItems}
            imageAlignment="left"
            image={privateSectorImage}
        />
    </section>
);

export default ActivitySectorsContainer;

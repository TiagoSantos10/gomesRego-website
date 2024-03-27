import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../../../../../../public/fontawesome";
import "./SectorItem.css";

type SectorItemProps = {
    text: string;
};

const SectorItem = ({ text }: SectorItemProps) => {
    return (
        <div className="sector-item">
            <FontAwesomeIcon
                icon={["far", "circle-check"]}
                size="1x"
                color="var(--gras-purple)"
                className="circle-icon"
            />
            <div>{text}</div>
        </div>
    );
};

export default SectorItem;

import "./CompanyCover.css";
import { Italianno } from "next/font/google";

const italianno = Italianno({
    subsets: ["latin"],
    weight: "400"
});

const CompanyCover = () => (
    <div className="company-cover-section">
        <div className="text-inside-img">
            <div className="upper-text">Há mais de</div>
            <div className={`middle-text ${italianno.className}`}>5</div>
            <div className="bottom-text">anos</div>
        </div>
        <div className="gras-img" />
    </div>
);

export default CompanyCover;

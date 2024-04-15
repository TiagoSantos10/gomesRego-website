import "./Button.css";

type ButtonProps = {
    text: string;
    size?: "small" | "medium" | "large";
    isSelected?: boolean;
    onClick?: () => void;
};

const Button = ({
    text,
    size = "medium",
    isSelected = false,
    onClick = () => {}
}: ButtonProps) => {
    return (
        <button className={`gras-btn ${size} ${isSelected ? "selected" : ""}`} onClick={onClick}>{text}</button>
    );
};

export default Button;

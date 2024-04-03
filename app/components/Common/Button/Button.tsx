import "./Button.css";

type ButtonProps = {
    text: string;
    size: "small" | "medium" | "large";
    isSelected?: boolean;
};

const Button = ({ text, size, isSelected }: ButtonProps) => {
    return (
        <button className={`${size} ${isSelected ? "selected" : ""}`}>{text}</button>
    );
};

Button.defaultProps = {
    size: "medium"
};

export default Button;

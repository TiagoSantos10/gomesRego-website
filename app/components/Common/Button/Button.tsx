import styles from "./Button.module.css";

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
        <button className={`${styles.grasBtn} ${styles[size]} ${isSelected ? `${styles.selected}` : ""}`} onClick={onClick}>{text}</button>
    );
};

export default Button;

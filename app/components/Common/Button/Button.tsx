import styles from "./Button.module.css";

type ButtonProps = {
    text: string;
    size?: "small" | "medium" | "large";
    isSelected?: boolean;
    onClick?: () => void;
    variant?: "dark" | "light";
};

const Button = ({
    text,
    size = "medium",
    isSelected = false,
    onClick = () => { },
    variant = "dark"
}: ButtonProps) => {
    return (
        <button
            className={`
                ${styles.grasBtn}
                ${styles[size]}
                ${isSelected ? `${styles.selected}` : ""}
                ${variant === "dark" ? `${styles.dark}` : `${styles.light}`}
            `}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;

import styles from "./Button.module.css";

export function Button({ text }) {
    return (
        <button
            type="button"
            // "error" class is accessed as a property on the imported `styles` object.
            className={styles.error}
        >
            {text}
        </button>
    );
}

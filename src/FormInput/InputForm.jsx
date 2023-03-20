import styles from "./FormInput.module.css";
import Button from "react-bootstrap/Button";
import { nanoid } from "nanoid";
import { useState } from "react";

export default function InputForm({ handleFormSubmit }) {
    const [textValue, setTextValue] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        if (textValue.trim() === "") return;

        const todo = { text: textValue, id: nanoid(), completed: false };
        handleFormSubmit(todo);
        setTextValue("");
    }

    function handleChange(e) {
        const value = e.target.value;
        setTextValue(value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.form}>
                <input
                    autoFocus
                    type="text"
                    value={textValue}
                    onChange={handleChange}
                />
                <Button type="submit">Add</Button>
            </div>
        </form>
    );
}

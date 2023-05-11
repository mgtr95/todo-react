import styles from "./FormInput.module.css";
import Button from "react-bootstrap/Button";
import { nanoid } from "nanoid";
import { useState } from "react";

function FormInput({ handleFormSubmit }) {
    const [textValue, setTextValue] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (textValue.trim() === "") {
            return;
        }

        const todo = { id: nanoid(), text: textValue, completed: false };
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
                    autoFocus={true}
                    type="text"
                    value={textValue}
                    onChange={handleChange}
                />
                <Button type="submit">Add</Button>
            </div>
        </form>
    );
}

export default FormInput;

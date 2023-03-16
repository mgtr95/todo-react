import styles from "./FormInput.module.css"
import Button from 'react-bootstrap/Button'

export default function InputForm() {
    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.form}>
                <input type="text" />
                <Button type="submit">Add</Button>
            </div>
        </form>
    );
}

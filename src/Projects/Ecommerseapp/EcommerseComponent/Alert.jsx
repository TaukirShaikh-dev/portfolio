import styles from '../Ecommersecart.module.css';

export function SuccessAlert({ setIsSuccess, setcartArray }) {
    function handleCloseAlert() {
        //close alert
        setIsSuccess(false);
        //empty cart
        setcartArray([]);
    }

    return (
        <div className={styles.overlay}>
            <div className={styles.successAlert}>
                <div className={styles.alertContainer}>
                    <div className={styles.icon}>&#x2714;</div>
                    <div className={styles.alertText}>Order placed successfully! Thank you for shopping with us.</div>
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.okBtn} onClick={handleCloseAlert}>OK</button>
                </div>
            </div>
        </div>
    );
}

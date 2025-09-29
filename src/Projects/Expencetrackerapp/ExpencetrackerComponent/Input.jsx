import styles from '../Expencetracker.module.css';

export function Input({id, name, type, label, value, onChange, error}) {
    return(
            <div className={styles.wrapper}>
                <label htmlFor={id}>{label}</label>
                <input type={type} name={name} className={styles.title} id={id} value={value} onChange={onChange}/>
                <p className={styles.demo}>{error}</p>
            </div>
    );
}


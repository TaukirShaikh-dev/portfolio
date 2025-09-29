import styles from '../Expencetracker.module.css';

export function Select({id, name, label, value, onChange, error, hiddenOption, optionArray}) {
    return(
                    <div className={styles.wrapper}>
                      <label htmlFor={id}>{label}</label>
                      <select name={name} id={id} value={value} onChange={onChange}>
                          <option hidden>{hiddenOption}</option>
                          {
                            optionArray.map((e, index) => (
                                <option key={index} value={e}>{e}</option>
                            ))
                          }
                      </select>
                       <p className={styles.demo}>{error}</p>
                  </div>
    );
}
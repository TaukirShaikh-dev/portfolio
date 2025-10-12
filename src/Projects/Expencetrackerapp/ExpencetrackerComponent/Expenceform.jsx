import styles from '../Expencetracker.module.css';
import { Input } from './Input';
import { Select } from './Select';

export function Expenceform({ handleInsert, formData, handleChange, error, isEditing }) {
    return (
        <form className={styles.expenseForm}>
            {/* <div className="wrapper">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" className="title" id="title" value={formData.title} onChange={handleChange}/>
                <p className="demo">{error.title}</p>
            </div> */}
            <Input
                id={styles.title}
                name={'title'}
                type={'text'}
                label={'Title'}
                value={formData.title}
                onChange={handleChange}
                error={error.title}
            />

            <Select
                id={styles.category}
                name="category"
                label="category"
                value={formData.category}
                onChange={handleChange}
                error={error.category}
                hiddenOption='Choose Category'
                optionArray={['Groceries', 'Cloths', 'Vegetable', 'Bill']}
            />

            <Input
                id={styles.amount}
                name={"amount"}
                type={"number"}
                label={"Amount"}
                value={formData.amount}
                onChange={handleChange}
                error={error.amount}
            />

            <div className={styles.wrapper}>
                <input
                    type="submit"
                    value={isEditing ? 'Update Expence' : 'Add Expence'}
                    onClick={handleInsert}
                />
            </div>
        </form>
    );
}

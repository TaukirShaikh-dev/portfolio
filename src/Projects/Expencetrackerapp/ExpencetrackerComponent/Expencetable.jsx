import { useState, useEffect } from "react";
import { useFilter } from '../hooks/useFilter';
import { useSort } from "../hooks/useSort";
import styles from '../Expencetracker.module.css';

export function Expencetable({ ExpenceArray: [ExpenceArray, setExpenceArray], setFormData, setIsEditing, setUpdateId }) {
    const [category, setCategory] = useState('');
    const total = 0;
    const [arr, setArr] = useState([1, 3, 2, 7, 6]);
    const [sortCallback, setSortCallback] = useState(() => () => {});

    console.log(sortCallback);

    useEffect(() => {
        console.log('state changed');
    }, [arr]);

    console.log(arr);

    //filter expences based on category
    // let filteredArray = ExpenceArray.filter((obj) => obj.category.includes(category));
    const [filteredArray, query, setQuery] = useFilter(ExpenceArray, (obj) => obj.category);
    // console.log(filteredArray)

    //delete function
    function handleDelete(clickTrId) {
        //remove partucular row from ui
        //filter those element from expence array those id not match with clickTrId
        let updatedArray = ExpenceArray.filter((obj) => obj.id !== clickTrId);
        setExpenceArray(updatedArray);
    }
    // console.log('render');

    //edit function
    function handleEdit(clickTrId) {
        //filter those element from ExpenceArray those id match with clickTrId
        let formRefillobj = ExpenceArray.filter((obj) => obj.id === clickTrId);
        setFormData(formRefillobj[0]);
        //change buttonText to update Expence
        setIsEditing(true);
        //change updateId value to user clicked rowid
        setUpdateId(clickTrId);
    }
    // console.log(filteredArray);

    function handleAccending() {
        //assign acending compare function to sortCallback state variable
        setSortCallback(() => (a, b) => parseInt(a.amount) - parseInt(b.amount));
    }

    function handledeccending() {
        //assign decending compare function to sortCallback state variable
        setSortCallback(() => (a, b) => parseInt(b.amount) - parseInt(a.amount));
    }

    function handleClear() {
        //assign empty callback function to sortCallback state variable
        setSortCallback(() => () => {});
    }

    return (
        <table className={styles.expenseTable}>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>
                        <select
                            name="category"
                            className={styles.category}
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        >
                            <option hidden>Choose Category</option>
                            <option value="">All</option>
                            <option value="Vegetable">vegetable</option>
                            <option value="Cloths">cloths</option>
                            <option value="Groceries">Groceries</option>
                            <option value="Bill">Bills</option>
                        </select>
                    </th>
                    <th>
                        <div className={styles.amountHeader}>
                            <span>Amount</span>
                            <div className={styles.arrowContainer}>
                                <span className={styles.upArrow} onClick={handledeccending}>⬆️</span>
                                <span className={styles.downArrow} onClick={handleAccending}>⬇️</span>
                            </div>
                        </div>
                    </th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                {
                    //for each element of expence array create tr structure
                    filteredArray.sort(sortCallback).map((obj) => (
                        //fill each element data inside tr
                        <tr key={obj.id}>
                            <td>{obj.title}</td>
                            <td>{obj.category}</td>
                            <td>&#x20B9; {obj.amount}</td>
                            <td>
                                <button className={styles.editBtn} onClick={() => handleEdit(obj.id)}>Edit</button>
                                <button className={styles.deleteBtn} onClick={() => handleDelete(obj.id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }

                <tr>
                    <td className={styles.total}>Total</td>
                    <td></td>
                    <td className={styles.total}>&#x20B9; {
                        filteredArray.reduce((total, next) => total + Number(next.amount), 0)
                    }</td>
                    <td className={styles.clearSort} onClick={handleClear}>Clear Sort</td>
                </tr>
            </tbody>
        </table>
    );
}

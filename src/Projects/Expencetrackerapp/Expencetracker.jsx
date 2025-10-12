import styles from './Expencetracker.module.css';
import { Expenceform } from './ExpencetrackerComponent/Expenceform';
import { Expencetable } from './ExpencetrackerComponent/Expencetable';
import { useEffect, useState } from 'react';

export function ExpenceTracker() {
    const [ExpenceArray, setExpenceArray] = useState([]);
    const [formData, setFormData] = useState({ title: '', category: '', amount: '' });
    const [error, setError] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const [updateId, setUpdateId] = useState(1);

    //on page reload get localStorage expence Array and show on ui
    useEffect(() => {
        //get expence key value from localStorage 
        const localArr = JSON.parse(localStorage.getItem('Expence')) || [];
        //assign it to expenceArray state variable
        setExpenceArray(localArr);
    }, []);

    //connect expenceArray with localStorage
    useEffect(() => {
        //update localstorage expence key value
        localStorage.setItem('Expence', JSON.stringify(ExpenceArray));
    }, [ExpenceArray]);

    function handleChange(e) {
        const { name, value } = e.target;

        //insert value inside formdata state variable
        setFormData(prev => {
            return { ...prev, [name]: value }
        });
    }

    //define validation config
    const validationConfig = {
        title: [
            { required: true, message: 'Title should not be empty' }
        ],
        category: [
            { required: true, message: 'Category should not be empty' }
        ],
        amount: [
            { required: true, message: 'Amount should not be empty' },
            { positive: true, message: 'Amount must be Positive number' }
        ]
    };

    function Validate() {
        let newError = {};
        let isError = false;

        //for each element of form data check validation config
        Object.entries(formData).forEach(([key, value]) => {
            if (!validationConfig[key]) return;

            validationConfig[key].forEach((ruleobj) => {
                if (ruleobj.required && !value) {
                    newError[key] = ruleobj.message;
                    isError = true;
                }

                if (ruleobj.positive && Number(value) < 0) {
                    newError[key] = ruleobj.message;
                    isError = true;
                }
            });
        });

        setError(newError);
        return isError;
    }

    //insert function
    function handleInsert(e) {
        e.preventDefault();

        if (Validate()) return;

        if (isEditing) {
            let updatedArray = ExpenceArray.map((obj) => (
                obj.id === updateId ? { ...obj, title: formData.title, category: formData.category, amount: formData.amount } : obj
            ));
            setExpenceArray(updatedArray);
            setFormData({ title: '', category: '', amount: '' });
            setIsEditing(false);
        } else {
            const obj = {
                id: crypto.randomUUID(),
                title: formData.title,
                category: formData.category,
                amount: formData.amount
            };
            setExpenceArray([...ExpenceArray, obj]);
            setFormData({ title: '', category: '', amount: 0 });
        }
    }

    return (
        <>
            <div className={styles.expenseContainer}>
                <Expenceform
                    handleInsert={handleInsert}
                    formData={formData}
                    handleChange={handleChange}
                    error={error}
                    isEditing={isEditing}
                />
                <Expencetable
                    ExpenceArray={[ExpenceArray, setExpenceArray]}
                    setFormData={setFormData}
                    setIsEditing={setIsEditing}
                    setUpdateId={setUpdateId}
                />
            </div>
        </>
    );
}

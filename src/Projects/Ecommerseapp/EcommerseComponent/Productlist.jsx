import logo from '../../../assets/react.svg';
import { useEffect } from 'react';
import styles from '../Ecommersecart.module.css';

export function Productlist({ productArray, cartArray: [cartArray, setcartArray] }) {
    useEffect(() => {
        console.log(cartArray);
    }, [cartArray]);

    function handleAddtoCard(clickCardId) {
        //compare clickcardid with each element id of product array if match then return particular element
        let clickedProductObj = productArray.find((obj) => obj.id === clickCardId);

        //checking clickdCard already exist in cartArray or not
        let isExist = cartArray.some((obj) => obj.id === clickCardId)

        if (isExist) {
            //if clicked product card already exist in cartArray then increase its quantity value by 1
            setcartArray(cartArray.map((obj) => {
                if (obj.id === clickCardId) {
                    return { ...obj, quantity: obj.quantity + 1 };
                } else {
                    return obj;
                }
            }))
        } else {
            //if not then add that product card into cartArray
            //add matching element inside cartArray
            setcartArray([...cartArray, clickedProductObj]);
        }
    }



    return (
        <ul className={styles.productList}>
            {
            //for each element of productArray create card structure
            productArray.map((obj) => (
                 //fill each element data inside card structure
                <li className={styles.pCard} key={obj.id}>
                    <div className={styles.cardHead}>
                        <img src={logo} alt="logo" className={styles.pImage} />
                    </div>
                    <div className={styles.cardBody}>
                        <p className={styles.pName}>Product: {obj.name}</p>
                        <p className={styles.pPrice}>Price: {obj.price}</p>
                        <button className={styles.addBtn} onClick={() => handleAddtoCard(obj.id)}>Add to Cart</button>
                    </div>
                </li>
            ))}
        </ul>
    );
}

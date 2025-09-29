// ECOMMERSE CART COMPONENET STARTS HERE
import { Navbar } from './EcommerseComponent/navbar';
import { Productlist } from './ECommerseComponent/Productlist';
import { Cart } from './ECommerseComponent/Cart';
import { SuccessAlert } from './ECommerseComponent/Alert';
import styles from './Ecommersecart.module.css';
import logo from '../../assets/react.svg';
import { useState, useRef } from 'react';

export function ECommerseCart() {
    const [cartArray, setcartArray] = useState([]);
    const [isSuccess, setIsSuccess] = useState(false);
    const sideBar = useRef(null);

    const product = [{ id: 1, name: 'Thisrt', price: 499, image: logo, quantity: 1 }, { id: 2, name: 'Shoes', price: 1499, image: logo, quantity: 1 },
    { id: 3, name: 'Watch', price: 1999, image: logo, quantity: 1 }, { id: 4, name: 'Fan', price: 2500, image: logo, quantity: 1 },
    { id: 5, name: 'chips', price: 10, image: logo, quantity: 1 }, { id: 6, name: 'Pen', price: 10, image: logo, quantity: 1 }];


    return (
        <div className={styles.ecommerseContainer}>
            <Navbar refobj={sideBar} cartArray={cartArray} />
            <Productlist productArray={product} cartArray={[cartArray, setcartArray]} />
            <Cart refobj={sideBar} cartArray={[cartArray, setcartArray]} setIsSuccess={setIsSuccess} />
            {isSuccess && (<SuccessAlert setIsSuccess={setIsSuccess} setcartArray={setcartArray} />)}
        </div>
    );
}

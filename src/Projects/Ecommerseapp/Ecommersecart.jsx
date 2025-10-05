// ECOMMERSE CART COMPONENET STARTS HERE
import { Navbar } from './EcommerseComponent/navbar';
import { Productlist } from './ECommerseComponent/Productlist';
import { Cart } from './EcommerseComponent/Cart';
import { SuccessAlert } from './ECommerseComponent/Alert';
import styles from './Ecommersecart.module.css';
import chips from '../../assets/img/chips.png';
import pen from '../../assets/img/pen.png';
import Watch from '../../assets/img/Watch.png';
import Tshirt from '../../assets/img/Tshirt.png';
import shoes from '../../assets/img/shoes.png';
import fan from '../../assets/img/fan.png';
import { useState, useRef } from 'react';

export function ECommerseCart() {
    const [cartArray, setcartArray] = useState([]);
    const [isSuccess, setIsSuccess] = useState(false);
    const sideBar = useRef(null);

    const product = [{ id: 1, name: 'Thisrt', price: 499, image: Tshirt, quantity: 1 }, { id: 2, name: 'Shoes', price: 1499, image: shoes, quantity: 1 },
    { id: 3, name: 'Watch', price: 1999, image: Watch, quantity: 1 }, { id: 4, name: 'Fan', price: 2500, image: fan, quantity: 1 },
    { id: 5, name: 'chips', price: 10, image: chips, quantity: 1 }, { id: 6, name: 'Pen', price: 10, image: pen, quantity: 1 }];


    return (
        <div className={styles.ecommerseContainer}>
            <Navbar refobj={sideBar} cartArray={cartArray} />
            <Productlist productArray={product} cartArray={[cartArray, setcartArray]} />
            <Cart refobj={sideBar} cartArray={[cartArray, setcartArray]} setIsSuccess={setIsSuccess} />
            {isSuccess && (<SuccessAlert setIsSuccess={setIsSuccess} setcartArray={setcartArray} />)}
        </div>
    );
}

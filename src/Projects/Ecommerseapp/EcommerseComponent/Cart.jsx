import styles from '../Ecommersecart.module.css';

export function Cart({ refobj, cartArray: [cartArray, setcartArray], setIsSuccess }) {
    const subTotal = cartArray.reduce((total, next) => total + next.price * next.quantity, 0);
    const tax = subTotal * 0.10;


    //close navbar function
    function handleClose() {
        //close sidebar
        refobj.current.classList.remove(styles.open);
    }

    function handleRemove(clickItemid) {
        //remove product from cart
        //filter element of from cartArray those id not match with clickItemid
        let filteredArray = cartArray.filter((obj) => obj.id !== clickItemid);
        //update ui
        setcartArray(filteredArray);
    }

    function handleIncrease(clickItemid) {
        //increase partucular product quantity by 1
        //for each element of cartArray compare their id with clickItemid
        let updatedArray = cartArray.map((obj) => (
            //if match then increase particular object quantity key value by 1 if not then return object as it is
            obj.id === clickItemid ? { ...obj, quantity: obj.quantity + 1 } : obj
        ))
        //update ui
        setcartArray(updatedArray);
    }

    function handleDecrease(clickItemid) {
        //decrease particular product quantity by 1
        //for each element of cartArray compare their id with clickItemid
        let updatedArray = cartArray.map((obj) => {
            //if match then decrease particular object quantity value by 1 if not then return objcet as it is
            if (obj.id === clickItemid) {
                //check if object quantity is 1 then dont decrease quantity
                if(obj.quantity > 1) {
                   return { ...obj, quantity: obj.quantity - 1 }
                } else {
                    return obj;
                }
            } else {
                return obj
            }
        })

        //update on ui
        setcartArray(updatedArray);
    }

    function handleAlert() {
       //show successalert on ui
       setIsSuccess(true);
    }


    return (
        <article className={styles.cartContainer} ref={refobj}>
            <h2 className={styles.cartHeading}>Cart <span className={styles.crossIcon} onClick={handleClose}>&times;</span></h2>
            <ul className={styles.productQuantity}>
                {
                //for each element of cartArray create li structure
                cartArray.map((obj) => (
                    //fill each element data inside li
                    <li className={styles.productInfo} key={obj.id}>
                        <div className={styles.product}>{obj.name}</div>
                        <div className={styles.quantity}>
                            <span className={styles.decrease} onClick={() => handleDecrease(obj.id)}>-</span>
                            <span className={styles.displayQuantity}>{obj.quantity}</span>
                            <span className={styles.increase} onClick={() => handleIncrease(obj.id)}>+</span>
                        </div>
                        <div className={styles.price}>{obj.price}</div>
                        <button className={styles.removeBtn} onClick={() => handleRemove(obj.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <div className={styles.productTotal}>
                <p className={styles.subtotal}>Subtotal: ₹{subTotal.toLocaleString()}</p>
                <p className={styles.tax}>Tax: ₹{tax.toLocaleString()}</p>
                <p className={styles.total}>Total: ₹{(subTotal + tax).toLocaleString()}</p>
            </div>
            <div className={styles.checkout} onClick={handleAlert}>Checkout</div>
        </article>
    );
}

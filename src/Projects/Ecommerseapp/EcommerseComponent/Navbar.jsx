import styles from '../Ecommersecart.module.css';

export function Navbar({ refobj, cartArray }) {
    let Toalquantity = 0;
    //find total quantity of each element in cartArray
    cartArray.forEach((obj) => Toalquantity += obj.quantity)

    function handleOpen() {
        //open sidebar
        refobj.current.classList.add(styles.open);
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.shopName}>MyShop</div>
            <div className={styles.iconContainer}>
                <span className={styles.cartIcon} onClick={handleOpen}>
                    🛒
                    <span className={styles.cartCount}>{Toalquantity}</span>
                </span>
            </div>
        </nav>
    );
}

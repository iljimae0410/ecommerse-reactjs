import Button from '@components/Button/Button';
import styles from '../../styles.module.scss';
import cls from 'classnames';
import { useContext } from 'react';
import { SideBarContext } from '@contexts/SideBarProvider';
import LoadingCart from '@pages/Cart/components/Loading';
import PaymentMethods from '@components/PaymentMethods/PaymentMethods';

function CartSummary() {
    const {
        containerSummary,
        title,
        boxTotal,
        price,
        subTotal,
        totals,
        containerMethods,
        titleMethods,
        containerRight,
        boxImgMethods,
        imgMethods,
        textSecure,
        space
    } = styles;

    const { listProductCart, isLoading } = useContext(SideBarContext);

    const srcMethods = [
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/visa.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/master-card.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/paypal.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/american-express.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/maestro.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/bitcoin.jpeg'
    ];

    const total = listProductCart
        .reduce((acc, item) => {
            return acc + item.total;
        }, 0)
        .toFixed(2);
    return (
        <div className={containerRight}>
            <div className={containerSummary}>
                <div className={title}>CART TOTALS</div>

                <div className={cls(boxTotal, subTotal)}>
                    <div>Subtotal</div>
                    <div className={price}>${total}</div>
                </div>

                <div className={cls(boxTotal, totals)}>
                    <div>Total</div>
                    <div>${total}</div>
                </div>

                <Button content={'PROCEED TO CHECKOUT'} />
                <div className={space}></div>
                <Button content={'CONTINUE TO SHOPPING'} isPrimary={false} />

                {isLoading && <LoadingCart />}
            </div>

            <PaymentMethods />
        </div>
    );
}

export default CartSummary;

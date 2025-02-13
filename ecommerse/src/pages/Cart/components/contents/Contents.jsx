import CartTable from '@pages/Cart/components/contents/CartTable';
import styles from '../../styles.module.scss';
import CartSummary from '@pages/Cart/components/contents/CartSummary';
import Button from '@components/Button/Button';
import { useContext } from 'react';
import { SideBarContext } from '@contexts/SideBarProvider';
import { data, useNavigate } from 'react-router-dom';
import { addProductToCart, deleteItem, deleteCart } from '@apis/cartService';
import { PiShoppingCartLight } from 'react-icons/pi';

function Contents() {
    const {
        containerContents,
        boxFooter,
        boxCoupon,
        boxDelete,
        boxEmptyCart,
        titleEmpty,
        boxBtnEmpty
    } = styles;
    const {
        listProductCart,
        handleGetListProductCart,
        isLoading,
        setIsLoading,
        userId
    } = useContext(SideBarContext);

    const navigae = useNavigate();

    const handleReplaceQuantity = (data) => {
        setIsLoading(true);
        addProductToCart(data)
            .then((res) => {
                handleGetListProductCart(data.userId, 'cart');
            })
            .catch((err) => {
                setIsLoading(false);
                console.log(err);
            });
    };

    const handleDeleteItemCart = (data) => {
        setIsLoading(true);
        deleteItem(data)
            .then((res) => {
                handleGetListProductCart(data.userId, 'cart');
            })
            .catch((err) => {
                setIsLoading(false);
                console.log(err);
            });
    };

    const handleDeleteCart = () => {
        setIsLoading(true);
        deleteCart({ userId })
            .then((res) => {
                handleGetListProductCart(userId, 'cart');
            })
            .catch((err) => {
                setIsLoading(false);
                console.log(err);
            });
    };

    const handleNavigateToShop = () => {
        navigae('/shop');
    };

    return (
        <>
            {listProductCart.length > 0 && userId ? (
                <div className={containerContents}>
                    <div style={{ with: '58%' }}>
                        <CartTable
                            listProductCart={listProductCart}
                            getData={handleReplaceQuantity}
                            isLoading={isLoading}
                            getDataDelete={handleDeleteItemCart}
                        />

                        <div className={boxFooter}>
                            <div className={boxCoupon}>
                                <input type='text' placeholder='Coupon code' />
                                <Button content={'OK'} isPrimary={false} />
                            </div>
                            <div className={boxDelete}>
                                <Button
                                    content={
                                        <div>&#128465; CLEAR SHOPPING CART</div>
                                    }
                                    isPrimary={false}
                                    onClick={handleDeleteCart}
                                />
                            </div>
                        </div>
                    </div>
                    <CartSummary />
                </div>
            ) : (
                <div className={boxEmptyCart}>
                    <PiShoppingCartLight
                        style={{
                            fontSize: '50px'
                        }}
                    />
                    <div className={titleEmpty}>
                        YOUR SHOPPING CART IS EMPTY
                    </div>
                    <div>
                        We invite you to get acquainted with an assortment of
                        our shop. Surely you can find something for yourself!
                    </div>
                    <div className={boxBtnEmpty}>
                        <Button
                            content={'RETURN TO SHOP'}
                            onClick={handleNavigateToShop}
                        />
                    </div>
                </div>
            )}
        </>
    );
}

export default Contents;

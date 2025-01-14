import HeaderSidebar from '@components/ContentSideBar/components/HeaderSidebar/HeaderSidebar';
import { PiShoppingCartLight } from 'react-icons/pi';
import styles from './styles.module.scss';
import ItemProduct from '@components/ContentSideBar/components/ItemProduct/ItemProduct';
import Button from '@components/Button/Button';
import { useContext } from 'react';
import { SideBarContext } from '@contexts/SideBarProvider';
function Cart() {
    const { container, boxBtn, total } = styles;

    const { listProductCart } = useContext(SideBarContext);

    return (
        <div className={container}>
            <div>
                <HeaderSidebar
                    icon={
                        <PiShoppingCartLight
                            style={{
                                fontSize: '30px'
                            }}
                        />
                    }
                    title={'CART'}
                />

                {listProductCart.map((item, index) => {
                    return (
                        <ItemProduct
                            key={index}
                            src={item.images[0]}
                            nameProduct={item.name}
                            priceProduct={item.price}
                            sizeProduct={item.size}
                            quantity={item.quantity}
                        />
                    );
                })}
            </div>
            <div>
                <div className={total}>
                    <p>SUBTOTAL:</p>
                    <p>$199.99</p>
                </div>

                <div className={boxBtn}>
                    <Button content={'VIEW CART'} />
                    <Button content={'CHECKOUT'} isPrimary={false} />
                </div>
            </div>
        </div>
    );
}

export default Cart;

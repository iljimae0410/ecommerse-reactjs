import React, { useState } from 'react';
import styles from '../../styles.module.scss'; // import file SCSS
import SelectBox from '@pages/OurShop/components/SelectBox';
import LoadingCart from '@pages/Cart/components/Loading';

const CartTable = ({ listProductCart, getData, isLoading, getDataDelete }) => {
    const { cartTable } = styles;

    // Hàm thay đổi số lượng
    const handleQuantityChange = (id, newQuantity) => {
        const updatedCart = cartItems.map((item) =>
            item.id === id ? { ...item, quantity: newQuantity } : item
        );
        setCartItems(updatedCart);
    };

    // Tính subtotal (giá * số lượng)
    const calculateSubtotal = (item) => {
        return (item.price * item.quantity).toFixed(2);
    };

    const showOption = [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '6', value: '6' },
        { label: '7', value: '7' }
    ];

    const getValueSelect = (userId, productId, quantity, size) => {
        const data = {
            userId,
            productId,
            quantity,
            size,
            isMultiple: true
        };

        getData(data);
    };

    return (
        <div className={cartTable}>
            <table className='cart-table'>
                <thead>
                    <tr>
                        <th>PRODUCT</th>
                        <th />
                        <th>PRICE</th>
                        <th>SKU</th>
                        <th>QUANTITY</th>
                        <th>SUBTOTAL</th>
                    </tr>
                </thead>
                <tbody>
                    {listProductCart.map((item) => (
                        <tr key={item.id}>
                            <td>
                                <img src={item.images[0]} alt={item.name} />
                                <div>
                                    <p>{item.name}</p>
                                    <p>Size: {item.size}</p>
                                </div>
                            </td>
                            <td>
                                <div
                                    onClick={() =>
                                        getDataDelete({
                                            userId: item.userId,
                                            productId: item.productId
                                        })
                                    }

                                    style={{ 
                                        cursor: 'pointer'
                                     }}
                                >
                                    &#128465;
                                </div>
                            </td>
                            <td>${item.price}</td>
                            <td>{item.sku}</td>
                            <td>
                                <SelectBox
                                    options={showOption}
                                    getValue={(e) =>
                                        getValueSelect(
                                            item.userId,
                                            item.productId,
                                            e,
                                            item.size
                                        )
                                    }
                                    type='show'
                                    defaultValue={item.quantity}
                                />
                            </td>
                            <td>${calculateSubtotal(item)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isLoading && <LoadingCart />}
        </div>
    );
};

export default CartTable;

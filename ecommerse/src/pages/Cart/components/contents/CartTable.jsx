import React, { useState } from 'react';
import styles from '../../styles.module.scss'; // import file SCSS
import SelectBox from '@pages/OurShop/components/SelectBox';

function CartTable() {
    const { cartTable } = styles;
    // Dữ liệu mẫu mô phỏng các sản phẩm trong giỏ hàng
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: '10K Yellow Gold',
            price: 99.99,
            sku: '12345',
            quantity: 1,
            size: 'M',
            imageUrl: 'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min-285x340.jpg' // Chèn link ảnh minh hoạ
        },
        {
            id: 2,
            name: 'Amet faucibus nunc',
            price: 1879.99,
            sku: '87654',
            quantity: 1,
            size: 'M',
            imageUrl: 'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-7.1-min-285x340.jpg'
        },
        {
            id: 3,
            name: 'Consectetur nibh at',
            price: 119.99,
            sku: '12349',
            quantity: 1,
            size: 'L',
            imageUrl: 'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-2.1-min-285x340.jpg'
        }
    ]);

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
        { label: '7', value: '7' },
    ];

    const getValueSelect = (value, type) => {
        console.log(value, type);
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
                    {cartItems.map((item) => (
                        <tr key={item.id}>
                            <td>
                                <img src={item.imageUrl} alt={item.name} />
                                <div>
                                    <p>{item.name}</p>
                                    <p>Size: {item.size}</p>
                                </div>
                            </td>
                            <td>
                                <div onClick={() => handleDelete(item.id)}>
                                    &#128465;
                                </div>
                            </td>
                            <td>${item.price}</td>
                            <td>{item.sku}</td>
                            <td>
                                <SelectBox
                                    options={showOption}
                                    getValue={getValueSelect}
                                    type='show'
                                />
                            </td>
                            <td>${calculateSubtotal(item)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CartTable;

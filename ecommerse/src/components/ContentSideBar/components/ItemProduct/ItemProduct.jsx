import styles from './styles.module.scss';
import { IoClose } from "react-icons/io5";

function ItemProduct({
    src,
    nameProduct,
    priceProduct,
    skuProduct,
    sizeProduct,
    quantity
}) {
    const { container, boxContent, title, price, boxClose, size } = styles;
    return (
        <div className={container}>
            <img
                src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-2.1-min-285x340.jpg'
                alt=''
            />
            <div className={boxClose}>
                <IoClose style={{ fontSize: '20px',
                    color: '#c1c1c1',
                 }}/>
            </div>
            <div className={boxContent}>
                <div className={title}>{nameProduct}</div>
                <div className={size}>Size: {sizeProduct}</div>
                <div className={price}>{quantity} x ${priceProduct}</div>
                <div className={price}>SKU: {skuProduct}</div>
            </div>
        </div>
    );
}

export default ItemProduct;

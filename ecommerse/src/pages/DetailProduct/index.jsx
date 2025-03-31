import MyHeader from '@components/Header/Header';
import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import { PiShoppingCartThin } from 'react-icons/pi';
import { BsHeart } from 'react-icons/bs';
import { TfiReload } from 'react-icons/tfi';
import PaymentMethods from '@components/PaymentMethods/PaymentMethods';

function DetailProduct() {
    const {
        container,
        navigateSection,
        contentSection,
        imageBox,
        infoBox,
        price,
        description,
        boxSize,
        size,
        titleSize,
        functionInfo,
        boxBtn,
        incrementAmount,
        orSection,
        orLine,
        iconReaction,
        info
    } = styles;

    const srcMethods = [
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/visa.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/master-card.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/paypal.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/american-express.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/maestro.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/bitcoin.jpeg'
    ];
    return (
        <div>
            <MyHeader />
            <div className={container}>
                <MainLayout>
                    <div className={navigateSection}>
                        <div>Home {'>'} Men</div>
                        <div style={{ cursor: 'pointer' }}>
                            {'<'} Return to previous page{' '}
                        </div>
                    </div>

                    <div className={contentSection}>
                        <div className={imageBox}>
                            <img
                                src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-7.3-min.jpg'
                                alt=''
                            />
                            <img
                                src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-7.3-min.jpg'
                                alt=''
                            />
                            <img
                                src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-7.3-min.jpg'
                                alt=''
                            />
                            <img
                                src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-7.3-min.jpg'
                                alt=''
                            />
                        </div>
                        <div className={infoBox}>
                            <h1>Title Product</h1>
                            <p className={price}>$1,879.99</p>
                            <p className={description}>
                                Amet, elit tellus, nisi odio velit ut. Euismod
                                sit arcu, quisque arcu purus orci leo.
                            </p>

                            <p className={titleSize}>Size</p>
                            <div className={boxSize}>
                                <div className={size}>L</div>
                                <div className={size}>M</div>
                                <div className={size}>S</div>
                            </div>

                            <div className={functionInfo}>
                                <div className={incrementAmount}>
                                    <div>-</div>
                                    <div>1</div>
                                    <div>+</div>
                                </div>

                                <div className={boxBtn}>
                                    <Button
                                        content={
                                            <div>
                                                <PiShoppingCartThin /> ADD TO
                                                CART
                                            </div>
                                        }
                                    />
                                </div>
                            </div>

                            <div className={orSection}>
                                <div className={orLine}></div>
                                <div>OR</div>
                                <div className={orLine}></div>
                            </div>

                            <div>
                                <Button
                                    content={
                                        <div>
                                            <PiShoppingCartThin /> BUY NOW
                                        </div>
                                    }
                                    isPrimary={true}
                                />
                            </div>

                            <div className={iconReaction}>
                                <div>
                                    <BsHeart />
                                </div>
                                <div>
                                    <TfiReload />
                                </div>
                            </div>

                            <div>
                                <PaymentMethods />
                            </div>

                            <div className={info}>
                                <div>Brand: <span>Brand 03</span></div>
                                <div>SKU: <span>87654</span></div>
                                <div>Category: <span>Kem</span></div>
                            </div>
                        </div>
                    </div>
                </MainLayout>
            </div>
        </div>
    );
}

export default DetailProduct;

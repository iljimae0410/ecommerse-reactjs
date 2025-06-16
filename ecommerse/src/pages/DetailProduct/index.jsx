import MyHeader from '@components/Header/Header';
import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import { PiShoppingCartThin } from 'react-icons/pi';
import { BsHeart } from 'react-icons/bs';
import { TfiReload } from 'react-icons/tfi';
import PaymentMethods from '@components/PaymentMethods/PaymentMethods';
import AccordionMenu from '@components/AccordionMenu';
import { useState } from 'react';

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

    const [menuSelected, setMenuSelected] = useState(1);

    const dataAccordionMenu = [
        {
            id: 1,
            titleMenu: 'ADDITIONAL INFORMATION',
            contentJsx: <div>CONTENT ADDITIONAL</div>
        },
        {
            id: 2,
            titleMenu: 'REVIEW (0)',
            contentJsx: <div>CONTENT REVIEW</div>
        }
    ];

    const handleSetMenuSelected = (id) => {
        setMenuSelected(id);
    };

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
                                <div>
                                    Brand: <span>Brand 03</span>
                                </div>
                                <div>
                                    SKU: <span>87654</span>
                                </div>
                                <div>
                                    Category: <span>Kem</span>
                                </div>
                            </div>

                            {dataAccordionMenu.map((item, index) => (
                                <AccordionMenu
                                    key={index}
                                    titleMenu={item.titleMenu}
                                    contentJsx={item.contentJsx}
                                    onClick={() =>
                                        handleSetMenuSelected(item.id)
                                    }
                                    isSelected={menuSelected === item.id}
                                />
                            ))}
                        </div>
                    </div>
                </MainLayout>
            </div>
        </div>
    );
}

export default DetailProduct;

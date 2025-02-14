import { addProductToCart } from '@apis/cartService';
import Button from '@components/Button/Button';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';
import { OurShopContext } from '@contexts/OurShopProvider';
import { SideBarContext } from '@contexts/SideBarProvider';
import { ToastContext } from '@contexts/ToastProvider';
import cls from 'classnames';
import Cookies from 'js-cookie';
import { useContext, useEffect, useState } from 'react';
import { BsHeart } from 'react-icons/bs';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { LiaEyeSolid } from 'react-icons/lia';
import { TfiReload } from 'react-icons/tfi';
import styles from './styles.module.scss';

function ProductItem({
    src,
    prevSrc,
    name,
    price,
    details,
    isHomepage = true
}) {
    // const { isShowGrid } = useContext(OurShopContext);

    const [sizeChoose, setSizeChoose] = useState('');
    const ourShopStore = useContext(OurShopContext);
    const [isShowGrid, setIsShowGrid] = useState(ourShopStore?.isShowGrid);
    const userId = Cookies.get('userId');
    const { setIsOpen, setType, handleGetListProductCart, setDetailProduct } =
        useContext(SideBarContext);
    const { toast } = useContext(ToastContext);
    const [isLoading, setIsLoading] = useState(false);

    const {
        boxImg,
        showImgWhenHover,
        showFncWhenHover,
        boxIcon,
        title,
        priceCl,
        boxSize,
        size,
        textCenter,
        boxBtn,
        content,
        containerItem,
        leftBtn,
        largeImg,
        isActiveSize,
        btnClear
    } = styles;

    const handleChooseSize = (size) => {
        setSizeChoose(size);
    };

    const handleClearSize = (size) => {
        setSizeChoose('');
    };

    const handleAddToCart = () => {
        if (!userId) {
            setIsOpen(true);
            setType('login');
            toast.warning('Pleas login to add pruduct to cart');

            return;
        }

        if (!sizeChoose) {
            toast.warning('Please choose size');
            return;
        }

        const data = {
            userId,
            productId: details._id,
            size: sizeChoose,
            quantity: 1
        };

        setIsLoading(true);
        addProductToCart(data)
            .then((res) => {
                setIsOpen(true);
                setType('cart');
                toast.success('Add Product to cart successfully!');
                setTimeout(() => {
                    setIsLoading(false);
                }, 500);
                handleGetListProductCart(userId, 'cart');
            })
            .catch((err) => {
                toast.error('Add Product to cart failed!');
                setTimeout(() => {
                    setIsLoading(false);
                }, 500);
            });
    };

    const handleShowDetailProductSideBar = () => {
        setIsOpen(true);
        setType('detail');
        setDetailProduct(details);
    };

    useEffect(() => {
        if (isHomepage) {
            setIsShowGrid(true);
        } else {
            setIsShowGrid(ourShopStore?.isShowGrid);
        }
    }, [isHomepage, ourShopStore?.isShowGrid]);

    return (
        <div className={isShowGrid ? '' : containerItem}>
            <div
                className={cls(boxImg, {
                    [largeImg]: !isShowGrid
                })}
            >
                <img src={src} alt='' />
                <img src={prevSrc} alt='' className={showImgWhenHover} />

                <div className={showFncWhenHover}>
                    <div className={boxIcon}>
                        <HiOutlineShoppingBag
                            style={{
                                fontSize: '20px'
                            }}
                        />
                    </div>
                    <div className={boxIcon}>
                        <BsHeart
                            style={{
                                fontSize: '20px'
                            }}
                        />
                    </div>
                    <div className={boxIcon}>
                        <TfiReload
                            style={{
                                fontSize: '20px'
                            }}
                        />
                    </div>
                    <div
                        className={boxIcon}
                        onClick={handleShowDetailProductSideBar}
                    >
                        <LiaEyeSolid
                            style={{
                                fontSize: '20px'
                            }}
                        />
                    </div>
                </div>
            </div>

            <div className={isShowGrid ? '' : content}>
                {!isHomepage && (
                    <div className={boxSize}>
                        {details.size.map((item, index) => {
                            return (
                                <div
                                    className={cls(size, {
                                        [isActiveSize]: sizeChoose === item.name
                                    })}
                                    key={index}
                                    onClick={() => handleChooseSize(item.name)}
                                >
                                    {item.name}
                                </div>
                            );
                        })}
                    </div>
                )}

                {sizeChoose && (
                    <div className={btnClear} onClick={() => handleClearSize()}>
                        clear
                    </div>
                )}

                <div
                    className={cls(title, {
                        [textCenter]: !isHomepage
                    })}
                >
                    {name}
                </div>
                {!isHomepage && (
                    <div
                        className={textCenter}
                        style={{
                            color: '#888888'
                        }}
                    >
                        Brand 01
                    </div>
                )}
                <div
                    className={cls(priceCl, {
                        [textCenter]: !isHomepage
                    })}
                    style={{
                        color: isHomepage ? '#333' : '#888888'
                    }}
                >
                    ${price}
                </div>

                {!isHomepage && (
                    <div
                        className={cls(boxBtn, {
                            [leftBtn]: !isShowGrid
                        })}
                    >
                        <Button
                            content={
                                isLoading ? (
                                    <LoadingTextCommon />
                                ) : (
                                    'ADD TO CART'
                                )
                            }
                            onClick={() => handleAddToCart()}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductItem;

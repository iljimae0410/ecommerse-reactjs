import styles from './styles.module.scss';
import reLoadIcon from '@icons/svgs/reloadicon.svg';
import heartIcon from '@icons/svgs/hearticon.svg';
import cartIcon from '@icons/svgs/carticon.svg';
import cls from 'classnames';
import Button from '@components/Button/Button';
import { useContext, useEffect, useState } from 'react';
import { OurShopContext } from '@contexts/OurShopProvider';

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
                        <img src={cartIcon} alt='cartIcon' />
                    </div>
                    <div className={boxIcon}>
                        <img src={heartIcon} alt='heartIcon' />
                    </div>
                    <div className={boxIcon}>
                        <img src={reLoadIcon} alt='reLoadIcon' />
                    </div>
                    <div className={boxIcon}>
                        <img src={cartIcon} alt='cartIcon' />
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
                        <Button content={'ADD TO CART'} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductItem;

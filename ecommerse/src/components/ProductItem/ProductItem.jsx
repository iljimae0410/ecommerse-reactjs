import styles from './styles.module.scss';
import reLoadIcon from '@icons/svgs/reloadicon.svg';
import heartIcon from '@icons/svgs/hearticon.svg';
import cartIcon from '@icons/svgs/carticon.svg';

function ProductItem({ src, prevSrc, name, price }) {
    const {
        boxImg,
        showImgWhenHover,
        showFncWhenHover,
        boxIcon,
        title,
        priceCl
    } = styles;
    return (
        <div>
            <div className={boxImg}>
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
            <div className={title}>{name}</div>
            <div className={priceCl}>${price}</div>
        </div>
    );
}

export default ProductItem;

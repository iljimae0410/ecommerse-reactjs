import { useContext } from 'react';
import styles from './styles.module.scss';
import { SideBarContext } from '@contexts/SideBarProvider';
import SliderCommon from '@components/SliderCommon/SliderCommon';

function DetailProduct() {
    const {container} = styles;
    const { detailProduct } = useContext(SideBarContext);
    
    return <div className={container}>
        <SliderCommon data={detailProduct.images}/>
    </div>;
}

export default DetailProduct;

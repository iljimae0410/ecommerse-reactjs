import Banner from '@components/Banner/Banner';
import MyHeader from '@components/Header/Header';
import styles from './styles.module.scss';
import Info from '@components/Info/Info';
import AdvanceHeadling from '@components/AdvanceHeadling/AdvanceHeadling';
import HeadingListProduct from '@components/HeadingListProduct/HeadingListProduct';
import { useEffect, useState } from 'react';
import { getProducts } from '@/apis/productService';
import PopularProduct from '@components/PopularProduct/PopularProduct';
import SaleHomepage from '@components/SaleHomepage/SaleHomepage';
import MyFooter from '@components/Footer/Footer';

function HomePage() {
    const { container } = styles;

    const [listProducts, setListProducts] = useState([]);

    useEffect(() => {
        const query = {
            sortType: 0,
            page: 1,
            limit: 10
        };

        getProducts(query).then((res) => {
            setListProducts(res.contents);
        });
    }, []);

    return (
        <div>
            <div className={container}>
                <MyHeader />
                <Banner />
                <Info />
                <AdvanceHeadling />
                <HeadingListProduct data={listProducts.slice(0, 2)} />
                <PopularProduct data={listProducts.slice(2, 10)} />
                <SaleHomepage />
                <MyFooter />
            </div>
        </div>
    );
}

export default HomePage;

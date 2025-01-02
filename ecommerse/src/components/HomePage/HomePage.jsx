import Banner from '@components/Banner/Banner';
import MyHeader from '@components/Header/Header';
import styles from './styles.module.scss';
import Info from "@components/Info/Info";
import AdvanceHeadling from '@components/AdvanceHeadling/AdvanceHeadling';
import HeadingLisProduct from '@components/HeadingListProduct/HeadingListProduct';

function HomePage() {
    const { container } = styles;
    return (
        <div>
            <div className={container}>
                <MyHeader />
                <Banner />
                <Info/>
                <AdvanceHeadling/>
                <HeadingLisProduct/>
            </div>
        </div>
    );
}

export default HomePage;

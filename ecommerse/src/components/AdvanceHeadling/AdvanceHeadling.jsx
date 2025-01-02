import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';

function AdvanceHeadling() {
    const { container, headline, des, title, containerMiddleBox } = styles;
    return (
        <div className={''}>
            <MainLayout>
                <div className={container}>
                    <div className={headline}></div>
                    <div className={containerMiddleBox}>
                        <div className={des}>don't miss super offers</div>
                        <div className={title}>Our best products</div>
                    </div>
                    <div className={headline}></div>
                </div>
            </MainLayout>
        </div>
    );
}

export default AdvanceHeadling;

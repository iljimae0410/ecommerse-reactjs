import CountdownTimer from '@components/CountdownTimer/CountdownTimer';
import styles from '../styles.module.scss';
import Button from '@components/Button/Button';

function Banner() {
    const { containerBanner, contentBox, title } = styles;

    const targetDate = '2025-12-31T00:00:00';
    return (
        <div className={containerBanner}>
            <div className={contentBox}>
                <CountdownTimer targetDate={targetDate} />
            </div>
            <div className={title}>The Classics Make A Comeback</div>
            <div style={{ 
                width: '172px'
             }}>
                <Button content={'Buy now'} isPrimary={true} />
            </div>
        </div>
    );
}

export default Banner;

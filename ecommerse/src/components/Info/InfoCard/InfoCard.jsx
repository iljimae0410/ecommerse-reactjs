import styles from '../styles.module.scss';
import TruckIcon from '@icons/svgs/truckicon.svg';

function InfoCard({content, description, src}) {
    const { containerCard, containerContent, title, des } = styles;
    return (
        <div className={containerCard}>
            <img width={40} height={40.5} src={src} alt='TruckIcon' />
            <div className={containerContent}>
                <div className={title}>{content}</div>
                <div className={des}>{description}</div>
            </div>
        </div>
    );
}

export default InfoCard;

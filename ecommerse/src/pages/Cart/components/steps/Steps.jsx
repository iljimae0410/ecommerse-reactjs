import Stepper from '@pages/Cart/components/steps/Stepper';
import styles from '../../styles.module.scss';

function Steps() {
    const { containerSteps, line, steps, textNoti } = styles;

    const dataSteps = [
        { number: 1, content: 'Shopping cart' },
        { number: 2, content: 'Check out' },
        { number: 3, content: 'Order status' }
    ];
    return (
        <div className={containerSteps}>
            <div className={steps}>
                {dataSteps.map((item, index) => {
                    return (
                        <>
                            <Stepper
                                key={index}
                                number={item.number}
                                content={item.content}
                                isDisabled={index !== 0 }
                            />
                            {index !== dataSteps.length - 1 && (
                                <div className={line}></div>
                            )}
                        </>
                    );
                })}
            </div>
            <div className={textNoti}>
                You are not out of time! Checkout now to avoid losing your order!
            </div>
        </div>
    );
}

export default Steps;

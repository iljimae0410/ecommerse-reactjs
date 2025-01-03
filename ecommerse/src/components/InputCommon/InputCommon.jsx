import styles from './styles.module.scss';

function InputCommon({ lable, type, isRequired = false }) {
    const { labelInput, boxInput, container } = styles;
    return (
        <div className={container}>
            <div className={labelInput}>
                {lable} {isRequired && <span>*</span>}
            </div>
            <div className={boxInput}>
                <input type={type} />
            </div>
        </div>
    );
}

export default InputCommon;

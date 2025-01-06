import { useState } from 'react';
import styles from './styles.module.scss';
import { FiEye, FiEyeOff } from 'react-icons/fi';

function InputCommon({ lable, type, isRequired = false }) {
    const { labelInput, boxInput, container, boxIcon } = styles;

    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === 'password';

    const isShowTextPassword =
        type === 'password' && showPassword ? 'text' : type;

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={container}>
            <div className={labelInput}>
                {lable} {isRequired && <span>*</span>}
            </div>
            <div className={boxInput}>
                <input type={isShowTextPassword} />
                {isPassword && (
                    <div className={boxIcon} onClick={handleShowPassword}>
                        {showPassword ? <FiEye /> : <FiEyeOff />}
                    </div>
                )}
            </div>
        </div>
    );
}

export default InputCommon;

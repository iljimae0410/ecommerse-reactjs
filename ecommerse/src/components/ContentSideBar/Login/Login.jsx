import InputCommon from '@components/InputCommon/InputCommon';
import styles from './styles.module.scss';

function Login() {
    const { container, title } = styles;
    return (
        <div className={container}>
            <div className={title}>SIGN IN</div>
            <InputCommon lable='Email' type='text' isRequired/>
            <InputCommon lable='Password' type='password' isRequired/>
        </div>
    );
}

export default Login;

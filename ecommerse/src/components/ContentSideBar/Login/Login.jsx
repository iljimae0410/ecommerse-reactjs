import InputCommon from '@components/InputCommon/InputCommon';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useContext, useEffect, useState } from 'react';
import { ToastContext } from '@contexts/ToastProvider';
import { getInfo, register, signIn } from '@apis/authService';
import Cookies from 'js-cookie';
import { SideBarContext } from '@contexts/SideBarProvider';
import { StoreContext } from '@contexts/StoreProvider';

function Login() {
    const { container, title, boxRememberMe, lostPw } = styles;
    const [isRegister, setIsRegister] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useContext(ToastContext);
    const { setIsOpen, handleGetListProductCart } = useContext(SideBarContext);
    const { setUserId } = useContext(StoreContext);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email')
                .required('Email is required'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required'),
            cfmpassword: Yup.string().oneOf(
                [Yup.ref('password'), null],
                'Passwords must match'
            )
        }),
        onSubmit: async (values) => {
            if (isLoading) return;

            const { email: username, password } = values;

            setIsLoading(true);

            if (isRegister) {
                await register({ username, password })
                    .then((res) => {
                        toast.success(res.data.message);

                        setTimeout(() => {
                            setIsLoading(false);
                        }, 3000);
                    })
                    .catch((err) => {
                        toast.error(err.response.data.message);
                        setTimeout(() => {
                            setIsLoading(false);
                        }, 3000);
                    });
            }

            if (!isRegister) {
                setIsLoading(true);
                await signIn({ username, password })
                    .then((res) => {
                        setTimeout(() => {
                            setIsLoading(false);
                        }, 3000);
                        const { id, token, refreshToken } = res.data;
                        setUserId(id);
                        Cookies.set('token', token);
                        Cookies.set('refreshToken', refreshToken);
                        Cookies.set('userId', id);
                        toast.success('Sign in successfully!');                        
                        setIsOpen(false);
                        handleGetListProductCart(id, 'cart');
                        window.location.reload();
                    })
                    .catch((err) => {
                        setTimeout(() => {
                            setIsLoading(false);
                        }, 3000);
                        toast.error('Sign in failed!');
                    });
            }
        }
    });

    const handleToggle = () => {
        setIsRegister(!isRegister);
        formik.resetForm();
    };

    return (
        <div className={container}>
            <div className={title}>{isRegister ? 'SIGN UP' : 'SIGN IN'}</div>
            <form onSubmit={formik.handleSubmit}>
                <InputCommon
                    id='email'
                    lable='Email'
                    type='text'
                    isRequired
                    formik={formik}
                />
                <InputCommon
                    id='password'
                    lable='Password'
                    type='password'
                    isRequired
                    formik={formik}
                />
                {isRegister && (
                    <InputCommon
                        id='cfmpassword'
                        lable='Confirm Password'
                        type='password'
                        isRequired
                        formik={formik}
                    />
                )}
                {!isRegister && (
                    <div className={boxRememberMe}>
                        <input type='checkbox' />
                        <span>Remember me</span>
                    </div>
                )}
                <Button
                    content={
                        isLoading
                            ? 'LOADING...'
                            : isRegister
                            ? 'REGISTER'
                            : 'LOGIN'
                    }
                    type='submit'
                />
            </form>
            <Button
                content={
                    isRegister
                        ? 'Already have an account?'
                        : 'Don"t have an account?'
                }
                type='submit'
                isPrimary={false}
                style={{
                    marginTop: '10px'
                }}
                onClick={handleToggle}
            />
            {!isRegister && <div className={lostPw}>Lost your password</div>}
        </div>
    );
}

export default Login;

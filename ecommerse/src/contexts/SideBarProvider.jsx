import { getCart } from '@apis/cartService';
import Cookies from 'js-cookie';
import { createContext, useEffect, useState } from 'react';

export const SideBarContext = createContext();

export const SidebarProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [type, setType] = useState('');
    const [listProductCart, setListProductCart] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const userId = Cookies.get('userId');
    const [detailProduct, setDetailProduct] = useState(null);

    const handleGetListProductCart = (userId, type) => {
        if (userId && type === 'cart') {
            setIsLoading(true);
            getCart(userId)
                .then((res) => {
                    setListProductCart(res.data.data);
                    setIsLoading(false);
                })
                .catch((err) => {
                    setListProductCart([]);
                    setIsLoading(false);
                });
        }
    };

    const value = {
        isOpen,
        setIsOpen,
        type,
        setType,
        handleGetListProductCart,
        listProductCart,
        isLoading,
        setIsLoading,
        userId,
        detailProduct,
        setDetailProduct
    };

    useEffect(() => {
        handleGetListProductCart(userId, 'cart');
    }, []);

    return (
        <SideBarContext.Provider value={value}>
            {children}
        </SideBarContext.Provider>
    );
};

import React, { useState ,createContext, useEffect } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [loading, setLoading] = useState(false)

    const totalPrice = cart.reduce(
        (total, item) => total + item.count * item.precio, 0
    );

    const calcCount = () => {
        
        let total = 0;
        cart.forEach(item => {
            total += item.count;
        });
        setTotalCount(total);

    }

    useEffect(()=>{
        calcCount()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cart])

    const addToCart = (item) => {
        const indexDetail = cart.findIndex((cartItem) => cartItem.id === item.id)
        if(indexDetail !== -1){
            const copyCart = [...cart];
            copyCart[indexDetail].count = copyCart[indexDetail].count + item.count;
            setCart(copyCart);
        }else{
            setCart([ ...cart, item ]);
        }
    }
    const removeFromCart = (id) => {
        setCart(cart.filter(detail=>detail.id !== id))
    };
    const buyAll = () => setCart([]);

    return (
        <CartContext.Provider value={{ loading, setLoading, cart, addToCart, removeFromCart, buyAll, totalCount, totalPrice }}>
        {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;

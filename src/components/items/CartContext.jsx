import React, { useState ,createContext, useEffect } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

    
    const [cart, setCart] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [addedToCart, setAddedToCart] = useState(false)

    const calcCount = () => {
        
        let total = 0;
        cart.forEach(item => {
        total += item.count;
        });
        setTotalCount(total);

    }
    console.log()

    useEffect(()=>{
        calcCount()
        console.log(cart)
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
    const added = () => {
        setAddedToCart(true)
    }
    const removeFromCart = (id) => {
        setCart(cart.filter(detail=>detail.id !== id))
    };
    const buyAll = () => setCart([]);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, buyAll, addedToCart, added, totalCount }}>
        {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;

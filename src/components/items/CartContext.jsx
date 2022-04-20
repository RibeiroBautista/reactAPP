import React, { useState ,createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [addedToCart, setAddedToCart] = useState(true)

    const addToCart = (item) => [...cart, item];
    const added = () => {
        setAddedToCart(false)
    }
    const removeFromCart = (id) => {
        setCart([cart.filter(productos=>productos.id !== id)])
    };
    const buyAll = () => setCart([]);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, buyAll, addedToCart, added }}>
        {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;

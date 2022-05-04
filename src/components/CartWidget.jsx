import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./items/CartContext";

export default function CartWidget() {

    const { cart, totalCount } = useContext(CartContext)

    return(
        <Link to='/cart'>
        {cart.length === 0 ? <h5>🛒</h5> : <h5>🛒({totalCount})</h5>}
        </Link>);
}
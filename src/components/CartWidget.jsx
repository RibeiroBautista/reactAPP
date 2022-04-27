import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./items/CartContext";

export default function CartWidget() {

    const { totalCount } = useContext(CartContext)
    const { empty } = useContext(CartContext)

    return(
        <Link to='/cart'>
        {empty === true ? <h5>🛒</h5> : <h5>🛒({totalCount})</h5>}
        </Link>);
}
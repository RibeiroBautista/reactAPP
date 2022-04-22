import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./items/CartContext";

export default function CartWidget() {

    const { totalCount } = useContext(CartContext)

    return (

        <> 
        <div>
            <Link to="/cart">
                <h5>🛒({totalCount})</h5>
            </Link>
        </div>
        </>
    
    );
}
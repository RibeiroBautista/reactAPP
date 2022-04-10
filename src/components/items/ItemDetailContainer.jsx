import React, { useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
import ItemDetailList from "./ItemDetailList";
import productos from "../utils/productos";

export default function ItemDetailContainer() {

    const [details, setDetails] = useState([]);

    useEffect(() => {

        customFetch(2000, productos)
        .then(resultado => 
            setDetails(resultado))
        .catch(error => 
            console.log(error));

    }, [details])

    console.log(details);

    return (
        <>
            <ItemDetailList productos={details}/>
        </>
    )

}

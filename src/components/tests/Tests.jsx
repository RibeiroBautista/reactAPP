import React, { useEffect, useState } from 'react'
import { doc, getDoc, getFirestore} from 'firebase/firestore'

function Tests() {

    useEffect(()=>{

        const db = getFirestore();

        const perritoRef = doc(db, "productos", 'yVwQtxfXAIkcJeU3aV9E')

        getDoc(perritoRef).then((res)=>{
            const juntar = { id: res.id, ...res.data()};

            console.log(juntar)
        })
    }, [])

    return (
        <>
        
        </>
    )
}

export default Tests
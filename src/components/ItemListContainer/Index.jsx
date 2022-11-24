import React from "react";
import ItemCount from "../ItemCount/index";
import Title from "../Title";

export const ItemListContainer = ({ texto }) => {
    
    const onAdd = (quantity) => {
        console.log(` compraste ${quantity} unidades `);

    }
    return (
        <>
        <Title greting={texto} />
        <ItemCount initial={1} stock={5} onAdd={onAdd} />
        </>
    );
}

export default ItemListContainer;
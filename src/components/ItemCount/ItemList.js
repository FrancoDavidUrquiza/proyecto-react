import React from "react";
import Item from "./Item";


const ItemList = ( { products } ) => {
    
    return (
        <>
            
            { products.map((product =>{
              console.log(product)
              return(
                <Item key={product.id} title={product.title} price={product.price} image={product.image}/>
              )
            }))}
        
        </>
    );
}

export default ItemList;
import React from "react";
import ItemCard from "./ItemCard";




const ItemList = ( { products } ) => {

  
    return (
        <>
            
            { products.map((product =>{
              
              return(
              <ItemCard key={product.id} id={product.id}  title={product.title} price={product.price} image={product.image}/>
                 
              )
            }))}
        
        </>
    );
}

export default ItemList;
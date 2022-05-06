import React from "react";
import { useParams } from "react-router-dom";
import ItemCard from "./ItemCard";




const ItemList = ( { products } ) => {
  const { categoryId } = useParams()
  console.log(categoryId)
  
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
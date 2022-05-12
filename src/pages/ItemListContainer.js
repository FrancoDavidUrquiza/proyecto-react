import React from "react";
import '../hojas-de-estilos/itemList.css'
import { useState,useEffect }  from 'react'
// import getData from "../../services/get";
import ItemList from "../components/ItemCount/ItemList";
import { useParams } from "react-router-dom";


function getData(category){
  const myPromise  = new Promise ((resolve,rejeted) =>{
    const data = [
      {
        id: 1,
        image:
          "https://3.bp.blogspot.com/-UoRFPSKXm2M/VEOTEznPGVI/AAAAAAAABSk/0LHdYlhheaY/s1600/img1413714407476.jpg",
        title: "Gorro a Crochet",
        descripcion: "este es el primer producto",
        category: "gorro",
        price: "3500",
        stock: "4",
      },
      {
        id: 2,
        image: "https://www.handworkdiy.com/wp-content/uploads/2020/10/crochet-scarf.png",
        title: "Bufanda a Crochet",
        descripcion: "este es el segundo producto",
        category: "bufanda",
        price: "5200",
        stock: "10",
      },
      {
        id: 3,
        image:
          "https://i.pinimg.com/originals/8c/43/b4/8c43b48d32062f2ec1e65e277eb923cc.jpg",
        title: "Buzo a Crochet",
        descripcion: "este es el tercero producto",
        category: "buzo",
        price: "12000",
        stock: "5",
      },
      
      
    ]; 
    
    const productsFiltered = category ? data.filter(p => p.category === category): data;

    
    
      resolve(productsFiltered);

    
  });
  return myPromise;
}  






function ItemListContainer (){

  const [products,setProducts] = useState([]);
  const { categoryId } = useParams();
  console.log(categoryId);
  console.log(products)

  useEffect(()=>{
    getData(categoryId)
      .then((response)=>setProducts(response))
      .catch((error)=>console.log("el error",error))
    
  },[categoryId])

  return(
    <div className="itemList-principal">
      <ItemList products={products} />

    </div>
    
    
  );
}

export default ItemListContainer;
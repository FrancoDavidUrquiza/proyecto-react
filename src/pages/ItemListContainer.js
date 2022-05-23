import React from "react";
import '../hojas-de-estilos/itemList.css'
import { useState,useEffect }  from 'react'
// import getData from "../../services/get";
import ItemList from "../components/ItemCount/ItemList";
import { useParams } from "react-router-dom";
import {collection,getDocs,getFirestore,query, where} from 'firebase/firestore'
import Spinner  from '../components/Spinner/Spinner.js';



function getData(category){
  const db = getFirestore();

    const itemCollection = collection(db, 'items');

    const q = category && query(
      itemCollection,
      where('category', '==', category),
      // limit(1)

    )

   return getDocs(q || itemCollection)
  
}  






function ItemListContainer (){

  const [products,setProducts] = useState([]);
  const [load,setLoad] = useState(true)
  const { categoryId } = useParams();
  

  useEffect(()=>{
    setLoad(true)
    getData(categoryId)
      
      .then(snapshop => {
        
        setProducts(snapshop.docs.map(doc => {
           return { ...doc.data(), id : doc.id }
          }));
        setLoad(false)  
         
      })
      .catch((error)=>console.log("el error",error))
    
  },[categoryId])

  return(
    <div className="itemList-principal">
      { load ? <Spinner/> : <ItemList products={products} />}

    </div>
    
    
  );
}

export default ItemListContainer;
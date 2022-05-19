import React from "react";
import '../hojas-de-estilos/itemList.css'
import { useState,useEffect }  from 'react'
// import getData from "../../services/get";
import ItemList from "../components/ItemCount/ItemList";
import { useParams } from "react-router-dom";
import {collection,getDocs,getFirestore,query, where, limit, doc } from 'firebase/firestore'


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
  const { categoryId } = useParams();
  // console.log(categoryId);
  // console.log(products)

  useEffect(()=>{
    // const db = getFirestore();

    // const itemCollection = collection(db, 'items');

    // const q = query(
    //   itemCollection,
    //   where('price', '<', 5000),
    //   limit(1)

    // )

    // getDocs(q)
    //   .then(snapshot=>{
    //     console.log(snapshot.docs.map(doc => { 
    //       return { ...doc.data(), id : doc.id }
    //     }))
    //   })
    //   .catch(
    //     err => console.log(err)
    //   );

    getData(categoryId)
      .then(snapshop => {
        setProducts(snapshop.docs.map(doc => {
           return { ...doc.data(), id : doc.id }
          }));
      })
      .catch((error)=>console.log("el error",error))
    
  },[categoryId])

  return(
    <div className="itemList-principal">
      <ItemList products={products} />

    </div>
    
    
  );
}

export default ItemListContainer;
import React, { useEffect,useState } from 'react';

import Item from './Item';



const getItem = () =>{
  const myPromise = new Promise((resolve,rejeted)=>{
    const item = {
      id: 1,
      image:
      "https://3.bp.blogspot.com/-UoRFPSKXm2M/VEOTEznPGVI/AAAAAAAABSk/0LHdYlhheaY/s1600/img1413714407476.jpg",
      title: "Gorro a Crochet",
      discount:"5% de descuento pagando por transferencia bancaria",
      descripcion: "este es el primer producto",
      price: "1500 $",
    }
    setTimeout(()=>{
      resolve(item);
    },2000);
  });
  return myPromise
}


function ItemDetailContainer() {

  const [item,setItem] = useState([]);
  

  useEffect (()=>{
    
    getItem()
      .then(res =>{
        setItem(res)
      
      })
      .catch(err => {
        console.log(err);
        alert('Ocurrio un error');
      });

  },[]);
  
  return (
    <>
      <Item item={item}  />


    </>
      
  );
}
export default ItemDetailContainer;
import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';

import Item from '../components/ItemDetail/Item';



const getItem = (id) =>{
  const myPromise = new Promise((resolve,rejeted)=>{
    const data = [
      {
        id: 1,
        image:
          "https://3.bp.blogspot.com/-UoRFPSKXm2M/VEOTEznPGVI/AAAAAAAABSk/0LHdYlhheaY/s1600/img1413714407476.jpg",
        title: "Gorro a Crochet",
        descripcion: "este es el primer producto",
        categoria: "Procesadores",
        price: "3500",
        stock: "4",
      },
      {
        id: 2,
        image: "https://www.handworkdiy.com/wp-content/uploads/2020/10/crochet-scarf.png",
        title: "Bufanda a Crochet",
        descripcion: "este es el segundo producto",
        categoria: "",
        price: "5200",
        stock: "10",
      },
      {
        id: 3,
        image:
          "https://i.pinimg.com/originals/8c/43/b4/8c43b48d32062f2ec1e65e277eb923cc.jpg",
        title: "Buzo a Crochet",
        descripcion: "este es el tercero producto",
        categoria: "",
        price: "12000",
        stock: "5",
      },
      
      
    ]; 
    const item = data.filter(item => item.id == id)
    setTimeout(()=>{
      resolve(item[0]);
    },2000);
  });
  return myPromise
}


function ItemDetailContainer() {

  const [item,setItem] = useState([]);
  const { id } = useParams();
  

  useEffect (()=>{
    
    getItem(id)
      .then(res =>{
        setItem(res)
      
      })
      .catch(err => {
        console.log(err);
        alert('Ocurrio un error');
      });

  },[id]);
  
  return (
    <>
      <Item item={item}  />


    </>
      
  );
}
export default ItemDetailContainer;
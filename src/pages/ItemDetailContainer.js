import React, {  useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc,getDoc, getFirestore } from 'firebase/firestore'
import Item from '../components/ItemDetail/Item';




const getItem = (id) =>{
  const db = getFirestore();

  const itemRef = doc(db,'items', id);

  return getDoc(itemRef);
  
}


function ItemDetailContainer() {

  const [item,setItem] = useState([]);
  const { id } = useParams();

  useEffect (()=>{
    getItem(id)
      .then(snapshot =>{
        setItem({...snapshot.data(), id : snapshot.id})
      
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
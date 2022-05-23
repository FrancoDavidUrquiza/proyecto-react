import React, {  useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc,getDoc, getFirestore } from 'firebase/firestore'
import Item from '../components/ItemDetail/Item';
import Spinner from '../components/Spinner/Spinner.js'

const getItem = (id) =>{
  const db = getFirestore();
  const itemRef = doc(db,'items', id);
  return getDoc(itemRef);
}


function ItemDetailContainer() {

  const [item,setItem] = useState([]);
  const [ load,setLoad] = useState(true)
  const { id } = useParams();

  useEffect (()=>{
    setLoad(true)
    getItem(id)
      .then(snapshot =>{
        setItem({...snapshot.data(), id : snapshot.id})
        setLoad(false)
      })
      .catch(err => {
        console.log(err);
        alert('Ocurrio un error');
      });
      

  },[id]);
  
  return (
    <>
      { load ? <Spinner/> : <Item item={item}  />}


    </>
      
  );
}
export default ItemDetailContainer;
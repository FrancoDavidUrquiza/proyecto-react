import './App.css';
import './hojas-de-estilos/cabecera.css'
import './hojas-de-estilos/cartWidget.css'
import './hojas-de-estilos/ItemCount.css'
import './hojas-de-estilos/itemDetail.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ItemCount from './components/ItemCount/ItemCount';
import getData from './services/get';
import ItemList from './components/ItemCount/ItemList';
import { useEffect, useState } from 'react';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import { Routes, Route } from 'react-router-dom'



function App() {
  
  const [products,setProducts] = useState([]);
  
  
  useEffect(()=>{
    getData
      .then((response)=>setProducts(response))
      .catch((error)=>console.log("el error",error))
  },[])

  return (
    <div className="App">
      <NavBar />
      <div className='ItemListContainer-principal'>
        <ItemListContainer gretting={'Hey there We are Fabrica'}/>
      </div>
      <div className='ItemDetailContainer-app'>
      <Routes>
        <Route path='/item/:id' element={<ItemDetailContainer />}/>
      </Routes>
      </div>
      <div className='ItemCount-principal'>
        {/* <ItemCount initial={1} stock={5} /> */}
        <Routes>
          <Route path='/' element={<ItemList products={products} />} />
          <Route path='/category/:categoryId' element={<ItemList products={products} />}/>
        </Routes>
          
      </div>
    </div>
    
    
  );
}
export default App;


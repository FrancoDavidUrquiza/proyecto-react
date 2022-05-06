import './App.css';
import './hojas-de-estilos/cabecera.css'
import './hojas-de-estilos/cartWidget.css'
import './hojas-de-estilos/ItemCount.css'
import './hojas-de-estilos/itemDetail.css'
import NavBar from './components/NavBar/NavBar.jsx';
// import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ItemCount from './components/ItemCount/ItemCount';
import getData from './services/get';
import ItemList from './components/ItemCount/ItemList';
import { useEffect, useState } from 'react';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import { Route, Routes} from 'react-router-dom';




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
        {/* <ItemListContainer gretting={'Hey there We are Fabrica'}/> */}
      </div>
      <div className='ItemDetailContainer-app'>
        <Routes>
          <Route path='/item/:id' element={<ItemDetailContainer />}></Route>
          <Route path='/' element={<ItemList products={products}  />}></Route>
          <Route path='/category/:categoryId' element={<ItemList products={products} />}></Route>
        </Routes>
        
      
      </div>
      {/* <div className='ItemCount-principal'>
        <ItemCount initial={1} stock={5} />
      </div> */}
    </div>
    
    
  );
}
export default App;


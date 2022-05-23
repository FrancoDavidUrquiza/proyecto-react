import NavBar from './components/NavBar/NavBar.jsx';
import ItemDetailContainer from './pages/ItemDetailContainer.js';
import { Route, Routes} from 'react-router-dom';
import ItemListContainer from './pages/ItemListContainer.js';
import Cart from './pages/Cart';
import CheckOut from './components/CheckOut/CheckOut.js';

import './App.css';
import './hojas-de-estilos/cabecera.css'
import './hojas-de-estilos/cartWidget.css'
import './hojas-de-estilos/ItemCount.css'
import './hojas-de-estilos/itemDetail.css'
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  
  

  return (
    <div className="App">
      <NavBar />
      <div className='ItemDetailContainer-app'>
          
        <Routes>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/item/:id' element={<ItemDetailContainer />}/> 
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/category/:categoryId' element={<ItemListContainer />}/>
          <Route path='/checkout' element={<CheckOut />}/>
        </Routes>
      </div>
        
    
    </div>
    
    
  );
}
export default App;


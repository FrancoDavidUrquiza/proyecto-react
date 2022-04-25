import './App.css';
import './hojas-de-estilos/cabecera.css'
import './hojas-de-estilos/cartWidget.css'
import './hojas-de-estilos/ItemCount.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  
  

  return (
    <div className="App">
      <NavBar></NavBar>
      <div className='ItemListContainer-principal'>
        <ItemListContainer gretting={'Hey there We are Fabrica'}></ItemListContainer>
      </div>
      <div className='ItemCount-principal'>
        <ItemCount initial={1} stock={5} />
      </div>
    </div>
    
    
  );
}
export default App;


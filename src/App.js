import './App.css';
import './hojas-de-estilos/cabecera.css'
import './hojas-de-estilos/cartWidget.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/itemListContainer/itemListContainer.js';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className='ItemListContainer-principal'>
        <ItemListContainer gretting={'Hey there We are Fabrica'}></ItemListContainer>
      </div>
    </div>
    
    
  );
}
export default App;


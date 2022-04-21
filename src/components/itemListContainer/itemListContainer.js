import React from "react";
import '../../hojas-de-estilos/ItemListContainer.css'

function ItemListContainer ( { gretting } ){
  return(
    <div className="ItemListContainer-secundario">
      <div className="ItemListContainer-texto">
        <h1>{gretting}</h1>
        </div>
      <div className="ItemListContainer-biografia">
        <h3>An international award-winning, multi-disciplinary creative agency founded by creative professional - designers and artists w/18 years of experience</h3>

      </div>

    </div>
    
    
  );
}

export default ItemListContainer;
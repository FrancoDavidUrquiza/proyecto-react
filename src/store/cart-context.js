import { createContext, useState } from "react";

const CartContext = createContext({
  products: []
});



export const CartContextProvider = ({ children }) =>  {

  const [productsList, setProductsList] = useState([]);

  const addProduct = ( product ) =>{
    setProductsList([product,...productsList])
  }
  const removeProduct = (id) =>{
    setProductsList(productsList.filter(i => i.id !== id));
  }
  const clear = () =>{
    setProductsList([]);
  }
  const isInCart = (id)=>{

  }

  return (
    <CartContext.Provider value={{
      products:productsList,
      addProduct:addProduct,
      removeProduct:removeProduct,
      clear:clear,
      isInCart:isInCart,

    }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
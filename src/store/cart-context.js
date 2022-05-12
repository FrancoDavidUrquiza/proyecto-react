import { createContext, useState } from "react";

const CartContext = createContext({
  products: [],
  addProduct: () =>{},
  removeProduct:()=>{},
  clear: ()=>{},
  isInCart: ()=>{},
  
});



export const CartContextProvider = ({ children }) =>  {

  const [productsList, setProductsList] = useState([]);

  const addProduct = ( product ) =>{
    const repeatedItemIndex = productsList.findIndex(item => item.id === product.id)
    if(repeatedItemIndex !== -1){
      setProductsList(productsList.map(p => p.id === product.id ? {...p, quantity: p.quantity + product.quantity}:p));

    }else{
      setProductsList([product,...productsList]);
    }
  }
  

  const removeProduct = (id) => {
    const indexToRemove = productsList.findIndex(item => item.id === id);
    if (productsList[indexToRemove].quantity === 1) {
        setProductsList(productsList.filter(i => i.id !== id))
    } else {
        setProductsList(productsList.map(p => p.id === id ? {...p, quantity: p.quantity - 1} : p));
    }
}
  
  const clear = () =>{
    setProductsList([]);
  }
  
  const isInCart = (id)=>{
    return productsList.map(p=>p.id).indexOf(id) !== -1;
  }

  


  return (
    <CartContext.Provider value={{
      products:productsList,
      addProduct,
      removeProduct,
      clear,
      isInCart,
      

    }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
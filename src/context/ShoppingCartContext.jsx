import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const ShoppingCartProvider = ({ children }) => {
  const [cart, setcart] = useState([]);

  const longitud = cart.length;

  console.log(longitud);

  const nombre = "lorena";

  return (
    <CartContext.Provider value={{ cart, setcart, nombre, longitud }}>
      {children}
    </CartContext.Provider>
  );
};

export default ShoppingCartProvider;

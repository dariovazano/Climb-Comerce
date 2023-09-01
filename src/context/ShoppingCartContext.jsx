import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const ShoppingCartProvider = ({ children }) => {
  const [cart, setcart] = useState([]);

  const longitud = cart.length;

  return (
    <CartContext.Provider value={{ cart, setcart, longitud }}>
      {children}
    </CartContext.Provider>
  );
};

export default ShoppingCartProvider;

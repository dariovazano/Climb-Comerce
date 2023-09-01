import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const ShoppingCartProvider = ({ children }) => {
  //para el cart
  const [cart, setcart] = useState([]);
  // para el form
  const [name, setname] = useState("");
  const [apellido, setapellido] = useState("");
  const [email, setemail] = useState("");

  const longitud = cart.length;

  return (
    <CartContext.Provider
      value={{
        cart,
        setcart,
        longitud,
        name,
        setname,
        apellido,
        setapellido,
        email,
        setemail,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default ShoppingCartProvider;

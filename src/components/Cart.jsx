import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";

const Cart = () => {
  const { cart, setcart, nombre, longitud } = useContext(CartContext);

  return (
    <div>
      <h2>{nombre}</h2>
      <p>{cart}</p>
      <button onClick={() => setcart("toso cmabio")}>cambiar</button>
      <p>{longitud}</p>
    </div>
  );
};

export default Cart;

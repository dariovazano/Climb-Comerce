import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";

const Comprobante = () => {
  const aux = Math.random() * 10;

  const {
    cart,
    setcart,
    longitud,
    name,
    setname,
    apellido,
    setapellido,
    email,
    setemail,
  } = useContext(CartContext);

  return (
    <div>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert severity="success">
          Gracias {name} {apellido} la compra ha sido exitosa tu numero de orden
          es:{aux}
        </Alert>
      </Stack>
    </div>
  );
};

export default Comprobante;

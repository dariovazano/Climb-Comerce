import { useContext, useState } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Comprobante from "./Comprobante";
import { collection, addDoc, getFirestore } from "firebase/firestore";

const Cart = () => {
  ///////////////////////////////////////////////////////Me traigo todo el contexto
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
  ////////////////////////////////////////////////////////Logia del valor Total
  const total = cart.reduce((accumulator, p) => {
    return accumulator + p.cuenta * p.precio;
  }, 0);
  /////////////////////////////////////////////////////////logica del formulario y subida de la orden a firebase

  const db = getFirestore();

  const [hayform, sethayform] = useState();
  const [orderID, setOrderID] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    sethayform(true);
    setcart([]);
    addDoc(ordersCollection, order).then(({ id }) => setOrderID(id));
  };
  const order = {
    name,
    apellido,
    email,
  };
  const ordersCollection = collection(db, "orden");

  //////////////////////////////////////////////////Logica del boton de borrar
  const hanleBorrar = (borrarId) => {
    let auxcart = cart.filter((item) => item.id != borrarId);
    setcart(auxcart);
  };

  ////////////////////////////////////////////////////return
  return hayform ? (
    /////////////////////////////////////////////////si hay formulario no muestro el carrito y muestro el compoente Comprobante.
    <Comprobante numeroOrden={orderID} />
  ) : longitud === 0 ? (
    //////////////////////////////////////////////////si no hay productos muestro un boton que te lleva a productos.
    <Link to={`/category/${true}`}>
      No hay productos por aqui te invito, has click aqui para volver a
      productos
    </Link>
  ) : (
    ///////////////////////////////////////////aca si ya renderizo el cart
    <>
      {/* //////////////////////////////////Aca estan los elementos de carrito */}
      <Box
        className="ImgHome"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 5,
        }}
      >
        <Grid container spacing={3}>
          {cart.map((p) => {
            return (
              <Grid sx={3} key={1}>
                <Card>
                  <CardMedia
                    sx={{ height: 500, width: 345 }}
                    image={p.imagen}
                    title="green iguana"
                  />
                  <CardContent sx={{ height: 140, maxWidth: 345 }}>
                    <Typography gutterBottom variant="h5" component="div">
                      {p.nombre}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Cantidad: {p.cuenta}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      Precio unitario: {p.precio}€
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {/* /////////aca capturo el ID para eliminar el item del carrito */}
                    {/* y el handelborrar que */}
                    <Button
                      variant="contained"
                      name={p.id}
                      size="small"
                      onClick={() => hanleBorrar(p.id)}
                      esta
                      arriba
                      value={p.id}
                    >
                      borrar
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      {/* ///////////////////////////////aca va la tarjeta con el total */}
      <Box
        className="ImgHome"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 5,
        }}
      >
        <Grid container spacing={3}>
          <Grid sx={3}>
            <Card>
              <CardContent sx={{ height: 140, maxWidth: 345 }}>
                <Typography gutterBottom variant="h5" component="div">
                  TOTAL:
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {total} €
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  Para terminar tu compra llena le formulario que hay debajo.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      {/* ////////////////////////////////////////////////////////aqui va el formulario notar que el box en tipo form para que responda al submit y que el evento handlesubmit esta aqui */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          "& > :not(style)": { m: 1, width: 700 },
        }}
        noValidate
        autoComplete="off"
      >
        {/* //////////////////////////////////////aqui con el onChange de abajo capturo el valor del formularionotar
        que name y setname vienen del contex. */}
        <TextField
          id="outlined-basic"
          label="Nombre"
          variant="outlined"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        {/* //////////////////////////////////////aqui con el onChange de abajo capturo el valor del formularionotar
        que apellido y setapellido vienen del contex. */}
        <TextField
          id="filled-basic"
          label="Apellido"
          variant="filled"
          value={apellido}
          onChange={(e) => setapellido(e.target.value)}
        />
        {/* //////////////////////////////////////aqui con el onChange de abajo capturo el valor del formularionotar
        que email y setemail vienen del contex. */}
        <TextField
          type="email"
          id="standard-basic"
          label="Email"
          variant="standard"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        {/*/////////////////////////////////////////////////////aqui esta el boton type submit para comprar */}
        <Button type="submit" disabled={false} size="large" variant="elevated">
          comprar
        </Button>
      </Box>
    </>
  );
};

export default Cart;

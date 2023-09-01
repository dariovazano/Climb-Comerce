import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";
import { CartContext } from "../context/ShoppingCartContext";
import { Sledding } from "@mui/icons-material";

const ItemDetail = () => {
  //Logica de la parametrizacion del navegador y de la descarga del item desde Firebase
  const { id } = useParams();
  const [producto, setproducto] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const oneItem = doc(db, "Holds", id);
    getDoc(oneItem).then((snapshot) => {
      if (snapshot.exists()) {
        const docs = { id: snapshot.id, ...snapshot.data() };
        setproducto(docs);
      }
    });
  }, []);

  //logia del contador
  const [cuenta, setcuenta] = useState(1);

  const suma = () => setcuenta(cuenta + 1);

  const resta = () => {
    if (cuenta > 1) {
      setcuenta(cuenta - 1);
    }
  };

  //logica de agregado al carrito
  const { cart, setcart, longitud } = useContext(CartContext);

  const agregarItem = () => {
    if (cart.find((item) => item.id == id)) {
      const index = cart.findIndex((item) => item.id == id);
      const aux = cart[index].cuenta;
      cart[index].cuenta = aux + cuenta;
    } else {
      setcart([
        ...cart,
        {
          id,
          cuenta,
          imagen: producto.imagen,
          precio: producto.precio,
          nombre: producto.producto,
        },
      ]);
    }
  };

  console.log(cart);
  return (
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
          <Card key={id}>
            <CardMedia
              sx={{ height: 500 }}
              image={producto.imagen}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {producto.producto}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {producto.descripcion}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                {producto.precio}
              </Typography>
            </CardContent>
            <box>
              <ButtonGroup
                disableElevation
                variant="contained"
                aria-label="Disabled elevation buttons"
              >
                <Button onClick={resta}>-</Button>
                <Typography variant="h6" color="text.secondary">
                  {cuenta}
                </Typography>
                <Button onClick={suma}>+</Button>
              </ButtonGroup>
            </box>
            <CardActions>
              <Button size="small" onClick={agregarItem}>
                <Link to={`/category/${true}`}>Añadir al carrito</Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default React.memo(ItemDetail); //reacmemo hace que no se tenga que cargar nuevamente   el map si es que no ha cambiado el input

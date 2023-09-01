import { useContext } from "react";
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
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Comprobante from "./Comprobante";

const Cart = () => {
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

  const total = cart.reduce((accumulator, p) => {
    return accumulator + p.cuenta * p.precio;
  }, 0);
  console.log(total);

  ///logica del formulario

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(name);
    console.log(apellido);
    return <Comprobante />;
  };

  return (
    <>
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
              <Grid sx={3}>
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
                    <Button size="small">
                      <Link>borrar</Link>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
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
                  total:
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
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          "& > :not(style)": { m: 1, width: 700 },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Nombre"
          variant="outlined"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Apellido"
          variant="filled"
          value={apellido}
          onChange={(e) => setapellido(e.target.value)}
        />
        <TextField
          type="email"
          id="standard-basic"
          label="Email"
          variant="standard"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <Button type="submit" disabled={false} size="large" variant="elevated">
          comprar
        </Button>
      </Box>
      <Comprobante />
    </>
  );
};

export default Cart;

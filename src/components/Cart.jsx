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

const Cart = () => {
  const { cart, setcart, longitud } = useContext(CartContext);
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
                    {p.precio}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {p.cuenta}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    {p.nombre}€
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
  );
};

export default Cart;

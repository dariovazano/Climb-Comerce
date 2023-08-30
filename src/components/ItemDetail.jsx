import React from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const ItemDetail = ({ productos }) => {
  const { id } = useParams();

  const filteredproductos = productos.filter((producto) => producto.id == id);
  console.log(filteredproductos.nombre);
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
        {filteredproductos.map((p) => {
          return (
            <Grid sx={3}>
              <Card key={p.id}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {p.nombre}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {p.descripcion}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Añadir al carrito</Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ItemDetail;

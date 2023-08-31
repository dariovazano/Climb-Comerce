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
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetail = () => {
  const { id } = useParams();
  const [producto, setproducto] = useState([]);
  console.log(producto);

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

  console.log(producto);

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
            <CardActions>
              <Button size="small">Añadir al carrito</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default React.memo(ItemDetail); //reacmemo hace que no se tenga que cargar nuevamente   el map si es que no ha cambiado el input

import Item from "./Item";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Box } from "@mui/material";
import React from "react";

const ItemList = ({ productos }) => {
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
        {productos.map((p) => {
          return (
            <Grid sx={3}>
              <Item
                id={p.id}
                nombre={p.producto}
                descripcion={p.descripcion}
                imagen={p.imagen}
                precio={p.precio}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default React.memo(ItemList); //el reac memo hace que no se realice el map cuando se vuelve a enviar la veriable productos sinedo esta igual a la anterior

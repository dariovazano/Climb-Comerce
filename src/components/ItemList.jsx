import Item from "./Item";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Box } from "@mui/material";

const ItemList = ({ productos }) => {
  return (
    <Box
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
                nombre={p.nombre}
                descripcion={p.descripcion}
                stock={p.stock}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ItemList;

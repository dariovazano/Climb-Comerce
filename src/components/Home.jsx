import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Height } from "@mui/icons-material";
import { orange, red } from "@mui/material/colors";
import ItemListContainerHome from "./ItemListContainerHome";

const Home = () => {
  return (
    <>
      <Box className="ImgHome" sx={{ width: "100%", height: "1000px" }}>
        <Box
          sx={{
            //width: 300,
            //height: 300,
            backgroundColor: orange[700],
            opacity: [0.4, 0.4, 0.4],
          }}
        >
          <Typography variant="h1" gutterBottom>
            BIENVENIDOS A CLIMB-COMERCE, QUE NO SE TE ESCAPE NINGUNA OFERTA!
          </Typography>
        </Box>
        <ItemListContainerHome />
      </Box>
    </>
  );
};

export default Home;

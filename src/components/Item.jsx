import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

const Item = ({ id, nombre, descripcion, imagen, precio }) => {
  return (
    <Card>
      <CardMedia
        sx={{ height: 300, maxWidth: 345 }}
        image={imagen}
        title="green iguana"
      />
      <CardContent sx={{ height: 140, maxWidth: 345 }}>
        <Typography gutterBottom variant="h5" component="div">
          {nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {descripcion}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {precio}€
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link to={`/item/${id}`}>Detalle</Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default Item;

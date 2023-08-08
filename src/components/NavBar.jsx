import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import CartWidget from "./CartWidget.jsx";
import { Link } from "react-router-dom";

const NavBar = () => {
  // variables del menu categorias
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Link to={"/"}>
              <img
                className="ImgLogo"
                src="https://www.bartlettman.com/cdn/shop/products/c63_11979_a323-ultra-o-kwiklock-locking-carabiner_700x700.png?v=1612366781"
                alt=""
              />
            </Link>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Climb-Comerse
            </Typography>

            {/* menu categorias */}
            <div>
              <Button
                variant="contained"
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                Categories
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>
                  <Link to={`/category/${"AVA VOLUMES"}`}>AVA VOLUMES</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to={`/category/${"INOHOLDS"}`}>INOHOLDS</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to={`/category/${"KAI CLIMB"}`}>KAI CLIMB</Link>
                </MenuItem>
              </Menu>
            </div>

            <CartWidget />
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default NavBar;

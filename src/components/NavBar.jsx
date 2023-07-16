import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import CartWidget from './CartWidget.jsx';




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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Climb-Comerse
          </Typography>

{/* menu categorias */}
          <div>
            <Button variant='contained'
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
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
                'aria-labelledby': 'basic-button',
                }}
      >
                <MenuItem onClick={handleClose}>AVA VOLUMES</MenuItem>
                <MenuItem onClick={handleClose}>INO'HOLDS</MenuItem>
                <MenuItem onClick={handleClose}>KAI CLIMB</MenuItem>
            </Menu>
            </div>
          <CartWidget/>
                
        </Toolbar>
      </AppBar>
    </Box>
      </>
  )}

export default NavBar

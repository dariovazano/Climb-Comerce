

import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';



const CartWidget = () => {

    // variable del badge
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `1px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));

    return (
         <Link to={"/Cart"}> 
        <Button color="inherit">
            <IconButton aria-label="cart">
                <StyledBadge badgeContent={99} color="secondary">
                    <ShoppingCartIcon />
                </StyledBadge>
            </IconButton>
        </Button>
        </Link>
    )
}

export default CartWidget





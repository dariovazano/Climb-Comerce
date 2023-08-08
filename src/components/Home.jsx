import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Height } from '@mui/icons-material';
import { orange, red } from '@mui/material/colors';

const Home = () => {
  return (
    <>
    <Box className='ImgHome' sx={{ width: '100%', height:'1000px' }}>
         <Box
      sx={{
        //width: 300,
        //height: 300,
        backgroundColor: orange[700],
        opacity: [0.4, 0.4, 0.4],
        
      }}
      >
      <Typography variant="h1" gutterBottom>
        BIENVENIDOS A CLIMB-COMERCE
      </Typography>
      </Box>
      </Box>
      <div className=''></div>
    </> 
    
  )
}

export default Home
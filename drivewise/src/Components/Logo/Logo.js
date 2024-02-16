import React from 'react';
import { Box, Typography } from '@mui/material';

function Logo() {
  return (
    <a href='/' style = {{textDecoration: 'none'}}>
    <Box sx={{backgroundColor: 'white', padding: '8px', borderRadius: '4px', display: 'flex', alignItems: 'center', mr: '10px',}}>
      {/* <Typography  sx={{color: '#f96d6d', fontWeight: '1000', textShadow: '1px 1px 2px rgba(0,0,0,.2)'}}> */}
      <Typography className='font-bold'>
        Drive Wise
      </Typography>     
    </Box>
    </a>
  );
}

export default Logo;
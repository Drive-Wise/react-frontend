import React from 'react';
import { Box, Typography } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import theme from './Theme'; // Import your custom theme
function Logo() {
  return (
    <a href='/' style = {{textDecoration: 'none'}}>
    <Box
        

      sx={{
        backgroundColor: 'white',
        padding: '8px',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        mr: '10px',
        
      }}
    >
        <ThemeProvider theme = {theme}>
            <Typography variant="body1" 
                sx={{
                    color: '#f96d6d',
                    fontSize: '25px',
                    fontWeight: '1000',
                    textShadow: '1px 1px 2px rgba(0,0,0,.2)'
                }}>
                Drive Wise
            </Typography>
        </ThemeProvider>
        
    </Box>
    </a>
  );
}

export default Logo;
import React from 'react';
import NavBar from '../../Components/Nav Bar/NavBar';
import { Typography } from '@mui/material';
import backgroundImage from '../../Images/DesignsAi_color_matcher.png';
function AboutPage() {
  return (
    <div style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover', // Adjust this property as needed
        backgroundRepeat: 'no-repeat', // Adjust this property as needed
        width: '100%',
        height: '100vh', // Adjust the height of the background
      }}>
      <NavBar/>
      <Typography
        variant="h4"
        component="div"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          fontSize: '32px',
          margin: '10px',
          textAlign: 'center',
          fontWeight: '900',
          
        }}
      >
        Who are we?
      </Typography>
      <Typography  
        sx={{ 
          display: 'block',
          color: '#ffffff',
          fontSize: '20px',
          margin: '10px',
          alignSelf: 'center',
          width: '100%',
        }}
      >
        {/* Your text content */}
      </Typography>
    </div>
  );
}

export default AboutPage;

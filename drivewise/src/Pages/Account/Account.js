import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NavBar from '../../Components/Nav Bar/NavBar';
import tabTheme from './AccountTheme';
import { ThemeProvider } from '@emotion/react';
import backgroundImage from '../../Images/DesignsAi_color_matcher.png';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography sx={{ color: '#ffffff' }}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function AccountPage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={tabTheme}>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover', // Adjust this property as needed
          backgroundRepeat: 'no-repeat', // Adjust this property as needed
          width: '100%',
          height: '100vh', // Adjust the height of the background
          position: 'relative',
        }}
      >
        <NavBar id="nav-bar" />
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            height: 'calc(100vh - 64px)', // Subtract the height of the nav bar
          }}
        >
          <Tabs
            id="tabs"
            orientation="vertical"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: 'divider', height: '100%' }}
          >
            <Tab label="Manage Profile" {...a11yProps(0)} />
            <Tab label="Previous Rides" {...a11yProps(1)} />
            <Tab label="Password & Security" {...a11yProps(2)} />
            {/* Add more Tab components as needed */}
          </Tabs>
          <TabPanel value={value} index={0}>
            Gyat
          </TabPanel>
          <TabPanel value={value} index={1}>
            Damn
          </TabPanel>
          <TabPanel value={value} index={2}>
            Pussy
          </TabPanel>
          {/* Add more TabPanel components as needed */}
        </Box>
      </div>
    </ThemeProvider>
  );
}

import { createTheme } from '@mui/material/styles';

// Define your custom theme
const tabTheme = createTheme({
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          color: '#ffffff', // Change text color
          borderBottom: 1,
          '&.Mui-selected': {
            color: '#f96d6d',  // Change text color for selected tab
          }, 
        },
        wrapper: {
          '& .MuiTab-wrapper': {
            textTransform: 'none', // Make the tab name case sensitive
          },
        },
      },
    },
  },
});

export default tabTheme;


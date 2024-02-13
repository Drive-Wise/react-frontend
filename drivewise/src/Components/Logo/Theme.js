import { createTheme } from '@mui/material/styles';
import LalezarRegular from '../../Fonts/Lalezar/Lalezar-Regular.ttf';



const theme = createTheme({
  typography: {
    fontFamily: 'LalezarRegular, sans-serif',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': {
          fontFamily: 'LalezarRegular',
          src: `url(${LalezarRegular}) format('truetype')`,
        },
      },
    },
  },
});

export default theme;

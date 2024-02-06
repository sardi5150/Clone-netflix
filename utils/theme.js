import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const base = createTheme({
  palette: {
    common: {
      grey: {
        900: "#333",
      }
    },
    primary: {
      main: "#E50914",
    },
    secondary: {
      main: "#FFF",
    },
    error: {
      main: red[400],
    }
  },
});

const theme = responsiveFontSizes(base)

export default theme
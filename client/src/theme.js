import "fontsource-roboto";
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(51,51,51)'
    },
    secondary: {
      main: '#19857b'
    },
    background: {
      default: '#fff'
    }
  }
});

export default theme;

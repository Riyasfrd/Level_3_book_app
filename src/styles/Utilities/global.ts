import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

const GlobalStyles = createGlobalStyle`

     @import-normalize;
     @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap');
     
    *{
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
}

  body {
    font-family: 'Nunito', sans-serif;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;
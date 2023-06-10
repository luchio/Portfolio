import { extendTheme } from "@chakra-ui/react";

const theme = {
 colors:{
    mainGreen: '#BFFF00'
 },
  styles: {
    global: {
      body: {
        backgroundColor: '#000000',
        color:'white',
        margin: 0,
        padding: 0,
        fontFamily:
          "'Nunito', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif",
        WebKitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      },
      h1:{
        fontFamily: "'Source Code Pro', 'Roboto'",
      }
    },
  },
};

export default extendTheme(theme);

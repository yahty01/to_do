import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    //Запись p0+m0 + TAB    
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Fira Code", monospace;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
  }

  body {
    margin: 0;
    font-family: "Fira Code", -apple-system, monospace, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    background-color: unset;
    border: none;
  }
`
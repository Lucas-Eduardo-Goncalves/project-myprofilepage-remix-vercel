import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --purple: #5A189A;
    --medium-purple:rgba(90, 24, 154, 0.7);
    --dark-purple: #10002B;
    --ultra-dark-purple: #0B0020;
    --secondary: #FF9E00;
    --terceary: #4CC9F0;
    --shape: #FFFFFF;
    --background:#02010A;
    --dark-shape:rgba(255, 255, 255, 0.7);
    --warning: #D90429;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    @media(max-width: 1080px) {
      font-size: 93.75%;
    }
    @media(max-width: 720px) {
      font-size: 87.5%;
    }
  }  

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    color: var(--shape);
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
    color: var(--shape);
  }

  button, a {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6; 
    cursor: not-allowed;
  }
  
  ::-webkit-scrollbar {
    width: 0;
  }
`;
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  :focus {
    outline: 0;
  }

  body {
    background: ${(props) => props.theme.white};
    padding: 0 160px;
    
    -webkit-font-smoothing: antialiased;

    @media only screen and (max-width: 1395px) {
    padding: 0 20px;
  }
  }

  body, input, textarea, button {
    font-family: ${(props) => props.theme.fonts.regular};
    font-weight: 400;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
  }

  ::-webkit-scrollbar {
    width: 12px;
    border: 1px solid rgb(200,200,200)
  }

  ::-webkit-scrollbar-thumb {
    width: 10px;
    background-color: ${(props) => props.theme.purple};
  }
`

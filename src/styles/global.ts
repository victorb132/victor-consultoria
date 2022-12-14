import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme.white};
    }

    body, input, textarea, button {
        font-family: 'Montserrat', 'sans-serif';
        font-weight: 300;
        font-size: 1rem;
    }

    a {
        cursor: pointer;
    }
`

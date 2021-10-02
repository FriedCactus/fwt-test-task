import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        display: block;
        min-height: 100vh;
        font-family: 'Roboto', sans-serif;

        background-color: ${(props) => props.theme.mainColor};
        color: ${(props) => props.theme.secondaryColor};
        transition: all 0.3s;
    }

    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    img{
        display: block;
        max-width: 100%;
    }

    li {
        list-style: none;
    }
`;

export default GlobalStyles;

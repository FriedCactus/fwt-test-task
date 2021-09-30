import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        display: block;
        min-height: 100vh;
        font-family: 'Roboto', sans-serif;

        background-color: ${(props) => props.theme.mainColor};
        color: ${(props) => props.theme.secondaryColor};
        transition: all 0.3s ease;
    }

    *,
    *::after,
    *::before {
        margin: 0;
        box-sizing: border-box;
    }

    img{
        display: block;
        max-width: 100%;
    }
`;

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --mainBackground: #130429;
    }

    /*** The new CSS Reset - version 1.2.0 (last updated 23.7.2021) ***/

    /* Preferred box-sizing value */
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    /* Remove list styles (bullets/numbers) */
    ol, ul {
        list-style: none;
    }

    /* For images to not be able to exceed their container */
    img {
        max-width: 100%;
    }

    /* removes spacing between cells in tables */
    table {
        border-collapse: collapse;
    }

    /* revert the 'white-space' property for textarea elements on Safari */
    textarea {
        white-space: revert;
    }

    html, body, #__next {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
    }

    img {
        display: inline-block;
    }
`;

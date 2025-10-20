import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    //reset
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Bricolage Grotesque", sans-serif;
        //contorno fora da borda
        outline: none;
    }
    
    body {
        font-family: "Bricolage Grotesque", sans-serif;
        font-weight: 400;
        font-style: normal;
    }
`;

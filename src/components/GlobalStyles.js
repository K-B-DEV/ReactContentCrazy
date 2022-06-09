import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgray;
        }
    }
    body{
        font-family: 'Montserrat', sans-serif;
        width: 100%;
        overflow-y: visible;
        overflow-x: hidden !important;
        background-color: #0D0D0D;
    }

    img{
        display: block;
    }
    .left-arrow{
        left: 1rem;
        position: absolute;
        grid-row: 2/3;
        font-size: 3rem;
        color: darkred;
        z-index: 20;
        cursor: pointer;
        user-select: none;
        transition: 0.3s;
    }
    .right-arrow{
        right: 1rem;
        position: absolute;
        grid-row: 2/3;
        font-size: 3rem;
        color: darkred;
        z-index: 20;
        cursor: pointer;
        user-select: none;
        transition: 0.3s;
    }
    h2{
        font-family: 'Kanit', sans-serif;
        color: white;
    }
    h1{
        font-family: 'Kanit', sans-serif;
        color: white; 
    }

    .left-arrow:hover {
        transform: scale(1.2);
    }
    .right-arrow:hover {
        transform: scale(1.2);
    }
    .MuiPaper-root {
        background-color:#0D0D0D !important;
        color: white;
    }
    .MuiTypography-root{
        color: white;
    }
    .MuiSvgIcon-root{
        color: white;
    }
    
`;

export default GlobalStyles;

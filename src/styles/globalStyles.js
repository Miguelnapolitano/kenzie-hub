import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        
    }

    body{
        background-color: #121214;
    }

    h1, h2, h3, h4, h5, h6, p, span, a, button, input, input::placeholder, label {
        font-family: 'Inter', sans-serif;
    }

    :root{
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-disable: #59323F;

        --color-white: #FFFFFF;

        --color-grey-0: #F8F9FA;
        --color-grey-1: #868E96;
        --color-grey-2: #343B41;
        --color-grey-3: #212529;
        --color-grey-4: #121214;

        --color-feedback-success: #3FE864;
        --color-feedback-negative: #E83F5B;

        --font-size-1: 0.75rem;
        --font-size-2: 0.875rem;
        --font-size-3: 1rem;
        --font-size-4: 1.175rem;
    }

    .container{
        max-width: 780px;
        margin: 0 auto;
    }
`

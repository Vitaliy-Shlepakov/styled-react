import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

export const GlobalStyle = createGlobalStyle`
    ${normalize()}
    body {
        padding: 0;
        margin: 65px 0 0 0;
        box-sizing: border-box;
    }
    
    *, *:before, *:after {
      box-sizing: inherit;
    }
    
    main{
        width: 90%;
        margin: 0 auto;
    }
`;

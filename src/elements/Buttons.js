import styled from "styled-components";
import {applyStyleModifiers} from "styled-components-modifiers";
import {teal, elevation} from '../utilities';
import {lighten} from 'polished';

const BUTTON_MODIFIER = {
    small: () => `
        font-size: 1rem;
        padding: 4px 10px;
    `,
    cancel: () => `
        background: tomato;
    `
}

const Button = styled.button`
    background-color: ${teal};
    padding: 5px 20px;
    border-radius: 4px;
    border: none;
    color: #fff;
    font-size: 1.2rem;
    ${elevation[1]};
    
    &:hover{
        background-color: ${lighten(0.2, teal)}
    };
    
    ${applyStyleModifiers(BUTTON_MODIFIER)};
`;

const CancelButton = styled(Button)`
    background: tomato;
    
      &:hover{
        background-color: ${lighten(0.2, 'tomato')}
    }
`;

export {
    Button,
    CancelButton
}
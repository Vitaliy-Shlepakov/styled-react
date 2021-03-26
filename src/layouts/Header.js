import React from 'react';
import styled from "styled-components";
import { purple, elevation, fixed, serif } from "../utilities";

const Header = ({className}) => {
    return (
        <header className={className}>
            <span className="logo">LOGO</span>
        </header>
    );
};

const StyledHeader =  styled(Header)`
    background-color: purple;
    padding: 10px 5%;
    width: 100%;
    ${fixed({x: '0', y: '0', yProp: 'top', xProp: 'left'})};
    ${elevation[1]};
    ${serif}
    
    .logo{
        display: block;
        width: 40px;
    }
`;

export default StyledHeader;


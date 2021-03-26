import styled from 'styled-components';
import {elevation} from "../utilities";
import {Button} from "./Buttons";

const Card = styled.div`
    border-radius: 6px;
    ${elevation[1]};
    padding: 10px;
`;

const CardButton = styled(Button)`
    width: 100%;
`;

Card.Button = CardButton;

export {
    Card
};
import styled from "styled-components";
import {maxWidth} from "../utilities/Media";

const Heading = styled.h1`
  font-size: 2rem;
  
  ${maxWidth.$tablet`
    color: red;
  `}
`;

export {
  Heading
}
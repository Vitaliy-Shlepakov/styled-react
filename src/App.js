import './App.css';
import styled, { css } from "styled-components";

//media queries

const size = {
    $mobile: 768,
    $tablet: 992,
    $desktop: 1280,
}

const maxWidth = Object.keys(size).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media(max-width: ${size[label]}px) {
            ${css(...args)}
    `;
    return acc;
}, {});

//

const Heading = styled.h1`
  font-size: 2rem;
  
  ${maxWidth.$tablet`
    color: red;
  `}
`;

const Button = styled.button`
    background-color: indigo;
    padding: 5px 20px;
    border-radius: 4px;
    border: none;
    color: #fff;
    background: indigo;
`;

const CancelButton = styled(Button)`
    background: tomato;
`;

const AppWrapper = styled.div`
    background: #ddd;
    min-height: 100vh;
    
    ${Button} {
        margin: 2rem;
    };
`;

function App() {
  return (
    <AppWrapper>
      <Heading>Heading text</Heading>
        <CancelButton>
            Button
        </CancelButton>
        <Button>
            Save
        </Button>
        <Fake
            className={'TEST'}
        />
    </AppWrapper>
  );
};

const Fake = ({className}) => <div className={className}>
    <h2>I am fake component</h2>
</div>



export default App;

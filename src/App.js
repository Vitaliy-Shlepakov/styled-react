import {GlobalStyle} from './Global';
import Header from "./layouts/Header";
import { Button, Card } from './elements';


function App() {
    return (
        <>
            <main>
                <Header/>
                <Card>
                    <h2>Card Heading</h2>
                    <Card.Button>Say Hellow</Card.Button>
                </Card>
            </main>
            <Button modifiers="small">Small</Button>
            <Button modifiers="cancel">Cancel</Button>
            <Button modifiers={['small', 'cancel']}>Small Cancel</Button>
            <GlobalStyle/>

        </>
    );
};

export default App;

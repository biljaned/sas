import * as ReactDOMClient from 'react-dom/client';
import { StudTool } from './components/StudTool'



// const carList = [
//     { id: 1, godine: 20, adresa: 'Mrakovicka 22'},
//     { id: 2, godine: 25, adresa: 'Durmitorska'}
// ];


const rootElement = document.getElementById("root");

const root = ReactDOMClient.createRoot(rootElement);
// root.render(<StudTool cars={carList} />
root.render(<StudTool />

);

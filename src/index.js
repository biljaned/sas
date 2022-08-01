import * as ReactDOMClient from 'react-dom/client';
// import { StudTool } from './components/StudTool'
import App from './components/App';




// const carList = [
//     { id: 1, godine: 20, adresa: 'Mrakovicka 55'},
//     { id: 2, godine: 25, adresa: 'Durmitorska'}
// ];


const rootElement = document.getElementById("root");

const root = ReactDOMClient.createRoot(rootElement);
// root.render(<StudTool cars={carList} />
//LINIJA ZA POCETNU STRANICU: STUDENTI
// root.render(<StudTool /> );
root.render(<App/> );


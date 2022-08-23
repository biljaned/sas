import * as ReactDOMClient from 'react-dom/client';
import App from './components/App';

const rootElement = document.getElementById("root");

const root = ReactDOMClient.createRoot(rootElement);

root.render(<App/> );


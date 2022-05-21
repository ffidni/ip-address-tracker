import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import './styles/reset.css';
import './styles/layout.css';
import './styles/modules.css';
import './styles/state.css';

window.GEOAPI = "https://geo.ipify.org/api/v2/country,city?apiKey=at_ZaKoWK4ZS86TJhjmMo282H98hdqzk&domain="
window.CURRENTAPI = "https://api.ipify.org/?format=json";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

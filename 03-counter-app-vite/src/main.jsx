import React from 'react';
import ReactDOM from "react-dom/client";
import { CounterApp } from './CounterApp';
/* import { Name } from "./NameApp"; */

import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={20} />
        {/* <Name nom='Dani' cognom="Morales" flag={true} /> */}

    </React.StrictMode>
)
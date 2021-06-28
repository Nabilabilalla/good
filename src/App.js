// eslint-disable-next-line no-unused-vars
import React, { useState, Component } from 'react'
import Login from './componentes/login';
import Menu from './componentes/menu';

function App() {

    // eslint-disable-next-line no-unused-vars
    const [conectado, setConectado] = useState(false);

    const acceder = (estado) => {
        setConectado(estado)
    }

    return (
        conectado ? < Menu / > : < Login acceder = { acceder }
        / >

    );


}

export default App;
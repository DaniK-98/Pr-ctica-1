import React, { useState } from 'react';
import './diseno.css'

function App() {
    // Estado para almacenar el texto del usuario
    const [textoUsuario, actualizarTexto] = useState('');

    // Manejador del cambio en la entrada
    const cuandoEscribe = (e) => {
        const nuevoTexto = e.target.value;
        actualizarTexto(nuevoTexto);
    };

    return (
        <div>
            <h2>Escriba algo aquí:</h2>
            <input type="text" onChange={cuandoEscribe} value={textoUsuario} />
            <h3>Lo que escribió:</h3>
            <p>{textoUsuario}</p>
        </div>
    );
}

export default App;

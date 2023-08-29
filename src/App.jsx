import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import { BaseColaboradores } from './../baseDeDatosColaboradores'
import './App.css'
import Listado from './components/Listado'
import Formulario from './components/Formulario'
import Buscador from './components/Buscador'
import Alerta from './components/Alerta'

function App() {
    const [colaboradores, setColaboradores] = useState(BaseColaboradores);
    const [colaboradoresFiltrados, setColaboradoresFiltrados] = useState(BaseColaboradores); // <-- Nuevo estado para colaboradores filtrados
    const [alertInfo, setAlertInfo] = useState({ type: '', message: '' });

    return (
        <>
            <div>
                <h2>Lista de colaboradores</h2>
                <Alerta type={alertInfo.type} message={alertInfo.message} />
                <div style={{ textAlign: 'start', width: '25rem' }}>
                    <Buscador colaboradores={colaboradores} setColaboradoresFiltrados={setColaboradoresFiltrados} setAlertInfo={setAlertInfo} /> {/* Pasamos los props necesarios al Buscador */}
                </div>
                <div style={{ display: 'flex', gap: '2rem' }}>
                    <Listado colaboradoresFiltrados={colaboradoresFiltrados} /> {/* Mostramos los colaboradores filtrados */}
                    <Formulario setColaboradores={setColaboradores} colaboradores={colaboradores} setAlertInfo={setAlertInfo} />
                </div>
            </div>
        </>
    )
}

export default App;


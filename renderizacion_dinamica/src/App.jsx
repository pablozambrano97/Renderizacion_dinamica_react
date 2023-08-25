import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import { BaseColaboradores } from '../../baseDeDatosColaboradores'
import './App.css'
import Listado from './components/Listado'
import Formulario from './components/Formulario'
import Buscador from './components/Buscador'
import Alerta from './components/Alerta'


function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);


  return (
    <>
    <div>
      <h2>Lista de colaboradores</h2>
      <div style={{textAlign:'start', width:'25rem'}}>
        <Buscador/>
      </div>
      <div style={{display:'flex', gap:'2rem'}}>
      <Listado tableItem={colaboradores}/>
      <Formulario setColaboradores={setColaboradores} colaboradores={colaboradores}/>
      </div>
    </div>
    
      
  
    </>)
}

export default App

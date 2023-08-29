import React, {useState, useRef } from 'react'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';




export default function Buscador({colaboradores, setColaboradoresFiltrados, setAlertInfo}) {
    const [input, setInput] = useState();
    const form = useRef();
    let busqueda=null;
    function handleInput(e){
        setInput(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        if(!input){
            setAlertInfo({ type: 'danger', message: 'Por favor ingresar un valor válido.' });
        }else{
            busqueda = colaboradores.filter((colaborador)=>colaborador.nombre.toLowerCase().includes(input) || colaborador.correo.toLowerCase().includes(input) || colaborador.edad.toLowerCase().includes(input) || colaborador.cargo.toLowerCase().includes(input) || colaborador.telefono.toLowerCase().includes(input));
            setColaboradoresFiltrados(busqueda);
            form.current.reset();
        }
    }

    return (
        <Form ref={form} onSubmit={(e)=>handleSubmit(e)}  style={{display:'flex', gap:'1rem'}}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control onChange={(e)=>handleInput(e)} type="text" placeholder="Busca un colaborador" />
            </Form.Group>
            <Button className='bottonColor' type="submit">
                Buscar
            </Button>
        </Form>


    )
}

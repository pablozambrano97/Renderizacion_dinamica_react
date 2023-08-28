import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Formulario({ setColaboradores, colaboradores, setAlertInfo }) {
    const [input, setInput] = useState({});

    function handleInput(e) {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!input.nombre || !input.correo || !input.edad || !input.cargo || !input.telefono) {
            setAlertInfo({ type: 'danger', message: 'Por favor complete todos los campos.' });
            return;
        }

        // Usar la función setColaboradores con el estado previo para añadir el nuevo colaborador
        setColaboradores(prevColaboradores => [...prevColaboradores, input]);

        setInput({});  // reset form data
        setAlertInfo({ type: 'success', message: 'Colaborador agregado exitosamente.' });
    }

    return (
        <div>
            <h5>Agregar Colaborador</h5>
            <Form noValidate onSubmit={(e) => handleSubmit(e)}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control name="nombre" onChange={(e) => handleInput(e)} type="text" placeholder="Ingrese nombre" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control name="correo" onChange={(e) => handleInput(e)} type="email" placeholder="Ingrese email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control name="edad" onChange={(e) => handleInput(e)} type="number" placeholder="Ingrese edad" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control name="cargo" onChange={(e) => handleInput(e)} type="text" placeholder="Ingrese cargo" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control name="telefono" onChange={(e) => handleInput(e)} type="number" placeholder="Ingrese telefono" />
                </Form.Group>
                <Button className='bottonColor' type="submit">
                    Agregar colaborador
                </Button>
            </Form>
        </div>
    );
}



import React, { useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Formulario({ setColaboradores, setColaboradoresFiltrados, colaboradores, setAlertInfo }) {
    const [input, setInput] = useState({ id: Date.now() });
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const form = useRef();

    function handleInput(e) {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    function validateInput(input) {
        if (!input?.nombre || !input?.correo || !input?.edad || !input?.cargo || !input?.telefono) {
            setAlertInfo({ type: 'danger', message: 'Por favor complete todos los campos.' });
            return;
        } else if (input.edad < 18) {
            setAlertInfo({ type: 'danger', message: 'Debe ser mayor a 18 años' });
            return;
        } else if (!emailPattern.test(input.correo)) {
            setAlertInfo({ type: 'danger', message: 'Por favor, introduce una dirección de correo electrónico válida.' });
            return;
        } else {
            form.current.reset();

            const nuevosColaboradores = [...colaboradores, input];
            setColaboradores(nuevosColaboradores); // Actualizamos la lista de colaboradores
            setColaboradoresFiltrados(nuevosColaboradores); // Actualizamos la lista de colaboradores filtrados

            setInput({ id: Date.now() });
            setAlertInfo({ type: 'success', message: 'Colaborador agregado exitosamente.' });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        validateInput(input);
    }

    return (
        <div>
            <h5>Agregar Colaborador</h5>
            <Form ref={form} noValidate onSubmit={(e) => handleSubmit(e)}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control name="nombre" onChange={(e) => handleInput(e)} type="text" placeholder="Ingrese nombre" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control name="correo" onChange={(e) => handleInput(e)} type="email" placeholder="Ingrese email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control min={18} name="edad" onChange={(e) => handleInput(e)} type="number" placeholder="Ingrese edad" />
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



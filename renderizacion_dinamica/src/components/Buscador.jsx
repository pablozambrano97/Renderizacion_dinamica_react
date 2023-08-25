import React from 'react'
import Form from 'react-bootstrap/Form';
export default function Buscador() {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="text" placeholder="Busca un colaborador" />
            </Form.Group>
        </Form>

    )
}

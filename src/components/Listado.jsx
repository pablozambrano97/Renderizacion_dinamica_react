import React from 'react'
import Table from 'react-bootstrap/Table';
export default function Listado({ colaboradoresFiltrados }) {

    const tableItems= colaboradoresFiltrados.map((colaborador)=>(
        <tr key={colaborador.id}>
            <td>{colaborador.nombre}</td>
            <td>{colaborador.correo}</td>
            <td>{colaborador.edad}</td>
            <td>{colaborador.cargo}</td>
            <td>{colaborador.telefono}</td>
        </tr>));

        
    return (
        <Table hover striped borderless responsive size="sm">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Edad</th>
                <th>Cargo</th>
                <th>Teléfono</th>
            </tr>
        </thead>
        <tbody>
            {tableItems}
    </tbody>
    </Table>
    )
}

import React from 'react';
import { Alert } from 'react-bootstrap';

export default function Alerta({ type, message }) {
    if (!message) return null;

    return <Alert variant={type}>{message}</Alert>;
}


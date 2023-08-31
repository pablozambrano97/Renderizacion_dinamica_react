import React, { useEffect } from 'react';
import { Alert } from 'react-bootstrap';

export default function Alerta({ type, message, setAlertInfo }) {
  useEffect(() => {
    if (message && type) {
      const timer = setTimeout(() => {
        setAlertInfo({ type: '', message: '' });
      }, 3500);

      
      return () => clearTimeout(timer);
    }
  }, [message, type, setAlertInfo]);

  if (!message) return null;

  return <Alert variant={type}>{message}</Alert>;
}



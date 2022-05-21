import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const FormPatients = ({ formValue }) => {

  const [formState, setFormState] = useState({})

  const handleClick = () => {
    formValue(formState)
  }

  const setValues = (event) => {
    console.log(event)
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    })
  }


  return (
    <>
      {console.log('->>>', formState)}
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" name="name" onBlur={(event) => setValues(event)} placeholder="Ingresa tu nombre" />
          <Form.Label>Edad</Form.Label>
          <Form.Control type="number" name="age" onBlur={(event) => setValues(event)} placeholder="Ingresa tu edad" />
          <Form.Label>Altura</Form.Label>
          <Form.Control type="number" name="height" onBlur={(event) => setValues(event)} placeholder="Ingresa tu altura" />
          <Form.Label>Motivo de la visita</Form.Label>
          <Form.Control type="text" name="reason" onBlur={(event) => setValues(event)} placeholder="Ingresa tu motivo" />
        </Form.Group>
        <Button onClick={() => handleClick()} variant="primary" type="button">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default FormPatients
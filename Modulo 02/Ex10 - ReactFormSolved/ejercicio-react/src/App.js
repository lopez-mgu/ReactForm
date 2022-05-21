import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import Component from './components/Component/Component';
import Hello from './components/Hello/Hello';
import InputText from './components/InputText/InputText';
import ColorInput from './components/ColorInput/ColorInput';
import InputSize from './components/InputSize/InputSize';
import FormPatients from './components/FormPatients/FormPatients';
import CardPatient from './components/CardPatient/CardPatient';




function App() {

  // const [text, setText] = useState('hola')
  // const [color, setColor] = useState('#000000')
  // const [size, setSize] = useState('16')

  const pacientes = [
    {
      nombre: 'maria',
      edad: 26,
      altura: 160
    },
    {
      nombre: 'Fernanda',
      edad: 30,
      altura: 180
    },
    {
      nombre: 'Alejandra',
      edad: 26,
      altura: 150
    },
    {
      nombre: 'Antonio',
      edad: 29,
      altura: 190
    },
  ]

  const [patients, setPatients] = useState([])


  const addPatient = (data) => {
    setPatients(
      [...patients, data]
    )
  }

  return (
    <div className="App">
      {/* <Component />
      <Hello name="Fredo" /> */}

      {/* <h1 style={{
        color: color,
        fontSize: `${size}px`
      }}>
        {text}
        {
          console.log(size)
        }
      </h1>
      <p>color de texto</p>
      <ColorInput colorValue={setColor} />
      <p>Tamaño de texto</p>
      <InputSize sizeValue={setSize} />
      <p >Texto</p>
      <InputText textValue={setText} /> */}


      <FormPatients formValue={addPatient} />

      {
        patients.map((paciente, i) => {
          return (
            <CardPatient data={paciente} key={i} />
          )
        })
      }

    </div>
  );
}

export default App;

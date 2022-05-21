import React from 'react'
import './styles.css'

const Hello = ({ name }) => {
  return (
    <h2 className="hello__title">Hola {name} </h2>
  )
}

export default Hello
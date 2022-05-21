import React from 'react'

const CardPatient = ({ data }) => {
  console.log(data)
  return (
    <div>
      <h3>{data.name}</h3>
      <p> {data.age} </p>
      <p>{data.height}</p>
      <p>{data.reason}</p>
    </div>
  )
}

export default CardPatient
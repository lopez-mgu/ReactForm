import React from 'react'

const InputSize = ({ sizeValue }) => {
  return (
    <input
      type="range"
      min="1"
      max="100"
      step="1"
      defaultValue="1"
      onChange={(e) => sizeValue(e.target.value)}
    />
  )
}

export default InputSize
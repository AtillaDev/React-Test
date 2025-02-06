import React, { useState } from 'react'

function ColorPicker() {
    const [color, setColor] = useState("#fff")

    function handleColorChange(event) {
        setColor(event.target.value)
    }

    return (
    <div>
        <h1>ColorPicker</h1>
        <div className="color-picker" style={{backgroundColor: color}}>
            <p>Seleced Color: {color}</p>
        </div>
        <label>Select a Color:</label>
        <input type="color" value={color} onChange={handleColorChange}/>
    </div>
  )
}       

export default ColorPicker
import React, { useState } from 'react'


function MyComponent() {
    const [name, setName] = useState("Guest")
    const [quantity, setQuantity] = useState()

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    
    return (
    <div>
        <input value={name} onChange={handleNameChange}/>
        <p>Name: {name}</p>
    </div>
    
  )
}

export default MyComponent
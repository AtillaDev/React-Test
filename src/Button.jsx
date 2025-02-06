import React from 'react'

function Button() {

  let count = 0

  // const handleClick = () => console.log("Ouch!");
  // const handleClick2 = (name) => {
  //   if(count < 3) {
  //     count++;
  //     console.log(`${name} clicked me ${count} times`)
  //   }
  //   else{
  //     console.log(`STOP`)
  //   }
  // };

  const handleClick = (e) => {e.target.textContent = "Ok"}

  return (
    <button onClick={(e) => handleClick(e)}>Button</button>
  )
}

export default Button
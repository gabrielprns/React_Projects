import { useState } from 'react'
import '../src/index.css'

const App = () => {

  const[typeOfColor, setTypeOfColor] = useState('hex');
  const[color, setColor] = useState('#000000');
  
  function randomColorUtility(length){
    return Math.floor(Math.random()*length)
  }
  function handleCreateRandomHexColor(){
    const hex = [1,2,3,4,5,6,7,8,9,"A", "B", "C", "D", "E", "F"];
    let hexColor= "#"
    for(let i =0; i<6; i++){
      hexColor += hex[randomColorUtility(hex.length)]
    }
    console.log(hexColor)
  }
  function handleCreateRandomRgbColor(){

  }
  return (
    <div>

      <div className='Container' style={{
        width:"100vw",
        height:"100vh",
        background: color
      }}>
        <div className='Container'>
          <button onClick={()=> setTypeOfColor('hex')}>Create Hex Color</button>
          <button onClick={()=> setTypeOfColor('rgb')}>Create RGB Color</button>
          <button onClick={typeOfColor === "hex" ? 
          handleCreateRandomHexColor : handleCreateRandomRgbColor}
          >Generate Random Color</button>
        </div>
      </div>
    </div>
    
  )
}

export default App

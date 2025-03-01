import { useState } from "react";

export default function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');

    function randomColorUtility(length) {
        return Math.floor(Math.random()*length)
    }
    function handleCreateRandomHexColor() {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = '#';

        for (let i = 0; i < 6; i++) {
            hexColor  += hex[rand]            
        }
    }
    
    function handleCreateRandomRgbColor() {
        
    }
    return (
      <div className='container' style={{background:color}}>
          <button onClick={()=> setTypeOfColor('hex')}>Create Hex color</button>
          <button onClick={()=> setTypeOfColor('rgb')}>Create RGB color</button>
      <button onClick={typeOfColor ==='hex'? handleCreateRandomHexColor :handleCreateRandomRgbColor
}>Generate Random Color</button>
    </div>
  )
}

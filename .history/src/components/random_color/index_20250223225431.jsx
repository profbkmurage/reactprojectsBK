import { useState } from "react";

export default function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');

    function 
  
    return (
      <div className='container' style={{background:color}}>
          <button onClick={()=> setTypeOfColor('hex')}>Create Hex color</button>
          <button onClick={()=> setTypeOfColor('rgb')}>Create RGB color</button>
      <button onClick={typeOfColor ==='hex'? handleCreateRandomHexColor }>Generate Random Color</button>
    </div>
  )
}

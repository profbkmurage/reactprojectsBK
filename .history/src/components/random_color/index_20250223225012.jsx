import { useState } from "react";

export default function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');
  
    return (
      <div className='container' style={{background:color}}>
          <button on>Create Hex color</button>
          <button on>Create RGB color</button>
      <button>Generate Random Color</button>
    </div>
  )
}

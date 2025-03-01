import { useState } from "react";

export default function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');
  
    return (
      <div className='container' style={{background:color}}>
          <button oncl>Create Hex color</button>
          <button oncl>Create RGB color</button>
      <button>Generate Random Color</button>
    </div>
  )
}

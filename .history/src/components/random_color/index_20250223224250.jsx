import { useState } from "react";

export default function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('')
  
    return (
      <div className='container'>
          <button>Create Hex color</button>
          <button>Create RGB color</button>
      <button>Generate Random Color</button>
    </div>
  )
}

// import { useState } from 'react'
import data from './data.js'

export default function Accordian () {
    //   const [selected, setSelected] = useState(null);
    function handleSingleSelection(getCurrentId) {
        console.log()
    }

  return (
    <div className='wrapper'>
      <div className='accordian'>
        {data && data.length > 0 ? (
          data.map(dataItem => (
            <div key={dataItem.id} className='item'>
              <div onClick={handleSigleSelection} className='title'>
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  )
}

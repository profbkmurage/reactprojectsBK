import { useState } from 'react'
import data from './data.js'
import './style.css'

export default function Accordian () {
    const [selected, setSelected] = useState(null) //keeps track of a sigle selected item
    const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
    const [multipleSelection, setMultipleSelection] =useState([]);


  function handleSigleSelection (getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId) //if the current id is already selected, it will not display it twice otherwise it will display it
  }

  return (
    <div className='wrapper'>
      <button onClick={()=>setEnableMultipleSelection}>Enable Multi Selection</button>
      <div className='accordian'>
        {data && data.length > 0 ? (
          data.map(dataItem => (
            <div key={dataItem.id} className='item'>
              <div
                onClick={() => handleSigleSelection(dataItem.id)}
                className='title'
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ? (
                <div className='content'>{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  )
}

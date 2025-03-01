import { useState } from 'react'
import data from './data.js'

export default function Accordian () {
      const [selected, setSelected] = useState(null);
    function handleSigleSelection(getCurrentId) {
        setSelected(getCurrentId===selected ?null: getCurrentId); //if the current id is already selected, it will not display it twice 
    }

  return (
    <div className='wrapper'>
      <div className='accordian'>
        {data && data.length > 0 ? (
          data.map(dataItem => (
            <div key={dataItem.id} className='item'>
              <div onClick={()=>handleSigleSelection(dataItem.id)} className='title'>
                <h3>{dataItem.question}</h3>
                <span>+</span>
                  </div>
                  {selected ===dataItem.id?(<div className='content'>{dataItem.answer}</div>
                  ):null}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  )
}

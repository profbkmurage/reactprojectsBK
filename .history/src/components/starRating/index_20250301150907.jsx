import { FaStar } from 'react-icons/fa'
import { useState } from 'react'
export default function StarRating ({ noOfStars = 5 }) {
  //this is going to receive an argument of the number of stars
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  function handleClick (getCurrentIndex) {}

  function handleMouseEnter (getCurrentIndex) {}

  function handleMouseLeave (getCurrentIndex) {}

  return (
    <div className='star-rating'>
      {[...Array(noOfStars)].map((_, index) => {
        return (
          <FaStar
                key={index}
                className={index<=}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            size={40}
          />
        )
      })}
    </div>
  )
}

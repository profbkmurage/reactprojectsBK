import { useEffect, useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import './styles.css'

export default function ImageSlider (url, page, limit) {
  const [images, setImages] = useState([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [errorMsg, setErrorMsg] = useState(null)
  const [loading, setLoading] = useState(false)

async function fetchImages (getUrl) {
  try {
    setLoading(true)
const response = await fetch(  `https://picsum.photos/v2/list?page=${page}&limit=${limit}`
)

    // Check for HTTP errors
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    // Ensure response is JSON
    const contentType = response.headers.get('content-type')
    if (!contentType || !contentType.includes('application/json')) {
      throw new Error('Received unexpected content type: ' + contentType)
    }

    const data = await response.json()

    if (Array.isArray(data)) {
      setImages(data)
    } else {
      throw new Error('Invalid JSON format')
    }
  } catch (error) {
    setErrorMsg(error.message)
  } finally {
    setLoading(false)
  }
}

  function handlePrevious () {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
  }

  function handleNext () {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
  }

  useEffect(() => {
    if (url) fetchImages(url)
  }, [url, page, limit])

  if (loading)
    return <div className='alertDisplays'>Loading images, please wait...</div>
  if (errorMsg)
    return <div className='alertDisplays'>An error occurred: {errorMsg}</div>

  return (
    <div className='slider-container'>
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className='arrow arrow-left'
      />

      {images.length > 0 &&
        images.map((imageItem, index) => (
          <img
            key={imageItem.id}
            src={imageItem.download_url}
            alt={`Image ${index}`}
            className={
              currentSlide === index
                ? 'current-image'
                : 'current-image hide-current-image'
            }
          />
        ))}

      <BsArrowRightCircleFill
        onClick={handleNext}
        className='arrow arrow-right'
      />

      <span className='circle-indicators'>
        {images.length > 0 &&
          images.map((_, index) => (
            <button
              key={index}
              className={
                currentSlide === index
                  ? 'current-indicator'
                  : 'current-indicator inactive'
              }
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
      </span>
    </div>
  )
}

// https://picsum.photos/v2/list

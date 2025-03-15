import { useEffect, useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import './styles.css'
import PropTypes from 'prop-types' 

export default function ImageSlider ({ url, page = 1, limit = 10 }) {
  const [images, setImages] = useState([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [errorMsg, setErrorMsg] = useState(null)
  const [loading, setLoading] = useState(false)

  async function fetchImages (getUrl) {
    try {
      setLoading(true)
      setErrorMsg(null)

      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`)

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      const contentType = response.headers.get('content-type')
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Received non-JSON response from API')
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

ImageSlider.propTypes = {
  url: PropTypes.string.isRequired, {// `url` must be a string and required}
  page: PropTypes.number, // `page` must be a number (optional)
  limit: PropTypes.number // `limit` must be a number (optional)
}


import { useEffect, useState } from 'react'
import { BsArrowLeftCircleFill,BsArrowRightCircleFill
 } from 'react-icons/bs'

export default function ImageSlider (url, page,limit) {
  const [images, setImages] = useState([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [errorMsg, setErrorMsg] = useState(null)
  const [loading, setLoading] = useState(false)

  async function fetchImages (getUrl) {
    try {
      setLoading(true)
 
      const response = await fetch(`${getUrl}?page=${page} & limit =${limit} `) //this can take extra parameters like page and other limits
      const data = await response.json()

      if (data) {
        setImages(data)
        setLoading(false)
      }
    } catch (error) {
      setErrorMsg(error.message)
      setLoading(false)
    }
    }
    

    function handlePrevious() {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
    }
    function handleNext(){}
    setCurrentSlide(currentSlide === images.length - 1 ? 0: currentSlide + 1)

  useEffect(() => {
    if (url !== '') fetchImages(url)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])

  if (loading) {
    return (
      <div className='alertDisplays'>
        Loading all necessary data, please wait
      </div>
    )
  }
  if (errorMsg !== null) {
    return <div className='alertDisplays'>An error occured ! {errorMsg} </div>
  }

    return <div className='slider-container'>
      <BsArrowLeftCircleFill onClick={handlePrevious} className='arrow arrow-left'/>
        {
            images && images.length ?
                images.map(imageItem => {
                    <img
                        key={imageItem.id}
                        src={imageItem.download_url}
                        alt={imageItem.download_url}
                        className={current}
                    />    
                })
            : null
        }
        <BsArrowRightCircleFill onClick={handleNext} className='arrow arrow-right' />
        <span className='circle-indicators'>
            {
                images && images.length ? images.map((_, index) => <button
                    key={index}
                    className='current-indicator'
                ></button>) :null
            }
        </span>
  </div>
}

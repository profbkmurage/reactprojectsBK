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
  useEffect(() => {
    if (url !== '') fetchImages(url)
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

    return <div className='container'>
      <BsArrowLeftCircleFill className='arrow arrow-left'/>
        {
            images && images.length ?
                images.map(imageItem => {
                    <img
                        key={imageItem.id}
                        src={imageItem.download_url}
                        alt={imageItem.download_url}
                        className='current-image'
                    />    
                })
            : null
        }
        <BsArrowLeftCircleFill className='arrow arrow-right' />
        <span> </span>
  </div>
}

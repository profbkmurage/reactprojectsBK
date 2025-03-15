import { useEffect, useState } from "react"

export default function ImageSlider(url, limit) {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null)

    async function fetchImages(getUrl) {
        try {
            const response = await fetch
            
        } catch (error) {
            setErrorMsg(error.message);
        }
    }
    useEffect(() => {
        if (url !== '')fetchImages(url)
    },[url])
    
    return <div className="container"></div>
}
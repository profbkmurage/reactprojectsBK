import { useEffect, useState } from "react"

export default function ImageSlider(url, limit) {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const []

    async function fetchImages(getUrl) {
        try {
            
        } catch (error) {
            
        }
    }
    useEffect(() => {
        if (url !== '')fetchImages(url)
    },[url])
    
    return <div className="container"></div>
}
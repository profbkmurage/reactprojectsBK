import { useEffect, useState } from "react"

export default function ImageSlider(url, limit) {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null)
    const [loading, setLoading] = useState(false);

    async function fetchImages(getUrl) {
        try {
            
            const response = await fetch(getUrl);
            const data = await response.json();

            if (data){}
            
        } catch (error) {
            setErrorMsg(error.message);
        }
    }
    useEffect(() => {
        if (url !== '')fetchImages(url)
    },[url])
    
    return <div className="container"></div>
}
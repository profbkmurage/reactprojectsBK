import { useEffect, useState } from "react"

export default function ImageSlider(url, limit) {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null)
    const [loading, setLoading] = useState(false);

    async function fetchImages(getUrl) {
        try {
            setLoading(true);

            const response = await fetch(getUrl);
            const data = await response.json();

            if (data) {
                setImages(data);
                setLoading(false)
            }
            
        } catch (error) {
            setErrorMsg(error.message);
            setLoading(false)
        }
    }
    useEffect(() => {
        if (url !== '') fetchImages(url)
    }, [url]);
    
    if (loading) {
        return div.alert
    }
    
    return <div className="container"></div>
}
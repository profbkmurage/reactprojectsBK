import { useEffect } from "react";
import { useState } from "react"


export default function LoadMoreData() {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        async function fetchProduts(params) {
            
        }
    },[])

    return <div className="container"></div>
}
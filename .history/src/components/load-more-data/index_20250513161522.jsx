import { useEffect } from 'react'
import { useState } from 'react'
import  './style.css' 

export default function LoadMoreData() {
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0)
    const [disableButton,setDisableButton] = useState(false)

        async function fetchProducts () {
        try {
            setLoading(true)
            const response = await fetch(
            `https://dummyjson.com/products?limit=2 0&skip=${
                count === 0 ? 0 : count + 20
            }`
            )
            const result = await response.json()
            // console.log(result)
            if (result && result.products && result.products.length) {
            //   setProducts(result.products)
                setProducts((prevData) => [...prevData, ...result.products]);
                setLoading(false)            
            }
        } catch (e) {
            console.log(e)
            setLoading(false)
        }
        }
    

    useEffect(() => {
        fetchProducts();
    }, [count]);

    useEffect(()=>{},[prod])

    if (loading) {
            <div>Loading data! Please wait</div>
    }
return (
    <div className='load-more-container'>
      <div className='product-container'>
        {' '}
        {products && products.length
          ? products.map(item => (
              <div className='product' key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className='button-container'>
        <button onClick={()=> setCount(count + 1)}>Load More Products</button>
      </div>
    </div>
  )
}

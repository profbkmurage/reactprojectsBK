import { useEffect } from 'react'
import { useState } from 'react'

export default function LoadMoreData () {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [count, setCount] = useState(0)

  useEffect(() => {
    async function fetchProduts () {
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
          setProducts(result.products)
          setLoading(false)
        }
      } catch (e) {
        console.log(e)
        setLoading(false)
      }
    }
  }, [])
  if (loading) {
    return <div>Loading data! Please wait</div>
  }
    return <div className='container'>
        {
            
      }
  </div>
}

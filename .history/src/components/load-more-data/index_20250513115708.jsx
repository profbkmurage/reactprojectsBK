import { useEffect } from 'react'
import { useState } from 'react'

export default function LoadMoreData () {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [count, setCount] = useState(0)

  useEffect(() => {
    async function fetchProduts () {
      try {
          const response = await fetc${count ===0 }`https://dummyjson.com/products?limit=2 0&skip=${count ===0 }`)
      } catch (e) {
        console.log(e)
      }
    }
  }, [])

  return <div className='container'></div>
}

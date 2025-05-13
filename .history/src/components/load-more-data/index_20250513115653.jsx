import { useEffect } from 'react'
import { useState } from 'react'

export default function LoadMoreData () {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [count, setCount] = useState(0)

  useEffect(() => {
    async function fetchProduts () {
      try {
          const response = await fetc${count}`https://dummyjson.com/products?limit=2 0&skip=${count}`)
      } catch (e) {
        console.log(e)
      }
    }
  }, [])

  return <div className='container'></div>
}

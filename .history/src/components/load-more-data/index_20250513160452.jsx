import { useEffect } from 'react'
import { useState } from 'react'
import  './style.css' 

export default function LoadMoreData () {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [count, setCount] = useState(0)

    useEffect(() => {
      fetchProducts()''
    , [])
  if (loading) {
    return <div>Loading data! Please wait</div>
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

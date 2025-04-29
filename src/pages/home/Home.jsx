import React, { useEffect, useState } from 'react'
import '../style/Home.css'
import Filters from '../../components/Filters'
import GetAllProducts from '../../hooks/GetAllProducts'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Home() {
  GetAllProducts();
  const {user} = useSelector(store => store.auth)
  const {products} = useSelector(store => store.products)
  const [showFilters, setShowFilters] = useState(false)
  const navigate = useNavigate();
  
  useEffect(()=>{
    if(!user){
      navigate('/login')
    }
  }, [user])

  return (
    <div className='home-Container'>
      <div className="label">
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
      </div>
      <div className='filter-label'>
        <div className="showHideFilters-btn" onClick={() => setShowFilters(!showFilters)}>
          <h3>{products?.length} ITEMS</h3>
          { showFilters ? <h3>HIDE FILTER</h3> : <h3>SHOW FILTER</h3> }
        </div>
        <h3 className='recommended'>RECOMMENDED <span>▾</span></h3>
      </div>
      <div className="products-main-container">
        {showFilters && (
          <div className="products-filter-bar">
            <Filters />
          </div>
        )}

        <div className="products-display">
          {products.slice(0, 20).map((product, i) => (
            <div className="product-card" key={i}>
              <img src={product?.image} alt="Product" />
              <div className="product-detail">
                <h2>{product?.title}</h2>
                {/* <p>{product?.price} Rs</p> */}
                <div className="produt-likes">
                  <p>{user ? product?.price + ' Rs' : `Sign in or Create an account to see pricing`}</p>
                  <span>♡ {product?.rating?.rate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home

import { useState } from 'react'
import Header from './Header.jsx'
import Gallery from './Gallery.jsx'
import ProductInfo from "./ProductInfo.jsx"
import AddToCart from "./AddToCart.jsx"
import Attribution from "./Attribution.jsx"


function App() {
  const [items, setItems] = useState(0);
  const [isCartShown, setCartShown] = useState(false)

  return (
  <>
  <Header isCartShown={isCartShown} setCartShown={setCartShown} items={items} setItems={setItems} handle={() => {}}/>
    <div className='lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:w-[85%] lg:mx-auto lg:gap-x-20 lg:mt-13'>
      <Gallery />
  <ProductInfo />
  <AddToCart isCartShown={isCartShown} setCartShown={setCartShown} items={items} setItems={setItems} inc={() => setItems((prev) => prev+1)} dec={() => setItems(prev => (prev > 0 ? prev - 1 : prev))}/>
  </div>

  <Attribution />
  
  </>
  )
}

export default App

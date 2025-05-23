import { useState } from 'react'
import Header from './Header.jsx'
import Gallery from './Gallery.jsx'
import ProductInfo from "./ProductInfo.jsx"
import AddToCart from "./AddToCart.jsx"

function App() {
  const [items, setItems] = useState(0);
  const [isCartShown, setCartShown] = useState(false)

  return (
  <>
  <Header isCartShown={isCartShown} setCartShown={setCartShown} items={items} setItems={setItems} handle={() => {}}/>
  <Gallery />
  <ProductInfo />
  <AddToCart isCartShown={isCartShown} setCartShown={setCartShown} items={items} setItems={setItems} inc={() => setItems((prev) => prev+1)} dec={() => setItems(prev => (prev > 0 ? prev - 1 : prev))}/>
  </>
  )
}

export default App

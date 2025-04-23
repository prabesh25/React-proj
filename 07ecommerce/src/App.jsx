import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter} from  'react-router-dom'
import Nav from './comp/nav'
import Footer from './comp/footer'
import Rout from './comp/rout'
import Homeproduct from './comp/home_product'


function App() {
  //add to cart
  const [cart,setCart] = useState([])
//shop page product
const [shop, setShop] = useState(Homeproduct)
//shop category filter
const [search, setSearch] = useState('')
const Filter = (x) => {
  const catefilter = Homeproduct.filter((product) => {
    return product.cat === x
  })
  setShop(catefilter)
}
const allcatefilter = () => {
  setShop(Homeproduct)
}
//shop search filter
const searchlength = (search || []).length === 0
const seasrchproduct = () => {
  if(searchlength)
{
  alert("Please Search Something")
  setShop(Homeproduct)
}
else{
   
    const searchfilter = Homeproduct.filter((x) => 
      {
      return x.cat === search
    })
    setShop(searchfilter)
  
  
  
}}

//add to cart

const addtocart = (product) => {
  const exist = cart.find((x) => {
    return x.id === product.id
  })
  if(exist){
    alert("This product is already added in the cart")
  }
  else{
    setCart([...cart, {...product, qty:1}])
alert("added to cart")
  }
  
}

  return (
    <>
    <BrowserRouter>
    <Nav  search={search} setSearch={setSearch}  seasrchproduct={seasrchproduct}/>
    <Rout setCart={setCart} cart={cart}  shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart}/>
    <Footer />
    </BrowserRouter>
      
    </>
  )
}

export default App

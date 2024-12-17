import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../Assets/cover.png"
import cart from "../Assets/Cart.jpg"
import "./Navbar.css"
const Navbar = () => {

  const [menu,setMenu] = useState("shop")

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img className='logo' src={logo} alt="" />
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("Shop")}}><Link className='my-link' to='/'>Shop</Link>{menu==="Shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Men")}}><Link className='my-link' to='/mens'>Men</Link> {menu==="Men"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Women")}}><Link className='my-link' to='/women'>Women</Link> {menu==="Women"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Kids")}}><Link className='my-link' to='/kids'>Kids</Link> {menu==="Kids"?<hr/>:<></>}</li>
      </ul>
      <div className='login-cart'>
        <Link className='my-link' to='/login'><button>Login</button></Link>
        <Link className='my-link' to='./cart'><img className='cart' src={cart} alt="" /></Link>
        <div className="cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar

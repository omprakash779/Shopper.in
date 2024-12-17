// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from "./Components/Navbar/Navbar"
import Shop from "./Pages/Shop"
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner.jpg'
import women_banner from './Components/Assets/banner.jpg'
import kids_banner from './Components/Assets/banner.jpg'
function App() {
  return (
    <div className='app'>
    <BrowserRouter>
       <Navbar />
      <Routes>
      <Route path='/' element={<Shop/>} />
      <Route path='/mens' element={<ShopCategory banner={men_banner} category='men'/>} />
      <Route path='/women' element={<ShopCategory banner={women_banner} category='women'/>} />
      <Route path='/kids' element={<ShopCategory banner={kids_banner} category='kids'/>} />
      <Route path='/product' element={<Product/>} >
          <Route path=':productId' element={<Product/>} />
      </Route>
      <Route path='/cart' element={<Cart/>} />
      <Route path='/login' element={<LoginSignup/>} />
      </Routes>
      <Footer />
    </BrowserRouter>

    </div>
  );
}

export default App;

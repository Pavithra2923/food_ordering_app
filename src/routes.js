import { Route, Routes, useLocation  } from "react-router-dom";
import Header from './components/header';
import HomePage from './pages/Home';
import Login from './pages/Login';
import ItemPage from './pages/Index';
import Register from "./pages/register";
import CartPage from './pages/cart';
import Footer from "./components/footer";


export default function RoutesPage(){ 

    const location = useLocation()
   
                                       
    return(
        <>
        {location.pathname !== '/Login' && location.pathname !=='/register' && <Header/>}
        <Routes>
              <Route path='/Login'    element={<Login />} />
              <Route path='/' exact element={<HomePage />} />
              <Route path='/items/:hotel_name' element={<ItemPage />} />
              <Route path='/register' element={<Register />} />
              <Route path='/cart' element={<CartPage />} />  
          </Routes>
        {location.pathname !== '/Login' && location.pathname !=='/register' && <Footer/>}
        

     
        </>
    )

}
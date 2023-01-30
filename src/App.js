import {BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/includes/Nav';
import NotFound from './components/NotFound';
import AddProduct from './pages/AddProduct';
import AdminProducts from './pages/AdminProducts';
import Home from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProductsPage from './pages/ProductsPage';
import RegistrationPage from './pages/RegistrationPage';
import SingleProduct from './pages/SingleProduct';
function App(){
   return(
   
    <>
    <Nav />
    <Routes>
    <Route path='/' element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path='login' element={<LoginPage/>}/>
       <Route path='*' element={<NotFound />}></Route>
       <Route path="/add-product" element={<AddProduct />} />
      <Route path='/admin-products' element={<AdminProducts/>} />
      <Route path="/app" element={<App/>} />
    </Routes>
    </>
   
   )
}
export default App;
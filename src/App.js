import {BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/includes/Nav';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import ProductsPage from './pages/ProductsPage';
import RegistrationPage from './pages/RegistrationPage';
function App(){
   return(
    <BrowserRouter>
    <>
    <Nav />
    <Routes>
    <Route path='/' element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path='login' element={<LoginPage/>}/>
    </Routes>
    </>
    </BrowserRouter>
   )
}
export default App;
import {Link, NavLink} from 'react-router-dom';
import Home from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';
import ProductsPage from '../../pages/ProductsPage';
import RegistrationPage from '../../pages/RegistrationPage';
import style from './Nav.module.css';

function Nav() {
  return (
     <header>
        <nav className={style.navBar}>
      <ul className={style.leftnavBar}>
     <li> <Link to="/" > Home</Link> </li> 
     <li><Link to="/products" > Products</Link></li>
     <li><Link to="register">Rigester</Link></li>
     <li><Link to="login">Login</Link></li>
      </ul>
      <ul className={style.rightnavBar}>
      <li><NavLink to="/add-product">Add Product</NavLink></li>
      <li> <NavLink to="/admin-products">Admin Products</NavLink></li>
      </ul>
        </nav>
     </header>
  )
}

export default Nav
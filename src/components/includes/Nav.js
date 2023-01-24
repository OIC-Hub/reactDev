import {Link} from 'react-router-dom';
import Home from '../../pages/Home';
import LoginPage from '../../pages/LoginPage';
import ProductsPage from '../../pages/ProductsPage';
import RegistrationPage from '../../pages/RegistrationPage';
import style from './Nav.module.css';

function Nav() {
  return (
     <header>
        <nav>
      <ul className={style.navBar}>
     <li> <Link to="/" > Home</Link> </li> 
     <li><Link to="/products" > Products</Link></li>
     <li><Link to="register">Rigester</Link></li>
     <li><Link to="login">Login</Link></li>
      </ul>
        </nav>
     </header>
  )
}

export default Nav
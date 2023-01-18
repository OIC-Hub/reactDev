import {Link} from 'react-router-dom';
import Home from '../../pages/Home';
import LoginPage from '../../pages/LoginPage';
import ProductsPage from '../../pages/ProductsPage';
import RegistrationPage from '../../pages/RegistrationPage';
function Nav() {
  return (
     <header>
        <nav>
     <Link to="/" > Home</Link>
     <Link to="/products" > Products</Link>
     <Link to="register">Rigester</Link>
     <Link to="login">Login</Link>
        </nav>
     </header>
  )
}

export default Nav
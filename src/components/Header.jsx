import { Link } from 'react-router-dom';
import image from '../assets/img/doguito.svg';
import '../assets/css/componentes/header.css';

function Header() {
    return (
        <header className='header container'>
            <div className='menu-hamburguer'>
                <span className='menu-hamburguer__icon'></span>
            </div>
            <div className='header-container'>
                <Link to="/" className='flex flex--center'>
                    <img src={image} alt="doguito" className='header__logo' />
                    <h1 className='header__title'>Petshop</h1>
                </Link>
            </div>
            <nav className='menu-header' >
                <ul className='menu-items' >
                    <li><Link to="#" className="menu-item menu-item--entrar">Enter?</Link></li>
                    <li><Link to="#" className="menu-item">Products</Link></li>
                    <li><Link to="/" className="menu-item">Blog</Link></li>
                    <li><Link to="/about" className="menu-item">About</Link></li>
                </ul>
            </nav>
            <div className='menu-header-background' ></div>
        </header>
    )
};

export default Header;
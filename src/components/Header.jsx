import image from '../assets/img/doguito.svg';
import '../assets/css/componentes/header.css';

function Header() {
    return (
        <header className='header container'>
            <div className='menu-hamburguer'>
                <span className='menu-hamburguer__icon'></span>
            </div>
            <div className='header-container'>
                <a href="/" className='flex flex--center'>
                    <img src={image} alt="doguito" className='header__logo' />
                    <h1 className='header__title'>Petshop</h1>
                </a>
            </div>
            <nav className='menu-header' >
                <ul className='menu-items' >
                    <li><a href="#" className="menu-item menu-item--entrar">Enter?</a></li>
                    <li><a href="#" className="menu-item">Products</a></li>
                    <li><a href="/" className="menu-item">Blog</a></li>
                    <li><a href="/about" className="menu-item">About</a></li>
                </ul>
            </nav>
            <div className='menu-header-background' ></div>
        </header>
    )
};

export default Header;
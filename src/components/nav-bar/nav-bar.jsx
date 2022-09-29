import LoginRegister from '../auth/login-register';
import Logo from '../logo/logo';
import style from './nav-bar.module.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className={style.nav}>
            <Logo />
            <LoginRegister />
            <Link to='/hotels' ><button className={style.bla}>Tous les hôtels</button></Link>

        </nav>
    );
};

export default NavBar;
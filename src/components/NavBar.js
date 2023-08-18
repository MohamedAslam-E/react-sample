import profile from './images/avatar.jpg';
import logo from './images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () =>{ 
return(
    <header className="border-bottom border-dark col-12">
        <nav className="navbar">
            <a href="#" className="navbar-brand px-3">
                <img src={logo} width="30" height="40" alt="logo" />
                one school
            </a>
            <img
                src={profile}
                width="40"
                height="40"
                className="rounded-circle"
                alt="profile"
            />
        </nav>
    </header>
);
}
export default NavBar;
import "./header.css"
import {Link} from "react-router-dom"

const Header = () => {
    return <header>
        <div className="header-container" >
            <div className="header_container-image">
                <Link to="/">
                    <img src="img/starneutron-logo.png" alt="StarNeutron" className="header_image"/>
                </Link>
                
            </div>
            <nav className="header-nav">
                <ul className="header_list">
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/about">Acerca de</Link></li>
                    <li><Link to="/contact">Contacto</Link></li>
                </ul>
            </nav>
       
        </div>
    </header>
};

export default Header;

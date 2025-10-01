import { FaHome, FaRegFolder, FaEnvelope } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Header.css"
import { HashLink } from 'react-router-hash-link';


function Header({activeSection}){
    return(
        <header className="header">
            <nav className="header-nav">
                <HashLink smooth className={`header-nav-a ${activeSection === "inicio" ? "header-nav-a-active" : ""}`} to={"/#inicio"}><FaHome /></HashLink>
                <HashLink smooth className={`header-nav-a ${activeSection === "misproyectos" ? "header-nav-a-active" : ""}`} to={"/#misproyectos"}><FaRegFolder /></HashLink>
                <HashLink smooth className={`header-nav-a ${activeSection === "contacto" ? "header-nav-a-active" : ""}`} to={"/#contacto"}><FaEnvelope/></HashLink>
            </nav>
        </header>
    )
}

export default Header;